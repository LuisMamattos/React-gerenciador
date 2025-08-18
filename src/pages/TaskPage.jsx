import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskPage() {
  const navigate = useNavigate();
  function returnToApp() {
    navigate(-1); //tanto o '-1' quanto o '/' funcionam igual neste caso
  }
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const taskAtual = JSON.parse(
    localStorage.getItem("tasks_salvas") || "[]"
  ).find((item) => {
    return item.id == id;
  });
  console.log(taskAtual);

  const pageTitle = `Detalhes da Tarefa: ${taskAtual.title}`;
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-screen space-y-4">
        <div className="flex  justify-between relative">
          <button
            onClick={returnToApp}
            className="bg-slate-400 w-fit text-white p-2 rounded-md top-0 left-0 border bottom-0"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <h1 className="text-3xl text-slate-100  font-bold w-fit ">
            {pageTitle}
          </h1>
          <div />
        </div>

        <div className="bg-slate-400 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-slate-600">
            {taskAtual.title}
          </h2>
          <p className="text-slate-600">{taskAtual.description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
