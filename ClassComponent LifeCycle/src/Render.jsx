import { Component } from 'react'

 class Render extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         dep : "CS"
    //     }
    // }
  render() {
    // console.log("render method",this.state);
    console.log("render method",this.props);
    
    return (
      <>
          <h1>Render Method | Life Cycle Method</h1>
          <h3>Hello,{this.props.data}</h3>
          {/* <h3>{this.state.dep} Department</h3>
          <button onClick={()=>this.setState({dep : "MCA"})}>update Department</button> */}
      </>
    )
  }
}

export default Render

//? when render method call--->
//! 1 when the component created then its call  first time
//! 2 State update
//! 3 Props update