import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskItem from "./taskItem"; 

function Task() {
  const [tasks, setTasks] = useState([]);

  // Ajoute une nouvelle tâche
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target[0].value.trim();
    if (newTask && !tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
    }
    e.target[0].value = "";
  };

  // Edition des tâches
  const handleEdit = (taskToEdit) => {
    document.querySelector("#champ").value = taskToEdit;
    setTasks(tasks.filter((task) => task !== taskToEdit));
  };

  // Supprimer une tâche
  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

 
  const moveItem = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1); 
    updatedTasks.splice(toIndex, 0, movedTask); 
    setTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <form
        onSubmit={handleSubmit}
        className="flex relative text-white font-bold text-xl bg-blue-600 rounded-2xl mt-5 h-10 w-1/2 pl-4 py-1 justify-between items-center mx-auto"
      >
        <input
          id="champ"
          type="text"
          className="resize-none h-full flex w-7/8 bg-transparent outline-none"
          placeholder="Ajouter une tâche..."
        />
        <button className="cursor-pointer absolute rotate-90 text-4xl center right-0 w-12 h-12">
          +
        </button>
      </form>

      
      <div className="flex flex-col text-white font-bold text-2xl mt-10 w-1/2 mx-auto">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            index={index}
            task={task}
            moveItem={moveItem}
            handleEdit={handleEdit} 
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </DndProvider>
  );
}

export default Task;
