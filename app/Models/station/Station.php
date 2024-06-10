<?php

namespace App\Models\station;

use App\Models\balance\Balance;
use App\Models\order\Order;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string|null $address
 * @property string|null $contact
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Order> $orders
 * @property-read int|null $orders_count
 * @method static \Illuminate\Database\Eloquent\Builder|Station newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Station newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Station query()
 * @method static \Illuminate\Database\Eloquent\Builder|Station whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Station whereContact($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Station whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Station whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Station whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Station whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Station extends Model
{
    use HasFactory;

    public function orders(){
        return $this->hasMany(Order::class, 'station_id');
    }
    
    public function balance()
    {
        return $this->hasMany(Balance::class, 'station_id')->get()->sortByDesc('id');
    }

    public function currentBalance()
    {
        //se a estacao nao tiver um balance, criar um antes
        if (count($this->balance())>0) {
            return $this->balance()->first();
        }else{
            $new = new Balance();
            $new->station_id = $this->id;
            $new->save();

            return $new;
        }
        
    }

    public function currentCredit(){
        return $this->currentBalance()->credit ? $this->currentBalance()->credit : 0 ;
    }

    public function currentDebit(){
        return $this->currentBalance()->credit ? $this->currentBalance()->debit : 0 ;
    }

    public function hasCredit(){ //saldo em divida sela combustivel a credito a dever
        return $this->currentBalance()->credit>0 ? true : false ;
    }

    public function hasDebit(){ //saldo a favor pago antes
        return $this->currentBalance()->debit>0 ? true : false ;
    }

    public function createNewDebit($value, $method=null, $obs=null, $doc_number=null ){
        //saldo a favor
        $debit = new Balance();
        $debit->station()->associate($this);
        $debit->init_balance = $value;
        $debit->debit = $value;
        $debit->credit = $this->currentCredit();
        $debit->validated_at = now();
        $debit->method = $method;
        $debit->obs = $obs;
        $debit->doc_number = $doc_number;
        $debit->balance = $value;
        $debit->save();
    }

    public function createNewCredit($value, $method=null, $obs=null, $doc_number=null){
  
        $debit = new Balance();
        $debit->station()->associate($this);
        $debit->init_balance = $value;
        $debit->credit = $value;
        $debit->debit = 0;
        $debit->validated_at = now();
        $debit->method = $method;
        $debit->obs = $obs;
        $debit->doc_number = $doc_number;
        $debit->balance = $value;
        $debit->save();
    }

    public function setInitialBalance(int $value, string $type)
    {

        if ($type === "debit") {
           $this->createNewDebit($value);
        } else {
          $this->createNewCredit($value);
        }
    }
}
