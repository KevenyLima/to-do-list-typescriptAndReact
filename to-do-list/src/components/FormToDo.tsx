import styles from './FormToDo.module.css'
import Container from './Container'
import {useEffect,useState,ChangeEvent,FormEvent} from "react"
import { Itask } from '../Interfaces/Itask'
interface Props{
    taskList:Itask[],
    createTask(name:string,difficulty:number):void
}
function FormToDo({taskList, createTask}:Props){
    const [taskName,setTaskName] = useState<string>('')
    const [taskDifficulty,setTaskDifficulty] = useState<number>(0)
    const [taskUpDated,setTaskUpDated] = useState<Itask[]|null>(null)
    const creatAndUpDateTask = (e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(taskUpDated===null){
            createTask(taskName,taskDifficulty)
        }else {

        }
    }
    const handleChangeName = (e:ChangeEvent<HTMLInputElement>)=>{
        setTaskName(e.target.value) 
    }
    const handleChangeDifficulty=(e:ChangeEvent<HTMLInputElement>)=>{
        setTaskDifficulty(parseInt(e.target.value))
    }
    return (
        <Container customClass='column'>
        <form className={styles.form}>
            <input onChange={handleChangeName} type="text" placeholder="nome da tarefa"/>
            <input onChange={handleChangeDifficulty} type="number" placeholder="dificuldade"/>
            <button onClick={creatAndUpDateTask}>enviar</button>
        </form>
        </Container>
    )
}
export default FormToDo
