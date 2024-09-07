import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0)

  function incremnt(){
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
   

  }

  function decremnt(){
    setCounter(counter-1)

  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incremnt}>increment</button>
      <button onClick={decremnt}>decrement</button>
    </>
  )
}

export default App
