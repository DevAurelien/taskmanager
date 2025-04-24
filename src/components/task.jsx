import { useEffect, useState } from "react";

function Task() {
  const [tasks, setTasks] = useState(["tache 1", "tache 2"]);

  useEffect(() => {
    document.querySelector('#taches').innerHTML = tasks.map((tache, index) => `<div class="flex bg-blue-600 rounded-2xl mt-5 h-10 w-full justify-center items-center"><h1 key=${index}>${tache}</h1></div>`).join("");
  }, [tasks]);

  return (
    <div className="flex flex-col text-white font-bold text-2xl mt-20 w-1/2">
      <div id="taches">
        
      </div>
      {/* {tasks.map((e, index) => (<div className="flex bg-blue-600 rounded-2xl mt-5 h-10 w-full justify-center items-center"><h1 key={index}>{e}</h1></div>))} */}
    </div>
  );
}
export default Task;
