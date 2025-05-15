<?php

namespace App\Http\Controllers;

use App\Models\Libros;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LibrosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $libros = Libros::all();
        return Inertia::render('home', [
            'libros' => $libros
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
            'nombre' => 'required|string|max:255',
        ]);

        Libros::create($validated);

        return redirect()->route('libros.index')->with('message', 'Libro creado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Libros $libro)
    {
        return Inertia::render('libros/show', [
            'libro' => $libro
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Libros $libro)
    {
        return Inertia::render('home', [
            'libro' => $libro,
            'libros' => Libros::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Libros $libro)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $libro->update($validated);

        return redirect()->route('libros.index')->with('message', 'Libro actualizado con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Libros $libro)
    {
        $libro->delete();

        return redirect()->route('libros.index')->with('message', 'Libro eliminado con éxito.');
    }
}