import { useEffect } from "react"

const UseEffectWithProps = (props) => {
  useEffect(()=>{
    console.log("UseEffectWithProps",props);
    
  })
  return (
  <>
    <div>UseEffectWithProps</div>
    <h3>count:{props.data}</h3> 
  </>
  )
}

export default UseEffectWithProps