import { Itask } from "../Interfaces/Itask"

interface Props{
    taskList:Itask[],
    taskDeleted(id:number):void
}
function ListToDo({taskList,taskDeleted}:Props) {
    return (
        <>
            {taskList.map((task)=>(
                <div key={task.id}>
                    <div>
                        <p>{task.name}</p>
                        <p>{task.difficulty}</p>
                        <p>{task.id}</p>
                    </div>
                    <div>
                        <i onClick={()=>{taskDeleted(task.id)}} className="bi bi-trash"></i>
                        <i className="bi bi-pencil"></i>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ListToDo
/*<div>
            <ul>
                <li>
                    <p>nome da tarefa</p>
                    <p>dificuldade da tarefa</p>
                    <div>
                        <div>excluir</div>
                        <div>editar</div>
                    </div>
                </li>
            </ul>
        </div> */