import { useState } from "react";

function CreateTask() {

    const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setTasks([...tasks, e.target[0].value]);
    console.log(tasks);
  };


  return (
    <form onSubmit={handleSubmit} className="flex relative text-white font-bold text-xl bg-blue-600 rounded-2xl mt-5 h-10 w-1/2 pl-4 py-1 justify-between items-center">
      <input
        focus
        type="text"
        className="resize-none h-full flex w-7/8 bg-transparent outline-none"
      ></input>
      <button
        className="absolute rotate-90 text-4xl center right-0 w-12 h-12"
      >
        +
      </button>
    </form>
  );
}

export default CreateTask;
