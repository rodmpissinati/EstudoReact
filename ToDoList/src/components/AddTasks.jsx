import React, { useState } from "react";
import { use } from "react";

function AddNewTask({AddNewTask}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-3 p-7 rounded-md bg-gray-300 flex flex-col">
            <input className=" text-black border-2 bg-gray-400 px-4 py-2 rounded-md border-black" 
            type="text" placeholder="Digite o título da tarefa" value={title}
            onChange={(event)=> setTitle(event.target.value)}
            ></input>

            <input type="text" className=" text-black border-2 bg-gray-400 px-4 py-2 rounded-md border-black " 
             placeholder="Digite a descrição da tarefa" value={description}
            onChange={(event)=> setDescription(event.target.value)}
            ></input>

            <button onClick={()=>{
                
                if(!title.trim() || !description.trim()){ // .trim retira os espaço em branco
                    return alert("Preencha todos os campos")
                }
                
                AddNewTask(title, description);
                setTitle(""); setDescription("");}
            } className="bg-blue-600 h-10 bor rounded-sm">Adicionar</button>
        </div>
    )
}

export default AddNewTask;