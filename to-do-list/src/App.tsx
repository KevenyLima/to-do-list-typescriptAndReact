import React from 'react';
import FormToDo from './components/FormToDo'
import ListToDo from './components/ListToDo'
import { Itask } from './Interfaces/Itask';
import { useState } from 'react'
import Model from './components/Modal';
import Footer from './components/footer';
import Header from './components/Header';
import styles from './app.module.css'
function App() {
  const [taskList, setTaskList] = useState<Itask[]>([])
  const [showModel, setShowModel] = useState<boolean>(true)

  function taskDeleted(id: number) {
    setTaskList(taskList.filter((task) => task.id !== id))
  }
  function taskEdit(id: number,name:string,difficulty:number) {
    const taskUpdate={'id':id,'name':name,'difficulty':difficulty}
    const updateItems = taskList.map((task)=>{
      return task.id===taskUpdate.id?taskUpdate:task
    })
    setTaskList(updateItems)
    setShowModel(false)
  }
  return (
    <div>
      <Header/>
      {showModel&&<Model/>}
      <main className={styles.main}>
        <FormToDo taskList={taskList} setTaskList={setTaskList} btnText="Criar tarefa"/>
        <ListToDo taskList={taskList} taskDeleted={taskDeleted} taskEdit={taskEdit} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
