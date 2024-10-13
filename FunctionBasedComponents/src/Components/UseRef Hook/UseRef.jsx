import React, { useRef } from 'react'

const UseRef = () => {
    let myRef= useRef()
    function modifyInput(){
        myRef.current.value="Raj"
        myRef.current.style.backgroundColor = "Yellow"
        myRef.current.style.color = "red"
         myRef.current.focus()

        
    }
    console.log("rendering");
    
  return (
    <>
    <h1>UseRef Hook</h1>
    <input type="text" ref={myRef}/>
    <button onClick={()=>modifyInput()}>Click</button>
    </>
  )
}

export default UseRef