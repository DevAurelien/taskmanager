import Task from "./components/task.jsx";

function App() {
  return (
    <div className="flex flex-col text-4xl text-white bg-black w-full h-full items-center">
      <h1 className="py-10">Manager de Taches</h1>
    {/* // crée une tache partie superieur */}
    <Task />
    {/* // affiche les taches */}
    {/* editer les taches */}
    {/* // supprimer taches */}
    </div>
  );
}

export default App;
