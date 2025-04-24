import { useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => { // Nettoyer, eviter les doublons, ajouter la tache, vider le champ
    e.preventDefault();
    const usedTask = e.target[0].value.trim();
    if (!tasks.includes(usedTask)) {
      setTasks([...tasks, usedTask]);
    }
    e.target[0].value = "";
  };

  const handleEdit = (displayTask) => { // remplir le champ, supprimer la tache
    document.querySelector("#champ").value = displayTask;
    setTasks(tasks.filter(item => item !== displayTask))
  };

  const handleDelete = (displayTask) => { //supprimer la tache uniquement
    setTasks(tasks.filter(item => item !== displayTask))
  };

  return (
    <>
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
        {tasks.map((displayTask, index) => (
          <div
            key={index}
            className="flex text-xl bg-blue-600 rounded-2xl mt-5 h-10 w-full pl-4 pr-4 justify-start items-center"
          >
            <h1 className="w-2/3 overflow-x-hidden">{displayTask}</h1>
            <div className="flex w-1/3 gap-4 justify-end">
              <button className="cursor-pointer" onClick={() => handleEdit(displayTask)}>EDIT</button>
              <button className="cursor-pointer" onClick={() => handleDelete(displayTask)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Task;
//
