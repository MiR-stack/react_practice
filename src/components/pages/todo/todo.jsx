import { useEffect, useState } from "react";
import PageLayout from "../../layout/pageLayout";
import CreateTodo from "./createTodo";
import ShowTasks from "./showTasks";
import { v4 as uuid } from "uuid";
import "./css/todo.css";

function Todo() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      task: "task 1",
      createdAt: new Date().toLocaleDateString("en-US"),
      status: "Todo",
    },
    {
      id: uuid(),
      task: "task 2",
      createdAt: new Date().toLocaleDateString("en-US"),
      status: "running",
    },
    {
      id: uuid(),
      task: "task 3",
      createdAt: new Date().toLocaleDateString("en-US"),
      status: "Todo",
    },
    {
      id: uuid(),
      task: "task 4",
      createdAt: new Date().toLocaleDateString("en-US"),
      status: "completed",
    },
  ]);

  function addTask(task) {
    const todo = {
      id: uuid(),
      task,
      createdAt: new Date().toLocaleDateString("en-US"),
      status: "Todo",
    };

    setTasks([todo, ...tasks]);
  }

  function deleteTask(id) {
    const Tasks = tasks.filter((task) => task.id !== id);
    setTasks(Tasks);
  }

  function edit(id, task) {
    const todo = tasks.find((task) => task.id === id);
    todo.task = task;
    setTasks([...tasks]);
  }

  function ChangeStatus(id) {
    const todo = tasks.find((task) => task.id === id);
    const status = todo.status;

    if (status === "Todo") {
      todo.status = "running";
    }
    if (status === "running") {
      todo.status = "completed";
    }
    if (status === "completed") {
      todo.status = "Todo";
    }
    setTasks([...tasks]);
  }

  // filter section start here

  const [filter, setFilter] = useState("all");

  const [filterdTodo, setFilteredTodo] = useState(tasks);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTodo(tasks);
    } else {
      const todos = tasks.filter((task) => task.status === filter);
      setFilteredTodo(todos);
    }
  }, [filter, tasks]);

  return (
    <PageLayout>
      <div className="todo">
        <h2>Todo app</h2>
        <div className="filter">
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">all</option>
            <option value="Todo">Todo</option>
            <option value="running">running</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <div className="container">
          <CreateTodo addTask={addTask} />
          <ShowTasks
            tasks={filterdTodo}
            func={{ deleteTask, edit, ChangeStatus }}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default Todo;
