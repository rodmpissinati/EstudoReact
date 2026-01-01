import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import data from "../data"

// Transformando o code comentado em um custom hook
function useContato(){
    const id = useParams.id
    return data.filter(contato=> contato.id == id)[0]
}

function Contatos(){

    const contato = useContato();

    // // O useParams é um hook que pega na URL apenas os parametros passados
    // const params = useParams();

    // // Aqui no caso contato é o valor que está dentro do array filter
    // const [contato, setContato] = useState("")

    // useEffect(()=>{
    //     // Faz uma comparação até achar o valor compativel entre o id e o parametro da URL,
    //     // assim que achar armazena em contato , e o [0] serve para pegar o 1° resultado
    //     setContato(data.filter(contato => contato.id == params.id)[0])
    // },[params])

    return(
            <div>
                <h2>{contato.title}</h2>
                <p>{contato.tel}</p>
            </div>
        )
}

export default Contatos