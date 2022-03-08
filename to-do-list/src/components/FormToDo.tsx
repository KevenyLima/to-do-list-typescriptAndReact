import styles from './FormToDo.module.css'
import Container from './Container'
import { useEffect, useState, ChangeEvent, FormEvent } from "react"
import { Itask } from '../Interfaces/Itask'
interface Props {
    taskList?: Itask[],
    setTaskList?: React.Dispatch<React.SetStateAction<Itask[]>>,
    btnText: string,
    task?: Itask | null
}
function FormToDo({ taskList, setTaskList, btnText, task }: Props) {
    const [taskName, setTaskName] = useState<string>('')
    const [taskDifficulty, setTaskDifficulty] = useState<number>(0)
    const [taskUpDated, setTaskUpDated] = useState<Itask[] | null>(null)

    function CreateTask(name: string, difficulty: number) {
        const id = Math.random() * 1000
        const newtTask = { 'name': name, 'difficulty': difficulty, 'id': id }
        setTaskList!([...taskList!, newtTask])
    }

    const creatAndUpDateTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (typeof setTaskList !== 'undefined') {
            CreateTask(taskName, taskDifficulty)
        } else {

        }
    }
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskDifficulty(parseInt(e.target.value))
    }
    return (

        <form onSubmit={creatAndUpDateTask}  className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="name">nome</label>
                <input onChange={handleChangeName} name='name' type="text" placeholder="nome da tarefa" />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">dificuldade</label>
                <input onChange={handleChangeDifficulty} name='difficulty' type="number" placeholder="dificuldade" />
            </div>
            <input type='submit' value={btnText}/>
        </form>

    )
}
export default FormToDo
