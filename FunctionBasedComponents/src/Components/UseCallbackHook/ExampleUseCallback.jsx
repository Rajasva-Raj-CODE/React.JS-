import React, { memo } from 'react'

const ExampleUseCallback = (props) => {
    console.log("hello im child Component",props);
    
  return (
    <>
    <h3>Items:{props.item}</h3>
    </>
  )
}

export default  memo (ExampleUseCallback)