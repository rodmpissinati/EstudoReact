import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage(){

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    

    return(

        <div className="w-screen h-screen bg-gray-400 flex justify-center p7">
            <div className="w[500] space-y-4">

            <div className="flex justify-center realative mb-5">
                
                <button onClick={()=>navigate(-1)} className=" justify-end absolute bottom-500  top-2 left-0"><ChevronLeftIcon /></button>
                <h1 className="text-2xl text-slate-100 font-bold text-white">Detalhes da Tarefa</h1>
            </div>

            <div className="bg-gray-600 p-2 rounded-md w-full text-left">
                <h1>{title}</h1>
                    <p className="pt-2">{description}</p>
            </div>
            
            </div>
        </div>
    );
}

export default TaskPage;