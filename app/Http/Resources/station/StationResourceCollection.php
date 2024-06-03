<?php

namespace App\Http\Resources\station;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class StationResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        $data = $this->collection->map(function ($station, $key) {

            return [
               'id'=> $station->id,
               'name'=>$station->name,
               'credit' => $station->currentCredit(),
               'debit'  => $station->currentDebit(),
               'moviments' =>$station->orders
            ];
        });
        return $data->toArray();
    }
}
