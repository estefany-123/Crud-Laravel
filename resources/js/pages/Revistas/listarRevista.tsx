// src/pages/Home.tsx
import DefaultLayout from "@/layouts/DefaultLayout";
import { useForm } from "@inertiajs/react";
import { route } from 'ziggy-js';
import { FormEvent } from "react";
import RevistasForm from "../Revistas/crearRevista";
import { Categoria } from "../home";

interface Revista {
    id: number;
    titulo: string;
    editorial : string;
    anio_publicacion : string;
    categoria_id : number
}

export default function ListarRevistas({ revistas, categorias }: { revistas: Revista[], categorias: Categoria[] }) {
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
    titulo: '',
    editorial: '',
    anio_publicacion: '',
    categoria_id: 1
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (data.id) {
      put(route("revistas.update", data.id), { onSuccess: () => reset() });
    } else {
      post(route("revistas.store"), { onSuccess: () => reset() });
    }
  }

  function handleEdit(libro: Revista) {
    setData({
      id: libro.id,
      titulo: libro.titulo,
      editorial: libro.editorial,
      anio_publicacion: libro.anio_publicacion,
      categoria_id: libro.categoria_id
    });
  }

  function handleDelete(id: number) {
    if (confirm("¿Estás seguro de eliminar esta revista?")) {
      deleteRequest(route("revistas.destroy", id), { onSuccess: () => reset() });
    }
  }

  function handleCancel() {
    reset();
  }

  return (
    <DefaultLayout>
      <h1 className="text-2xl font-bold flex items-center justify-center">Revistas:</h1>

      <div className="mt-4 flex items-center justify-center min-h-44 bg-gray-100">
        <table className="table-auto border border-gray-300 bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-6 py-3 border border-gray-300">Titulo</th>
              <th className="px-6 py-3 border border-gray-300">Editorial</th>
              <th className="px-6 py-3 border border-gray-300">Año publicacion</th>
              <th className="px-6 py-3 border border-gray-300">Categoría</th>
              <th className="px-6 py-3 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {revistas?.map((libro) => (
              <tr key={libro.id}>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{libro.titulo}</td>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{libro.editorial}</td>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{libro.anio_publicacion}</td>
                <td className="px-6 py-4 border border-gray-300 text-black text-center">{categorias.find(c=>c.id === libro.categoria_id)?.nombre}</td>
                <td className="px-6 py-4 border border-gray-300 text-center">
                  <button
                    onClick={() => handleEdit(libro)}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(libro.id)}
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

      <RevistasForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        processing={processing}
        errors={errors}
        categorias={categorias}
      />
    </DefaultLayout>
  );
}
