import { Itask } from "../Interfaces/Itask"
import styles from "./ListToDo.module.css"
interface Props{
    taskList:Itask[],
    handleDelete(id:number):void
    handleEdit(task:Itask):void
    
}
function ListToDo({taskList,handleDelete,handleEdit}:Props) {
    return (
        <>
            {taskList.map((task)=>(
                <div className={styles.task} key={task.id}>
                    <div className={styles.details}>
                        <h4>{task.name}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <i onClick={()=>{handleDelete(task.id)}} className="bi bi-trash"></i>
                        <i onClick={()=>{handleEdit(task)}} className="bi bi-pencil"></i>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ListToDo