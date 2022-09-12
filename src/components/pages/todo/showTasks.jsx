import Task from "./task"

function ShowTasks({tasks,func}){
return(
    <div className="showTasks">
        {tasks.map(task => <Task key={task.id} Task={task} deletes={func.deleteTask} edits={func.edit} changeStatus={func.ChangeStatus} />)}
    </div>
)
}

export default ShowTasks