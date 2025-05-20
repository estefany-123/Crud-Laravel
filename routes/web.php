<?php

use App\Http\Controllers\CategoriasController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibrosController;
use App\Http\Controllers\RevistasController;

Route::resource('libros', LibrosController::class);
Route::resource('categorias', CategoriasController::class);
Route::resource('revistas', RevistasController::class);
