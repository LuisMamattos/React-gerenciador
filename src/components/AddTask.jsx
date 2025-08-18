import { useForm } from "react-hook-form"; ////////////////////////////////
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z
    .string()
    .min(3, "O título precisa ter pelo menos 3 caracteres")
    .nonempty("O título é obrigatório"),
  description: z.string().optional(),
});

function AddTask({ onAddTaskSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  }); //////////////////////////////////////////

  function formulario_valido(data) {
    onAddTaskSubmit(data.title, data.description);
    console.log("valido", data);
  }
  function formulario_invalido(errors) {
    ///////////////////////
    console.log("Erros: ", errors);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(formulario_valido, formulario_invalido)}
      >
        <input
          {...register("title")} ////////////////////////////////////
          type="text"
          placeholder="Digite o título da tarefa"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        ></input>
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <input
          {...register("description")} /////////////////////////////////////////
          type="text"
          placeholder="Digite a descrição da tarefa"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        ></input>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
export default AddTask;
