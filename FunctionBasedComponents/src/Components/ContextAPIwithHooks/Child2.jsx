import React, { useContext } from 'react'
import { MyData } from './ContextApiWithHooks'



const Child2 = () => {
    const {valueData} = useContext(MyData)
    const salary = 80000
  return (
    <>
    <h2>Child2</h2>
    <h2>Value Data In Second Child:{valueData}</h2>
    </>
  )
}

export default Child2