<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
  public function index()
  {
    return Product::all();
  }

  public function store(Request $request)
  {
    return Product::create($request->all());
  }

  public function update(Request $request, $id)
  {
    $product = Product::findOrFail($id);
    $product->update($request->all());
    return $product;
  }

  public function destroy($id)
  {
    Product::destroy($id);
    return response()->json(["message" => "Deleted"]);
  }
}
