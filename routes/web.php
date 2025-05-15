<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibrosController;

Route::resource('libros', LibrosController::class);