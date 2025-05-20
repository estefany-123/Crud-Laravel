<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revista extends Model
{
    use HasFactory;

    protected $fillable = ['titulo', 'editorial', 'anio_publicacion', 'categoria_id'];
}
