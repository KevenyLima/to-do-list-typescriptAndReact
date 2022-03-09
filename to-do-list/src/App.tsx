import React from 'react';
import FormToDo from './components/FormToDo'
import ListToDo from './components/ListToDo'
import { Itask } from './Interfaces/Itask';
import { useState } from 'react'
import Modal from './components/Modal';
import Footer from './components/footer';
import Header from './components/Header';
import styles from './app.module.css'
function App() {
  const [taskList, setTaskList] = useState<Itask[]>([])
  const [taskUptodate,setTaskUptodate] = useState<Itask|null>()
  function deleteTask(id:number):void{
    setTaskList(
      taskList.filter((task)=>{
        return task.id !==id
      })
    )
  }
  function hideOrShowmodal(display:boolean){
    const modal = document.getElementById('modal')
    if(display){
      modal!.classList.remove('hide');
    }else{
      modal!.classList.add('hide')
    }
  }
  function editTask(task:Itask):void{
    hideOrShowmodal(true)
    setTaskUptodate(task)
  }
  function updateTask(id:number,name:string,difficulty:number){
    const updatedTask:Itask={name,difficulty,id}
    const updatedItems =taskList.map((task)=>{
      return task.id === updatedTask.id?updatedTask:task
    })
    setTaskList(updatedItems)
    hideOrShowmodal(false)
  }
  return (
    <div>
      <Header/>
      <Modal title="Editar tarefa" children={<FormToDo btnText='Editar tarefa' taskList={taskList} task={taskUptodate} handleUpdate={updateTask}/>}/>
      <main className={styles.main}>
        <div className={styles.todo_form}>
      <h2>O que voce vai fazer?</h2>
      <FormToDo taskList={taskList} setTaskList={setTaskList} btnText="Criar tarefa"/>
        </div>
        <div className='todo-container'>
          <h2>Suas tarefas</h2>
          <ListToDo taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
        
      </main>
      <Footer/>
    </div>
  )
}

export default App;
