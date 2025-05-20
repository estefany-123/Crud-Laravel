
// src/pages/Crear.tsx
import { FormEventHandler } from "react";
import { Input } from "@/components/ui/input"; // o tu input personalizado
import { Button } from "@/components/ui/button";

interface LibrosFormProps {
  data: {
    id: number | null;
    titulo: string;
    autor: string;
    editorial : string;
    anio_publicacion : string;
    categoria_id : number
  };
  setData: (field: string, value: any) => void;
  handleSubmit: FormEventHandler;
  handleCancel: () => void;
  processing: boolean;
  errors: Record<string, string>;
}

export default function LibrosForm({
  data,
  setData,
  handleSubmit,
  handleCancel,
  processing,
  errors,
}: LibrosFormProps) {
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
        <label className="block text-sm font-medium text-gray-700">Autor</label>
        <textarea
          value={data.autor}
          onChange={(e) => setData("autor", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {errors.autor && <p className="text-red-500 text-sm mt-1">{errors.autor}</p>}
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
        <textarea
          value={data.categoria_id}
          onChange={(e) => setData("categoria_id", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
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








// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { FormEvent, FormEventHandler } from "react";

// interface LibroFormProps {
//   data: {
//     id: number | null;
//     titulo: string;
//     autor: string;
//     editorial: string;
//     anio_publicacion: string;
//     categoria_id: number | null
//   };
//   setData: (field: string, value: any) => void;
//   handleSubmit: FormEventHandler;
//   handleCancel: () => void;
//   processing: boolean;
//   errors: Record<string, string>;
// }

// export default function LibroForm({
//   data,
//   setData,
//   handleSubmit,
//   handleCancel,
//   processing,
//   errors,
// }: LibroFormProps) {
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white flex flex-col gap-4 text-black items-start mt-6 p-4 border rounded"
//     >
//       <h2 className="text-lg font-semibold">{data.id ? "Editar Libro" : "Crear Libro"}</h2>
//       <div className="flex flex-col gap-2 w-full max-w-xs">
//         <Input
//           className="border border-gray-300 rounded px-2 py-1"
//           value={data.titulo}
//           onChange={(e) => setData("titulo", e.target.value)}
//           placeholder="Titulo del libro"
//         />
//         {errors.titulo && <span className="text-red-500 text-sm">{errors.titulo}</span>}
//       </div>
//       <div>

//         <Input
//           className="border border-gray-300 rounded px-2 py-1"
//           value={data.autor}
//           onChange={(e) => setData("autor", e.target.value)}
//           placeholder="Autor del libro"
//         />
//         {errors.autor && <span className="text-red-500 text-sm">{errors.autor}</span>}
//       </div>
//       <div>

//         <Input
//           className="border border-gray-300 rounded px-2 py-1"
//           value={data.editorial}
//           onChange={(e) => setData("editorial", e.target.value)}
//           placeholder="Editorial del libro"
//         />
//         {errors.editorial && <span className="text-red-500 text-sm">{errors.editorial}</span>}
//       </div>

//       <div>

//         <Input
//           className="border border-gray-300 rounded px-2 py-1"
//           value={data.anio_publicacion}
//           onChange={(e) => setData("anio_publicacion", e.target.value)}
//           placeholder="Año de publicacion del libro"
//         />
//         {errors.anio_publicacion && <span className="text-red-500 text-sm">{errors.anio_publicacion}</span>}
//       </div>
//       <div>
//         <Input
//           className="border border-gray-300 rounded px-2 py-1"
//           value={data.categoria_id?.toString() ?? ''}
//           onChange={(e) => setData("categoria_id", e.target.value)}
//           placeholder="Categoria del libro"
//         />
//         {errors.categoria_id && <span className="text-red-500 text-sm">{errors.categoria_id}</span>}
//       </div>


//       <div className="flex justify-end gap-4">
//         <Button type="button" variant="secondary" onClick={handleCancel}>
//           Cancelar
//         </Button>
//         <Button type="submit" disabled={processing}>
//           {data.id ? "Actualizar" : "Guardar"}
//         </Button>
//       </div>
//     </form >
//   );
// }
