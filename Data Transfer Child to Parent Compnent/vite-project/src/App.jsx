import React from 'react'
import Child from './Child'

const App = () => {
  function getData(data){
    console.log(data);
    
  }
  
  return (
    <><Child getData={getData}/></>
  )
}

export default App