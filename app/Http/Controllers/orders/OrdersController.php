<?php

namespace App\Http\Controllers\orders;

use App\Http\Controllers\Controller;
use App\Models\items\OrderItem;
use App\Models\order\Order;
use App\Models\product\Product;
use App\Models\station\Station;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdersController extends Controller
{
    public function index()
    {
        return Inertia::render("Orders/Orders");
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

        $count = Order::count();

        $order = new Order();

        $order->order = $request->code ? $request->code : 'L.OR' + $count + '' + Carbon::now()->year();
        $order->driver = $request->driver;
        $order->registration = $request->registration;
        $order->station_id = $stations->id;

        $order->save();

        $total_amount = 0;

        foreach ($request->items as $item) {

            $product = Product::find($item['id']);

            $order_item = new OrderItem();
            $order_item->order_d = $order->id;
            $order_item->product_d = $product->id;
            $order_item->code = $product->code;
            $order_item->price = $product->price;
            $order_item->name = $product->name;
            $order_item->quantity = $item['quantity'];
            $order_item->save();

            $total_amount += $product->price * $item['quantity'];
        }

        if ($stations->currentDebit() >= $total_amount) {

            $new_value = $stations->currentDebit() - $total_amount;

            $order->type = "debito";
            $order->balance = $new_value;
            $order->credit = $stations->currentCredit();
            $order->debit = $stations->currentDebit();
            $order->amount = $total_amount;
            $order->notes = $request->notes;

            $stations->createNewDebit($new_value);
        } else {
            $new_value = $stations->currentCredit() + $total_amount;

            $order->type = "credito";
            $order->balance = $new_value;
            $order->credit = $stations->currentCredit();
            $order->debit = $stations->currentDebit();
            $order->amount = $total_amount;
            $order->notes = $request->notes;

            $stations->createNewCredit($new_value);
        }

        $order->save();

        return $order;
    }

    public function print($id)
    {
        dd($id);
    }
}
