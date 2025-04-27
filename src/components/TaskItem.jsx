import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import dragIcon from "../assets/drag2.png";

const ITEM_TYPE = "TASK";

const TaskItem = ({ task, index, moveItem, handleEdit, handleDelete }) => {
  const ref = useRef(null);

  // Gestion du drag
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Gestion du drop
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index); 
        draggedItem.index = index;
      }
    },
  });

 
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex items-center bg-blue-600 text-white rounded-2xl mt-5 h-10 w-full px-4 ease-in-out transition-transform duration-800 ${
        isDragging ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Drag Handle */}
      <img
        src={dragIcon}
        alt="Drag Icon"
        className="cursor-grab w-5 h-full py-1 mr-3"
      />
      {/* Task Content */}
      <h1 className="w-2/3 overflow-x-hidden">{task}</h1>
      <div className="flex w-1/3 gap-4 justify-end">
        <button
          className="cursor-pointer bg-yellow-500 px-2 py-1 rounded-md text-sm"
          onClick={() => handleEdit(task)}
        >
          EDIT
        </button>
        <button
          className="cursor-pointer bg-red-500 px-2 py-1 rounded-md text-sm"
          onClick={() => handleDelete(task)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
