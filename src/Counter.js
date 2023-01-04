import React,{ useState } from 'react';


function Counter() {
    let[count,setCount] = useState(0)
  return (
    <div>
        <h1>Count-{count}</h1>
        <button onClick = {() =>{
            setCount(count+1)
            console.log("clicked")
        }}>Incremenet</button>
        <button  onClick = {() =>{
            setCount(count-1)
        }}>Decremenet</button>
        <button onClick={()=>{
            setCount(0)
        }}>Reset</button>
    </div>
  )
}

export default Counter