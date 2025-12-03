import React, { useState } from 'react'


function Counter (props){

    const [count, setCount] = useState(1);

    function add(){

        setCount(count + 1);

    }

    return(
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={add}> Add</button>
        </div>
    )    
}

export default Counter;