import React from "react";
import { ArrowRight, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, OnDropClick}){ // colocando isso posso substituir os props. como esse props.tasks.map

    const navigate = useNavigate();
    
    function onSeeDetail(tasks){
        const query = new URLSearchParams(); // Faz um tratamento na query
        query.set("title", tasks.title);
        query.set("description", tasks.description);
        
         navigate(`/task?${query.toString()}`);
    }
    
    return(
            <ul className="space-y-3 p-7 rounded-md bg-gray-300">
                {tasks.map((tasks)=>
                    (<li key={tasks.id} className="flex gap-2">

                    <button
                        onClick={() => onTaskClick(tasks.id)}
                        className={`bg-green-500 p-2 rounded-md w-full text-left text-black ${
                        tasks.isCompleted ? "line-through" && "bg-red-700" : ""
                }`}
>
                    {tasks.title}
                </button>


                    <button
                        onClick={() => OnDropClick(tasks.id)} 
                        className=" bg-gray-500 text-black  p-2 rounded-md gap-2">
                             <X />
                        </button>

                    <button onClick={()=> onSeeDetail(tasks)} className=" bg-gray-500 text-black  p-2 rounded-md gap-2">
                             <ArrowRight />
                        </button>
                        </li>))}

                    
                    
                    
                    
            </ul>
        )
    
    }


export default Tasks;   