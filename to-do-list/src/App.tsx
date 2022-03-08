import React from 'react';
import FormToDo from './components/FormToDo'
import ListToDo from './components/ListToDo'
import { Itask } from './Interfaces/Itask';
import {useState} from 'react'
function App() {
  const [taskList,setTaskList] = useState<Itask[]>([])

  function createTask(name:string,difficulty:number){
    const id = Math.random()*1000
    const newtTask = {'name':name,'difficulty':difficulty,'id':id}
    setTaskList([...taskList,newtTask])
  }
function taskDeleted(id:number){
  setTaskList(taskList.filter((task)=>task.id!==id))
}

  return (
    <>
      <FormToDo taskList={taskList} createTask={createTask}/>
      <ListToDo taskList={taskList} taskDeleted={taskDeleted}/>
    </>
  );
}

export default App;
