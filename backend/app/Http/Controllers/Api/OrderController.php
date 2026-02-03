<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
  public function store(Request $request)
  {
    return Order::create($request->all());
  }

  public function index()
  {
    return Order::with("product")
      ->latest()
      ->get();
  }
}
