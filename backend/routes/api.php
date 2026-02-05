<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\OrderController;

Route::post("/login", [AuthController::class, "login"]);

Route::middleware("auth:sanctum")->group(function () {
  Route::get("/products", [ProductController::class, "index"]);
  Route::post("/products", [ProductController::class, "store"]);
  Route::put("/products/{id}", [ProductController::class, "update"]);
  Route::delete("/products/{id}", [ProductController::class, "destroy"]);

  Route::post("/orders", [OrderController::class, "store"]);
  Route::post("/orders/{id}/approve", [OrderController::class, "approve"]);
});
