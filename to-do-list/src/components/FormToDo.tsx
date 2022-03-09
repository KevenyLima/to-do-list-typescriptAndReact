import styles from './FormToDo.module.css'
import { useEffect, useState, ChangeEvent, FormEvent } from "react"
import { Itask } from '../Interfaces/Itask'
interface Props {
    taskList?: Itask[],
    setTaskList?: React.Dispatch<React.SetStateAction<Itask[]>>,
    btnText: string,
    task?: Itask | null,
    handleUpdate?(id:number,taskName:string,taskDifficulty:number):void
}
function FormToDo({ taskList, setTaskList, btnText, task ,handleUpdate}: Props) {
    const [taskName, setTaskName] = useState<string>('')
    const [taskDifficulty, setTaskDifficulty] = useState<number>(0)
    const [id,setId]= useState<number>(0)

    useEffect(()=>{
        if(task){
            setId(task.id)
            setTaskName(task.name)
            setTaskDifficulty(task.difficulty)
        }
    },[task])

    function addTaskHandle(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(taskList){
            if(handleUpdate){
                handleUpdate(id,taskName,taskDifficulty)
            }else{
                const id= Math.floor(Math.random()*1000)
                const newtask:Itask = { 'name': taskName, 'difficulty': taskDifficulty, 'id': id }
                setTaskList!([...taskList,newtask])
                setTaskName('')
                setTaskDifficulty(0)
            }
        }
    }
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskDifficulty(parseInt(e.target.value))
    }
    return (

        <form onSubmit={addTaskHandle}  className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="name">nome</label>
                <input onChange={handleChangeName} name='name' type="text" placeholder="nome da tarefa" value={taskName} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">dificuldade</label>
                <input onChange={handleChangeDifficulty} name='difficulty' type="number" placeholder="dificuldade" value={taskDifficulty} />
            </div>
            <input type='submit' value={btnText}/>
        </form>

    )
}
export default FormToDo
