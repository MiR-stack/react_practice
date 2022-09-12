import { useState } from "react";

function CreateTodo({ addTask }) {
  const [task, setTask] = useState("");

  const createTask = () => {
    if (!task) return;

    addTask(task);
    setTask("");
  };

  function enterKey(e) {
    if (e.code !== "Enter") return;
    createTask();
  }

  return (
    <div className="input-group" onKeyDown={enterKey}>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={createTask}>add</button>
    </div>
  );
}

export default CreateTodo;
