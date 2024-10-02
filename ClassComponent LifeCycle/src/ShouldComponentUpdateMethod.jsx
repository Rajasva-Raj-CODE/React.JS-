import  { Component } from 'react'

 class ShouldComponentUpdateMethod extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate",this.state.count);
        // return true;
        
        if(this.state.count > 5 && this.state.count < 10 ){
            return true
        }
        
    }
  render() {
    return (
      <>
           <h2>Should Component Update Method | React Life Cycle Method</h2>
           <h3>Count:{this.state.count}</h3>
           <button onClick={()=>this.setState({count:this.state.count +1})}>click me</button>
      </>
    )
  }
}

export default ShouldComponentUpdateMethod

//* it will call only when any updation occurs in our component  
//* if we update state and props but we dont want to call render method then we use ShouldComponentUpdateMethod
//* by default ShouldComponentUpdateMethod return false so, by this render method can not call. if we want call the render method then we have to return true on ShouldComponentUpdateMethod
//? basically is was used to update specific data but don't want to render whole component
