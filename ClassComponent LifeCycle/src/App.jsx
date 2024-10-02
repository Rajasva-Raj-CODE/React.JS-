
import { useState } from 'react'
import ComponentDidMount from './ComponentDidMount'
import ComponentDidUpdate from './ComponentDidUpdate'
import Constructor from './Constructor'
import Render from './Render'
import ShouldComponentUpdateMethod from './ShouldComponentUpdateMethod'

const App = () => {
  // const [name,setName]  = useState("Raj")
  return (

    <>
      {/* <Constructor/> */}
      {/* <Render data={name}/>
      <button onClick={()=>setName("Rohan")}>click</button> */}
      {/* <ComponentDidMount/> */}
      {/* <ComponentDidUpdate/> */}
      <ShouldComponentUpdateMethod/>
    </>
  )
}

export default App