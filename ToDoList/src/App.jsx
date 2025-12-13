import React, { useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState } from "react";
import {v4} from "uuid";

function App (){

  const[tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []);
    
// Aqui o que era antes sem o LocalStorage

  //     [
    
//     {
//     id: 1,
//     title: "Estudar Programação",
//     description: "Estudar programação para aprender",
//     isCompleted: false,
//   },

//   {
//     id: 2,
//     title: "Estudar React",
//     description: "Estudar React para aprender",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     title: "Estudar Programação",
//     description: "Estudar Java para aprender",
//     isCompleted: true,
//   }
// ]

// Salvando no local storage, assim aqui quando acontecer alguma motificação com a var tasks (por causado useEffect), 
// ele irá salvar localmente (converte de objeto para string com p JSON.stringfy) (o "tasks" é o nome de como ficará 
// salvo no localStorage essas informações )
useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])

function onTaskClick(tasksId){
  // O map cria um novo array com as informações sem alterar as anteriores e ele também funciona como um for e vai
  // percorrendo até o if ser correto e executa o que está dentro dele
  const newTasks = tasks.map(tasks=>{
    if(tasksId === tasks.id){
      return{...tasks, isCompleted: !tasks.isCompleted}
    }

    return tasks;

  })

  // Atuliza para a nova lista de tasks, por meio do evento
  setTasks(newTasks)

}

function OnDropClick(tasksId){
  const newTasks = tasks.filter(tasks=> tasksId !== tasks.id)
      
      setTasks(newTasks)   
  
}

function AddNewTask(title, description){

  const newTask = {
    id: v4(), // Gerador de id aleatório (uuid)
    title: title,
    description: description,
    isCompleted: false
  }

  setTasks([...tasks, newTask])

}

  return(
    <div className="w-screen h-screen bg-gray-400 flex justify-center p7">
      <div className="w[500] space-y-4">

        <h1 className="text-2xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTask AddNewTask={AddNewTask} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} OnDropClick={OnDropClick} />
      
      </div>
    </div>
  )
}

export default App;