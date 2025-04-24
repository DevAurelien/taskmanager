import Task from "./components/task.jsx";
import CreateTask from "./components/createTask.jsx";
import { useState } from "react";

function App() {

  const [tasks,setTasks]=useState([]);

  return (
    <div className="flex flex-col text-4xl text-white bg-black w-full h-full items-center">
      <h1 className="py-10">Manager de Taches</h1>
    {/* // crée une tache partie superieur */}
    <CreateTask />
    {/* // affiche les taches */}
    <Task/>
    {/* editer les taches */}
    {/* // supprimer taches */}
    </div>
  );
}

export default App;
