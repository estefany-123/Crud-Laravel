import DefaultLayout from "@/layouts/DefaultLayout";
import { useForm } from "@inertiajs/react";
import { route } from 'ziggy-js';
import { FormEvent } from "react";

interface Libro {
    id: number;
    nombre: string;
    created_at: string;
}

export default function Home({ libros }: { libros: Libro[] }) {

    const { data, setData, post, put, delete: deleteRequest, processing, errors, reset } = useForm({
        id: null as number | null,
        nombre: '',
    });

    // Crear o actualizar libro
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (data.id) {
            // Actualizar
            put(route("libros.update", data.id), {
                onSuccess: () => reset(),
            });
        } else {
            // Crear
            post(route("libros.store"), {
                onSuccess: () => reset(),
            });
        }
    }

    // Cargar datos para editar
    function handleEdit(libro: Libro) {
        setData({
            id: libro.id,
            nombre: libro.nombre,
        });
    }

    // Eliminar libro
    function handleDelete(id: number) {
        if (confirm("¿Estás seguro de eliminar este libro?")) {
            deleteRequest(route("libros.destroy", id), {
                onSuccess: () => reset(),
            });
        }
    }

    // Resetear formulario
    function handleCancel() {
        reset();
    }

    return (
        <DefaultLayout>
            <h1 className="text-2xl font-bold">Libros:</h1>
            <div className="mt-4">
                {libros?.map((libro) => (
                    <>
                        <div key={libro.id} className="flex items-center gap-4 py-2">
                            <h3>{libro.nombre}</h3>
                            <button
                                onClick={() => handleEdit(libro)}
                                className="text-blue-500 hover:underline"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(libro.id)}
                                className="text-red-500 hover:underline"
                            >
                                Eliminar
                            </button>
                        </div>
                        <span>Created at {libro.created_at}</span>
                    </>
                ))}
            </div>
            <form
                onSubmit={handleSubmit}
                className="bg-white flex flex-col gap-4 text-black items-start mt-6 p-4 border rounded"
            >
                <h2 className="text-lg font-semibold">{data.id ? "Editar Libro" : "Crear Libro"}</h2>
                <div className="flex flex-col gap-2 w-full max-w-xs">
                    <input
                        className="border border-gray-300 rounded px-2 py-1"
                        value={data.nombre}
                        onChange={(e) => setData('nombre', e.target.value)}
                        placeholder="Nombre del libro"
                    />
                    {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        {data.id ? "Actualizar" : "Crear"}
                    </button>
                    {data.id && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </DefaultLayout>
    );
}