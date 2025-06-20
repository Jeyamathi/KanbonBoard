import React, { createContext, useReducer, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("tasks")) || {
  todo: [],
  inProgress: [],
  done: [],
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    }
    case "MOVE_TASK": {
      const { source, destination, task } = action.payload;
      const newState = { ...state };
      newState[source] = newState[source].filter((t) => t.id !== task.id);
      newState[destination] = [...newState[destination], task];
      return newState;
    }
    default:
      return state;
  }
}

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
