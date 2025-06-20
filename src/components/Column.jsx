import React from "react";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

function Column({ id, title, tasks }) {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => item.moveTask(id, item.task),
  });

  return (
    <div ref={drop} className="bg-gray-100 p-4 rounded min-h-[200px]">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} columnId={id} />
      ))}
    </div>
  );
}

export default Column;