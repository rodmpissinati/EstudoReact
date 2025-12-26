import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Contador(props){

    // aqui é onde ficará armazenado o valor da var global
    const contador = useSelector((state)=> {return state.counter})

    const dispatch = useDispatch()

    return(
        <div>
            <div>{contador}</div>
            <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>-</button>
            <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>+</button>
        </div>
    )

}

export default Contador;