import React, { useContext } from "react";
import { useDrag } from "react-dnd";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task, columnId }) {
  const { dispatch } = useContext(TaskContext);

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: {
      task,
      moveTask: (destination, draggedTask) => {
        if (destination !== columnId) {
          dispatch({
            type: "MOVE_TASK",
            payload: { source: columnId, destination, task: draggedTask },
          });
        }
      },
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-white p-2 mb-2 shadow rounded ${isDragging ? "opacity-50" : ""}`}
    >
      <div className="text-xs text-gray-500">Task ID: {task.taskId}</div>
      <div>{task.text}</div>
    </div>
  );
}

export default TaskCard;
