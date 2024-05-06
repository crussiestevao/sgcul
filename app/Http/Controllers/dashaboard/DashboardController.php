<?php

namespace App\Http\Controllers\dashaboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){ 
       return Inertia::render('Dashboard');
    }
}
