// src/pages/Crear.tsx
import { FormEventHandler } from "react";
import { Input } from "@/components/ui/input"; // o tu input personalizado
import { Button } from "@/components/ui/button";

interface CategoriaFormProps {
  data: {
    id: number | null;
    nombre: string;
    descripcion: string;
  };
  setData: (field: string, value: any) => void;
  handleSubmit: FormEventHandler;
  handleCancel: () => void;
  processing: boolean;
  errors: Record<string, string>;
}

export default function CategoriaForm({
  data,
  setData,
  handleSubmit,
  handleCancel,
  processing,
  errors,
}: CategoriaFormProps) {
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <Input
          type="text"
          value={data.nombre}
          onChange={(e) => setData("nombre", e.target.value)}
          className="mt-1 block w-full"
        />
        {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          value={data.descripcion}
          onChange={(e) => setData("descripcion", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>}
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
