// src/pages/Categorias.tsx
import DefaultLayout from "@/layouts/DefaultLayout";
import { useForm } from "@inertiajs/react";
import { route } from 'ziggy-js';
import { FormEvent } from "react";
import CategoriaForm from "./Crear";

interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  created_at: string;
}

export default function Categorias({ categorias }: { categorias: Categoria[] }) {
  const {
    data,
    setData,
    post,
    put,
    delete: deleteRequest,
    processing,
    errors,
    reset,
  } = useForm({
    id: null as number | null,
    nombre: '',
    descripcion: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (data.id) {
      put(route("categorias.update", data.id), { onSuccess: () => reset() });
    } else {
      post(route("categorias.store"), { onSuccess: () => reset() });
    }
  }

  function handleEdit(categoria: Categoria) {
    setData({
      id: categoria.id,
      nombre: categoria.nombre,
      descripcion: categoria.descripcion,
    });
  }

  function handleDelete(id: number) {
    if (confirm("¿Estás segura de eliminar esta categoría?")) {
      deleteRequest(route("categorias.destroy", id), { onSuccess: () => reset()});
    }
  }

  function handleCancel() {
    reset();
  }

  return (
    <DefaultLayout>
      <h1 className="text-2xl font-bold flex items-center justify-center">Categorías:</h1>

      <div className="mt-4 flex items-center justify-center min-h-44 bg-gray-100">
        <table className="table-auto border border-gray-300 bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-6 py-3 border border-gray-300">Nombre</th>
              <th className="px-6 py-3 border border-gray-300">Descripción</th>
              <th className="px-6 py-3 border border-gray-300">Fecha creación</th>
              <th className="px-6 py-3 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias?.map((categoria) => (
              <tr key={categoria.id}>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{categoria.nombre}</td>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{categoria.descripcion}</td>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{categoria.created_at}</td>
                <td className="px-6 py-4 border border-gray-300 text-center">
                  <button
                    onClick={() => handleEdit(categoria)}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(categoria.id)}
                    className="text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CategoriaForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        processing={processing}
        errors={errors}
      />
    </DefaultLayout>
  );
}
