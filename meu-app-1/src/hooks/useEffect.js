import React, { useEffect, useState } from 'react'


function Counter (props){

    const [count, setCount] = useState(1);

    //  Executa quando é criado
    useEffect(()=>{
      setCount(parseInt(localStorage.getItem("count")));

       // Roda o Return quando o componente é destruido
      return ()=>{
        console.log("Não tem mais contador");
      }
        
      
    },[])

    // Alterado
    useEffect(()=>{
      document.title = count;
      localStorage.setItem("count", count);

    },[count]);

    // Criado
    // useEffect(()=>{
    //   document.title = count;
    //   localStorage.setItem("count", count);

    // },[]);



  function add(){
    setCount(count+1);
  }

  return(
          <div>
              <h1>Contador: {count}</h1>
              <button onClick={add}> Add</button>
          </div>
      )  
    
}

export default Counter;