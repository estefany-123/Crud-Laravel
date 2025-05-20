<?php

namespace App\Http\Controllers;

use App\Models\revistas;
use Inertia\Inertia;
use Illuminate\Http\Request;

class RevistasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $revistas = revistas::all();
        return Inertia::render('listarRevista',[
            'revistas' => $revistas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('crearRevista');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'editorial' => 'required|string|max:255',
            'anio_publicacion' => 'required|year|max:255',
            'categoria_id' => 'required|number'
        ]);

        revistas::created($validated);


        return redirect()->route('revistas.index')->with('message', 'Revista creada con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(revistas $revista)
    {
        return Inertia::render('revistas/show', [
            'revista' => $revista
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(revistas $revista)
    {
        return Inertia::render('crearRevista', [
            'revista' => $revista,
            'revistas' => revistas::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, revistas $revista)
    {
         $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'editorial' => 'required|string|max:255',
            'anio_publicacion' => 'required|year|max:255',
            'categoria_id' => 'required|number'
        ]);

        $revista->update($validated);

        return redirect()->route('revistas.index')->with('message', 'Revista actualizada con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(revistas $revista)
    {
        $revista->delete();

        return redirect()->route('revistas.index')->with('message', 'Revista eliminada con éxito.');
    }
}
