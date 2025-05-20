<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use App\Models\Categoria;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LibrosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $libros = Libro::all();
        $categorias = Categoria::all();
        return Inertia::render('home', [
            'libros' => $libros,
            'categorias' => $categorias
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('home');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'editorial' => 'required|string|max:255',
            'anio_publicacion' => 'required|string|max:255',
            'categoria_id' => 'required|integer|max:10',
        ]);

        Libro::create($validated);

        return redirect()->route('libros.index')->with('message', 'Libro creado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Libro $libro)
    {
        return Inertia::render('libros/show', [
            'libro' => $libro
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Libro $libro)
    {
        return Inertia::render('home', [
            'libro' => $libro,
            'libros' => Libro::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Libro $libro)
    {
        $validated = $request->validate([
             'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'editorial' => 'required|string|max:255',
            'anio_publicacion' => 'required|string|max:255',
            'categoria_id' => 'required|integer|max:255',
        ]);

        $libro->update($validated);

        return redirect()->route('libros.index')->with('message', 'Libro actualizado con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Libro $libro)
    {
        $libro->delete();

        return redirect()->route('libros.index')->with('message', 'Libro eliminado con éxito.');
    }
}