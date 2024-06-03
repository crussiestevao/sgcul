<?php

namespace App\Models\balance;

use App\Models\station\Station;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Balance extends Model
{
    use HasFactory;

    public function station(){
        return $this->belongsTo(Station::class, 'station_id');
    }

   
}
