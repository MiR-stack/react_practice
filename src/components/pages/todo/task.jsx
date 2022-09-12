import { useState } from "react";

function Task({ Task,deletes ,edits,changeStatus }) {
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(Task.task);

  function editTodo(){
    if(!task) return 
    edits(Task.id,task)
    setEdit(false)
  }

  return (
    <div className="taskItem">
      <p className="date">{Task.createdAt} </p>
      <div className="main">
        {edit ? (
          <div className="input-group edit">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="editBtn" onClick={editTodo} >save</button>
          </div>
        ) : (
          <>
            <p className="task">{Task.task } </p>
            <div className="icons">
              <i className="fa-solid fa-pen" onClick={() => setEdit(true)}></i>
              <i className="fa-solid fa-trash" onClick={() => deletes(Task.id)}></i>
            </div>
          </>
        )}
      </div>
      <button className={`status ${Task.status}`} onClick={()=>{changeStatus(Task.id)}}>{Task.status}</button>
    </div>
  );
}

export default Task;
