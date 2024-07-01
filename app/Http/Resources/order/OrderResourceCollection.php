<?php

namespace App\Http\Resources\order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        $data = $this->collection->map(function ($order, $key) {

            return [
               'id'=> $order->id,
               'code'=>$order->order,
               'created_at'=>date_format($order->created_at, 'd/m/y h:i'),
               'station' => $order->station->name,
               'type'=>$order->type,
               'debit' =>$order->debit,
               'credit'=>$order->credit,
               'registration'=>$order->registration,
               'driver'=>$order->driver,
               'balance'=>$order->balance,
               'amount' =>number_format($order->amount, 2),
               'items'=> $order->items
            ];
        });
        return $data->toArray();
    }
}