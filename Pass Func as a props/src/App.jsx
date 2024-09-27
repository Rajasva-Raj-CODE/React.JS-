import New from './new'
import PassFunctionAsProps from './PassFunctionAsProps'

const App = () => {

  function getData(){
    alert("Hello From App.JS")
  }
  return (
    <div>
      <PassFunctionAsProps data={getData}/>
      <New data={getData}/>
      <p>gdgsgd</p>
    </div>
  )
}

export default App