<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $categorias = Categoria::all();
        return Inertia::render('Categorias/listar', [
            'categorias' => $categorias
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         return Inertia::render('Categorias/listar');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
        ]);

        Categoria::create($validated);

        return redirect()->route('categorias.index')->with('message', 'Categoria creada con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Categoria $categorias)
    {
        return Inertia::render('categorias/show', [
            'categorias' => $categorias
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categoria $categoria)
    {
        return Inertia::render('crear', [
            'categoria' => $categoria,
            'categorias' => Categoria::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categoria $categoria)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
        ]);

        $categoria->update($validated);

        return redirect()->route('categorias.index')->with('message', 'Categoria actualizada con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categoria $categoria)
    {
        $categoria->delete();

        return redirect()->route('categorias.index')->with('message', 'Categoria eliminada con éxito.');
    }
}
