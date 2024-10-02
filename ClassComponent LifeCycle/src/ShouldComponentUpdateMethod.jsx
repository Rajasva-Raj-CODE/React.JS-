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
           <button onClick={()=>{this.setState({count:this.state.count +1})}}>click me</button>
      </>
    )
  }
}

export default ShouldComponentUpdateMethod
