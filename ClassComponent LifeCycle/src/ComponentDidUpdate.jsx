import  { Component } from 'react'

class ComponentDidUpdate extends Component {
  constructor(){
    super()
    // console.log("constructor");
    this.state={
      count:0
    }
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("componentDidUpdate",prevState.count,this.state.count);
    // if(prevState.count === this.state.count){
    //   alert('Counts are same')
    // }

    // this.setState({count:this.state.count+1})

    //? we can not directly update props or state we have to give condition then it will update state and prop

    if(this.state.count <5){
      this.setState({count:this.state.count+1})
    }

  }

  render() {
  // console.log("render");
  
    return (
      <>
         <h2>Component Did Update Method | React Life Cycle Method</h2>
         <h3>hello,{this.state.count}</h3>
         <button onClick={()=>{this.setState({count:1})}}>click me</button>
      </>
    )
  }
}

export default ComponentDidUpdate
