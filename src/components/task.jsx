import { useState } from "react";

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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex relative text-white font-bold text-xl bg-blue-600 rounded-2xl mt-5 h-10 w-1/2 pl-4 py-1 justify-between items-center"
      >
        <input
          focus
          type="text"
          className="resize-none h-full flex w-7/8 bg-transparent outline-none"
        ></input>
        <button className="absolute rotate-90 text-4xl center right-0 w-12 h-12">
          +
        </button>
      </form>
      <div className="flex flex-col text-white font-bold text-2xl mt-20 w-1/2">
        {tasks.map((displayTask, index) => (
          <div
            key={index}
            className="flex text-xl bg-blue-600 rounded-2xl mt-5 h-10 w-full pl-4 justify-start items-center"
          >
            <h1>{displayTask}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
export default Task;
//
