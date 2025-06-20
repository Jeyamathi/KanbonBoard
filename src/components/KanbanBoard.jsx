import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "inProgress", title: "In Progress" },
  { id: "done", title: "Done" },
];

function KanbanBoard() {
  const { state, dispatch } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    const taskId = uuidv4();
    dispatch({ type: "ADD_TASK", payload: { id: taskId, text: taskText, taskId } });
    setTaskText("");
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {columns.map((column) => (
          <Column key={column.id} id={column.id} title={column.title} tasks={state[column.id]} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;