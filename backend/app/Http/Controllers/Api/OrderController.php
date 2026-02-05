<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
  public function store(Request $request)
  {
    $order = Order::create([
      "user_id" => auth()->id(),
      "total_price" => $request->total_price,
      "status" => "pending",
    ]);

    foreach ($request->items as $item) {
      $order->items()->create($item);
    }

    return $order;
  }

  public function approve($id)
  {
    $order = Order::findOrFail($id);
    $order->update(["status" => "approved"]);
    return $order;
  }
}
