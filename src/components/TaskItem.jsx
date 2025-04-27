import { useDrag, useDrop } from "react-dnd";

const ITEM_TYPE = "TASK";

const TaskItem = ({ task, index, moveItem, handleEdit, handleDelete }) => {
  const [,ref] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragPreview}
      className={`flex items-center bg-blue-600 text-white rounded-2xl mt-5 h-10 w-full px-4 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {/* Drag Handle */}
      <div
        ref={drag}
        className="cursor-grab w-5 h-full bg-gray-400 mr-3"
      ></div>
      {/* Task Content */}
      <h1 className="w-2/3 overflow-x-hidden">{task}</h1>
      <div className="flex w-1/3 gap-4 justify-end">
        <button className="cursor-pointer" onClick={() => handleEdit(task)}>
          EDIT
        </button>
        <button className="cursor-pointer" onClick={() => handleDelete(task)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
