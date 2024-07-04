<?php

namespace App\Http\Controllers\orders;

use App\Http\Controllers\Controller;
use App\Http\Resources\order\OrderResourceCollection;
use App\Models\categories\Category;
use App\Models\items\OrderItem;
use App\Models\order\Order;
use App\Models\product\Product;
use App\Models\station\Station;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Storage;

class OrdersController extends Controller
{
    public function index()
    {

        $unvalidated_orders = new OrderResourceCollection(Order::whereValidatedAt(null)
            ->orderBy('created_at', 'desc')
            ->get());

        $validated_orders = new OrderResourceCollection(Order::where('validated_at', '<>', null)
            ->orderBy('created_at', 'desc')
            ->get());

        $stations = Station::all();
        $products = Product::all();

        $data = compact('validated_orders', 'unvalidated_orders', 'stations', 'products');

        return Inertia::render("Orders/Orders", $data);
    }

    public function emit()
    {

        $products = Product::all();
        $stations = Station::all();

        $data = compact('products', 'stations');

        return Inertia::render("Orders/NewOrder", $data);
    }

    public function store(Request $request)
    {


        $stations = Station::find($request->station);



        if (Order::count() > 0) {
            $counter = Order::query()
                ->orderBy('created_at', 'desc')
                ->get()->first()->id + 1;
        } else {
            $counter = Order::count() + 1;
        }


        $order = new Order();

        $order->order = $request->code ? $request->code : 'RQ' . $counter . '' . Carbon::now()->year;
        $order->driver = $request->driver;
        $order->registration = $request->registration;
        $order->station_id = $stations->id;
        $order->user_id = Auth::user()->id;


        $order->save();

        $total_amount = 0;

        foreach ($request->items as $item) {

            $product = Product::find($item['id']);

            $order_item = new OrderItem();
            $order_item->order_id = $order->id;
            $order_item->product_id = $product->id;
            $order_item->code = $product->code;
            $order_item->price = $product->price;
            $order_item->name = $product->name;
            $order_item->quantity = $item['quantity'];
            $order_item->save();

            $total_amount += $product->price * $item['quantity'];
        }

        $order->amount = $total_amount;
        $order->notes = $request->notes;


        $order->save();

        return $order;
    }

    public function print($id)
    {

        $order = Order::find($id);

        $data = compact('order');

        $pdf = Pdf::loadView('thermal.index', $data);

        return $pdf->stream('Requisicao.pdf');
    }

    public function validateOne($id)
    {

        $order = Order::find($id);

        $stations = $order->station;

        if ($stations->currentDebit() >= floatval($order->amount)) {

            $new_value = $stations->currentDebit() - floatval($order->amount);

            $order->type = "debito";
            $order->balance = $new_value;
            $order->credit = $stations->currentCredit();
            $order->debit = $stations->currentDebit();


            $stations->createNewDebit($new_value);
        } else {
            $new_value = $stations->currentCredit() + floatval($order->amount);

            $order->type = "credito";
            $order->balance = $new_value - $stations->currentDebit();
            $order->credit = $stations->currentCredit();
            $order->debit = $stations->currentDebit();

            $stations->createNewCredit($new_value - $stations->currentDebit());
        }

        $order->validated_at = now();
        $order->save();

        $data = Order::whereValidatedAt(null)
            ->orderBy('created_at', 'desc')
            ->get();


        return $data;
    }

    public function validateAll()
    {
        $unvalidated_orders = new OrderResourceCollection(Order::whereValidatedAt(null)
            ->orderBy('created_at', 'desc')
            ->get());

        foreach ($unvalidated_orders as $order) {
            try {
                $this->validateOne($order->id);

                sleep(1);
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        $validated_orders = new OrderResourceCollection(Order::where('validated_at', '<>', null)
            ->orderBy('created_at', 'desc')
            ->get());

        return $validated_orders;
    }

    public function destroy($id)
    {
        $order = Order::find($id);
        $order->delete();
        return response()->json([], 200);
    }

    public function update(Request $request)
    {

        $stations = Station::find($request->station);

        $order = Order::find($request->id);

        $order->driver = $request->driver;
        $order->registration = $request->registration;
        $order->station_id = $stations->id;
        $order->notes = $request->notes;

        foreach ($order->items as $items) {
            $items->delete();
        };

        $total_amount = 0;

        foreach ($request->items as $items) {

            $item = collect($items);
            $product_id = $item->has('product_id') ? $item['product_id'] : $item['product'];

            $product = Product::find($product_id);
            $order_item = new OrderItem();
            $order_item->order_id = $order->id;
            $order_item->product_id = $product->id;
            $order_item->code = $product->code;
            $order_item->price = $product->price;
            $order_item->name = $product->name;
            $order_item->quantity = $item['quantity'];
            $order_item->save();


            $total_amount += $product->price * $item['quantity'];
        }

        $order->amount = $total_amount;

        $order->save();

        $data = new OrderResourceCollection(Order::whereValidatedAt(null)
            ->orderBy('created_at', 'desc')
            ->get());

        return $data;
    }

    public function getOrderData() // for barChart
    {
        $orderData = Order::select(DB::raw('YEAR(created_at) as year'), DB::raw('count(*) as count'))
            ->groupBy('year')
            ->orderBy('year')
            ->get();

        $years = $orderData->pluck('year');
        $counts = $orderData->pluck('count');

        $categoriesLabels = collect([]);
        $stationsLabels = collect([]);

        $categoriesSeries = collect([]);
        $stationsSeries = collect([]);


        foreach (Category::all() as $cat) {
            $categoriesLabels->push($cat->name);
            $total = 0 ;
            foreach($cat->products as $prod){
                $total += $prod->items->count();
            }
            $categoriesSeries->push($total);
        }

        foreach (Station::all() as $st) {
            $stationsLabels->push($st->name);
            $stationsSeries->push($st->orders->count());
        }




        $orderChartdata = [
            'options' => [
                'chart' => [
                    'id' => 'Requisicoes Chart'
                ],
                'xaxis' => [
                    'categories' => $years
                ]
            ],
            'series' => [
                [
                    'name' => 'Requisicoes',
                    'data' => $counts
                ]
            ]
        ];

        $categorisChartData = [
            'options' => [
                'chart' => [
                    'type' => 'donut'
                ],
                'labels' => $categoriesLabels
            ],
            'series' =>  $categoriesSeries,
        ];

        $stationsChartData = [
            'options' => [
                'chart' => [
                    'type' => 'donut'
                ],
                'labels' => $stationsLabels
            ],
            'series' =>  $stationsSeries,
        ];

        $data = compact('orderChartdata', 'stationsChartData', 'categorisChartData');

        return response()->json($data);
    }
}