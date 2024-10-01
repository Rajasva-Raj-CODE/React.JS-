import { Component } from 'react'
 class Constructor extends Component {
    constructor(){
        super()
        // console.log("im a  constructor");
        this.state={
            name:"Rajasva Raj"
        }
        
    }
  render() {
    // console.log("im a  render");
    return (
      <>
        <h1>Constructor | Life Cycle Method</h1>
        <h3>Hello,{this.state.name}</h3>
      </>
    )
  }
}

export default Constructor
