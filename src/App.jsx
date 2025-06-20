import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskProvider } from "./context/TaskContext";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <TaskProvider>
      <DndProvider backend={HTML5Backend}>
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Kanban Task Manager</h1>
          <KanbanBoard />
        </main>
      </DndProvider>
    </TaskProvider>
  );
}

export default App;