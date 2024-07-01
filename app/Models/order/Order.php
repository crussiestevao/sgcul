<?php

namespace App\Models\order;

use App\Models\items\OrderItem;
use App\Models\station\Station;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $order
 * @property string|null $registration
 * @property string|null $balance
 * @property string|null $credit
 * @property string|null $debit
 * @property string|null $driver
 * @property string|null $customer
 * @property int|null $customer_id
 * @property string|null $unit_price
 * @property string|null $expirity_date
 * @property string|null $validated_at
 * @property string|null $notes
 * @property int|null $station_id
 * @method static \Illuminate\Database\Eloquent\Builder|Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order query()
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCredit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCustomer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereDebit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereDriver($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereExpirityDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereRegistration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereStationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUnitPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereValidatedAt($value)
 * @mixin \Eloquent
 */
class Order extends Model
{
    use HasFactory;

    public function items(){
        return $this->hasMany(OrderItem::class, 'order_id');
    }

    public function station(){
        return $this->belongsTo(Station::class, 'station_id');
    }
}