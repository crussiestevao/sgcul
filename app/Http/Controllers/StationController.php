<?php

namespace App\Http\Controllers;

use App\Http\Resources\station\StationResourceCollection;
use App\Models\station\Station;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class StationController extends Controller
{

    public function index()
    {
        $stations = Station::all();
        $data = compact('stations');
        return Inertia::render('stations/List', $data);
    }

    public function store(Request $request)
    {

        $station = new Station();
        $station->name = $request->name;
        $station->address = $request->address;
        $station->contact = $request->contact;
        $station->save();

        $all = Station::all();

        return $all;
    }

    public function getBalances($id)
    {

        $station = new StationResourceCollection(Station::where('id', $id)->get());
        $data = compact('station');

        return $data;
    }

    public function makePayments(Request $request)
    {
        $station = Station::find($request->station);
        abort_if(!$station->hasCredit(), Response::HTTP_FORBIDDEN, 'Nao tem dividas nessa Estacão');

        if ($station->currentCredit()>=floatVal($request->total)) {
           $amount = $station->currentCredit()-floatVal($request->total);

           $station->createNewCredit($amount);

           $data = $this->getBalances($station->id);
           return $data;
        }
    }

    public function makeDeposits(Request $request)
    {
        $station = Station::find($request->station);

        if($station->currentDebit() > 0) {
            $value = $station->currentDebit() + $request->total;
            try {
                $station->createNewDebit($value, $request->method, $request->obs, $request->doc_number);
            } catch (\Throwable $th) {
                //throw $th;
            }
            $data = $this->getBalances($station->id);
            return $data;
        }else{

            $value = $request->total;
            try {
                $station->createNewDebit($value, $request->method, $request->obs, $request->doc_number);
            } catch (\Throwable $th) {
                //throw $th;
            }
            $data = $this->getBalances($station->id);
            return $data;
        }
    }
}