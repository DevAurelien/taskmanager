import Task from "./components/task.jsx";

function App() {

  return (
    <div className="overflow-y-scroll flex flex-col text-4xl text-white bg-black w-full h-full items-center">
      <h1 className="py-10">Manager de Taches</h1>
    <Task/>
    </div> //TODO: DRAG and drop a faire
  );
}

export default App;
