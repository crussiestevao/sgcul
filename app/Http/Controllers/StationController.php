<?php

namespace App\Http\Controllers;

use App\Http\Resources\station\StationResourceCollection;
use App\Models\station\Station;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StationController extends Controller
{
    
    public function index (){
        $stations = Station::all();

        $stations->first()->hasDebit();

        $data = compact('stations');
        return Inertia::render('stations/List',$data);
    }

    public function store(Request $request){

        $station = new Station();
        $station->name = $request->name;
        $station->address = $request->address;
        $station->contact = $request->contact;
        $station->save();

        $all = Station::all();

        return $all;
    }

    public function getBalances($id){

        $station = new StationResourceCollection(Station::where('id', $id)->get());
        $data = compact('station');
        
        return $data; 
    }
}
