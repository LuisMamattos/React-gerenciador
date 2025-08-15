import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar front",
      description: "Estudar front pra fazer a barra do orchestra.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Revisar React",
      description: "Revisar hooks e state management.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer exercício de Tailwind",
      description: "Testar classes de utilitários no projeto React.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Organizar GitHub",
      description: "Subir novos projetos e organizar pastas.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        //preciso atualizar
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task; //n preciso atualizar
    });
    setTasks(newTasks);
  }

  function onTrashClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}

export default App;
