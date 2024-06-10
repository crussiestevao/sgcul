<?php

namespace App\Models\balance;

use App\Models\station\Station;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * 
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $balance
 * @property string|null $credit
 * @property string|null $debit
 * @property string|null $init_balance
 * @property string|null $obs
 * @property string|null $method
 * @property string|null $doc_number
 * @property string|null $validated_at
 * @property int|null $station_id
 * @property-read Station|null $station
 * @method static \Illuminate\Database\Eloquent\Builder|Balance newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Balance newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Balance query()
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereCredit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereDebit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereDocNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereInitBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereObs($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereStationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Balance whereValidatedAt($value)
 * @mixin \Eloquent
 */
class Balance extends Model
{
    use HasFactory;

    public function station(){
        return $this->belongsTo(Station::class, 'station_id');
    }

   
}
