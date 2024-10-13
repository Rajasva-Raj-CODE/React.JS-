import React, { useContext } from 'react'
import Child2 from './Child2'
import { MyData } from './ContextApiWithHooks'


const Child1 = () => {

    const {valueData} = useContext(MyData)
  return (
    <>
    <h2>Child1</h2>
    <h2>Value Data In First Child:{valueData}</h2>
    <Child2/>
    </>
  )
}

export default Child1