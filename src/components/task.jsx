import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskItem from "./taskItem";

function Task() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usedTask = e.target[0].value.trim();
    if (!tasks.includes(usedTask)) {
      setTasks([...tasks, usedTask]);
    }
    e.target[0].value = "";
  };

  const handleEdit = (displayTask) => {
    document.querySelector("#champ").value = displayTask;
    setTasks(tasks.filter((item) => item !== displayTask));
  };

  const handleDelete = (displayTask) => {
    setTasks(tasks.filter((item) => item !== displayTask));
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
        className="flex relative text-white font-bold text-xl bg-blue-600 rounded-2xl mt-5 h-10 w-1/2 pl-4 py-1 justify-between items-center"
      >
        <input
          id="champ"
          focus="true"
          type="text"
          className="resize-none h-full flex w-7/8 bg-transparent outline-none"
        ></input>
        <button className="cursor-pointer absolute rotate-90 text-4xl center right-0 w-12 h-12">
          +
        </button>
      </form>
      <div className="flex flex-col text-white font-bold text-2xl mt-20 w-1/2">
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
