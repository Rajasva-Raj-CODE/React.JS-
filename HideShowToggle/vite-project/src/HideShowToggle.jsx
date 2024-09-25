import React, { useState } from 'react'

const HideShowToggle = () => {
    const [result,setResult]=useState(true)
  return (
    <div>
        <h2>Hide Show And Toggle in React Js</h2>
        {
            result ? <h3>Hello...........</h3> :null
        }
        
        {/* <button style={{marginRight:"20px"}} onClick={()=>setResult(false)}>Hide</button>
        <button onClick={()=>setResult(true)}>Show</button> */}

        <button onClick={()=>setResult(!result)}>Toggle</button>
    </div>
  )
}

export default HideShowToggle