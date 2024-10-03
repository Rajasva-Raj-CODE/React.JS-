import { useEffect, useState } from "react"


const UseEffectWithUseState = () => {

  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("use effects render");
    
  })
  return (
    <>
    <h1>UseEffect</h1>
    <h3>Count:{count}</h3>
    <button onClick={()=>setCount(count+1)}>Counter</button>
    </>
  )
}

export default UseEffectWithUseState