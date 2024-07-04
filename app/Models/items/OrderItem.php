<?php

namespace App\Models\items;

use App\Models\order\Order;
use App\Models\product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

/**
 * 
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $code
 * @property string $name
 * @property string|null $quantity
 * @property string|null $price
 * @property int $order_id
 * @property int $product_id
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereOrderD($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereProductD($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class OrderItem extends Model
{
    use HasFactory, HasRelationships;

    public function product(){
        // return $this->belongsTo(Product::class, 'product_id');
        return Product::whereId($this->product_id)->get();
    }

    public function order(){
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function category(){
        return $this->hasManyDeepFromRelations($this->product(), (new Product())->category());
    }
}