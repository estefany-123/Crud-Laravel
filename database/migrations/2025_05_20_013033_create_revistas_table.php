<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
         Schema::create('revistas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('editorial');
            $table->year('anio_publicacion');
            $table->timestamps();

            $table->foreignId('categoria_id')
            ->constrained('categorias')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('revistas');
    }
};
