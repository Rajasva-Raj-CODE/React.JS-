import UseEffectWithUseState from "./Components/UseEffects/UseEffectWithUseState"
import UseEffectWithProps from "./Components/UseEffects/UseEffectWithProps"
import { useState } from "react"
const App = () => {
  const [count,setCount] = useState(0)
  return (
    <>
     {/* <UseEffectWithUseState/> */}
     {/* <UseEffectWithProps data={count}/>
     <button onClick={()=>setCount(count+1)}>update</button> */}
    </>
  )
}

export default App