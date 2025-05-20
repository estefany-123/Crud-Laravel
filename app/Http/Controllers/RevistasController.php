<?php

namespace App\Http\Controllers;

use App\Models\Revista;
use App\Models\Categoria;
use Inertia\Inertia;
use Illuminate\Http\Request;

class RevistasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorias = Categoria::all();
        $revistas = Revista::all();
        return Inertia::render('Revistas/listarRevista',[
            'revistas' => $revistas,
            'categorias' => $categorias
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Revistas/crearRevista');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'editorial' => 'required|string|max:255',
            'anio_publicacion' => 'required|string|max:255',
            'categoria_id' => 'required|integer|max:10'
        ]);

        Revista::create($validated);


        return redirect()->route('revistas.index')->with('message', 'Revista creada con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Revista $revista)
    {
        return Inertia::render('revistas/show', [
            'revistas' => $revista
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Revista $revista)
    {
        return Inertia::render('crearRevista', [
            'revista' => $revista,
            'revistas' => Revista::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Revista $revista)
    {
         $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'editorial' => 'required|string|max:255',
            'anio_publicacion' => 'required|string|max:255',
            'categoria_id' => 'required|integer|max:10'
        ]);

        $revista->update($validated);

        return redirect()->route('revistas.index')->with('message', 'Revista actualizada con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Revista $revista)
    {
        $revista->delete();

        return redirect()->route('revistas.index')->with('message', 'Revista eliminada con éxito.');
    }
}
