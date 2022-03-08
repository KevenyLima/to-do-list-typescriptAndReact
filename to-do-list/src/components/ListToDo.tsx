import { Itask } from "../Interfaces/Itask"
import styles from "./ListToDo.module.css"
interface Props{
    taskList:Itask[],
    taskDeleted(id:number):void
    taskEdit(id:number,name:string,difficulty:number):void
}
function ListToDo({taskList,taskDeleted,taskEdit}:Props) {
    return (
        <>
            {taskList.map((task)=>(
                <div className={styles.task} key={task.id}>
                    <div className={styles.details}>
                        <h4>{task.name}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <i onClick={()=>{taskDeleted(task.id)}} className="bi bi-trash"></i>
                        <i onClick={()=>{taskEdit(task.id,task.name,task.difficulty)}} className="bi bi-pencil"></i>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ListToDo