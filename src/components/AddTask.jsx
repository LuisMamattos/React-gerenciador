import { useForm } from "react-hook-form"; ////////////////////////////////

function AddTask({ onAddTaskSubmit }) {
  const { register, handleSubmit } = useForm(); //////////////////////////////////////////

  function formulario_valido(data) {
    onAddTaskSubmit(data.title, data.description);
    console.log("valido", data);
  }
  function formulario_invalido(data) {
    alert("formulario invalido");
    console.log("invalido", data);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(formulario_valido, formulario_invalido)}
      >
        <input
          {...register("title", { required: true, minLength: 3 })} ////////////////////////////////////
          type="text"
          placeholder="Digite o título da tarefa"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        ></input>
        <input
          {...register("description", { required: false })} /////////////////////////////////////////
          type="text"
          placeholder="Digite a descrição da tarefa"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        ></input>
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
