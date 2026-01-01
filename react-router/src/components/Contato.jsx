import React, { useEffect, useState } from "react";

import {Link, useRouteMatch} from 'react-router-dom'
import data from '../data'
function Contato(){

    // O match já tem a nossa URL com o / e esse é um hook
    const match = useRouteMatch()

    const [url, setUrl] = useState("")

    // Fica escutando o match, assim que haver uma alteração nele verifica se no final há uma /,
    // caso não tenha adiciona e a url fica com o valor da newUrl
    // fazendo com que url passe a ter o valor correto com a barra no final

    useEffect(()=>{

        const newUrl = match.url.slice(-1) === '/' ? match.url : match.url + '/'
        setUrl(newUrl)

    }, [match])

    return(
        <div className="">

            <ul>
                {data.map(contatos=>
                    <li key={contatos.id}><Link to={`${url}${contatos.id}`}>{contatos.title}</Link></li>
                    // Aqui pega o caminho contato com ${match.url} e ${aula.id} o id
                    
                )}
            </ul>

        </div>
    )
}

export default Contato;