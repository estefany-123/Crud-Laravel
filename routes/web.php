<?php

use App\Http\Controllers\CategoriasController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibrosController;

Route::resource('libros', LibrosController::class);
Route::resource('categorias', CategoriasController::class);
