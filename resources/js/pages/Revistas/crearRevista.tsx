
// src/pages/Crear.tsx
import { FormEventHandler } from "react";
import { Input } from "@/components/ui/input"; // o tu input personalizado
import { Button } from "@/components/ui/button";
import { Categoria } from "../home";

interface RevistasFormProps {
  data: {
    id: number | null;
    titulo: string;
    editorial : string;
    anio_publicacion : string;
    categoria_id : number
  };
  setData: (field: string, value: any) => void;
  handleSubmit: FormEventHandler;
  handleCancel: () => void;
  processing: boolean;
  errors: Record<string, string>;
  categorias: Categoria[]
}

export default function RevistasForm({
  data,
  setData,
  handleSubmit,
  handleCancel,
  processing,
  errors,
  categorias
}: RevistasFormProps) {
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
 
      <div>
        <label className="block text-sm font-medium text-gray-700">Titulo</label>
        <Input
          type="text"
          value={data.titulo}
          onChange={(e) => setData("titulo", e.target.value)}
          className="mt-1 block w-full"
        />
        {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>}
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700">Editorial</label>
        <textarea
          value={data.editorial}
          onChange={(e) => setData("editorial", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {errors.editorial && <p className="text-red-500 text-sm mt-1">{errors.editorial}</p>}
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700">Año de publicacion</label>
        <textarea
          value={data.anio_publicacion}
          onChange={(e) => setData("anio_publicacion", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {errors.anio_publicacion && <p className="text-red-500 text-sm mt-1">{errors.anio_publicacion}</p>}
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700">Categoria</label>
        <select
          value={data.categoria_id}
          onChange={(e) => setData("categoria_id", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        >
          {categorias?.map((categoria)=>(
            <option value={categoria.id}>{categoria.nombre}</option>
          ))}
        </select>
        {errors.categoria_id && <p className="text-red-500 text-sm mt-1">{errors.categoria_id}</p>}
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={processing}>
          {data.id ? "Actualizar" : "Guardar"}
        </Button>
      </div>
    </form>
  );
}

