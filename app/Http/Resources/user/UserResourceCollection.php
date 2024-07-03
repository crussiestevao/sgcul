<?php

namespace App\Http\Resources\user;

use App\Http\Resources\order\OrderResourceCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Hash;

class UserResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        $data = $this->collection->map(function ($user, $key) {

            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' =>$user->email,
                'created_at' => $user->created_at->toDateTimeString(),
                'roles' => $user->roles->pluck('name'),
            ];
        });
        return $data->toArray();
    }
}