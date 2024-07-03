<?php

namespace App\Http\Controllers\dashaboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\order\OrderResourceCollection;
use App\Models\order\Order;
use App\Models\station\Station;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use NunoMaduro\Collision\Adapters\Phpunit\State;

class DashboardController extends Controller
{
    public function index()
    {
        $unvalidated_orders = new OrderResourceCollection(Order::whereValidatedAt(null)
        ->orderBy('created_at', 'desc')
        ->get());

        $validated_orders = new OrderResourceCollection(Order::where('validated_at', '<>', null)
        ->orderBy('created_at', 'desc')
        ->get());

        $stations = Station::all();
        
        $users = User::all();

        $data = compact('validated_orders', 'unvalidated_orders', 'stations','users');
        return Inertia::render('Dashboard', $data);
    }
}