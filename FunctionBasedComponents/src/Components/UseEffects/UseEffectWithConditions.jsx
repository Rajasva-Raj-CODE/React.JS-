import { useEffect, useState } from "react"

const UseEffectWithConditions = (props) => {
    // const [age, setAge] = useState(21)
    // const [count, setCount] = useState(0)
    // useEffect(()=>{
    //     console.log("UseEffect Hook With Count" ,count);
        
    // },[count])  
    // useEffect(()=>{
    //     console.log("UseEffect Hook with age" ,age);
        
    // },[age])

    useEffect(()=>{
            console.log("UseEffect Hook With Count" ,props.count);
            
        },[props.count])  

        useEffect(()=>{
            console.log("UseEffect Hook with age" ,props.age);
            
        },[props.age])

  return (
    <>
        <h1>UseEffect With Conditions</h1>
        {/* <br />
        <h3>Age :{age}</h3>
        <br />
        <br />
        <h3>Count:{count}</h3>
        <br />
        <br />
        <button onClick={()=>setAge(age+1)}>Update Age</button>
        <button onClick={()=>setCount(count+1)}>Update Count</button> */}
         


        <h3>Age :{props.age}</h3>
        <br />
        <br />
        <h3>Count:{props.count}</h3>
    </>
  )
}

export default UseEffectWithConditions
