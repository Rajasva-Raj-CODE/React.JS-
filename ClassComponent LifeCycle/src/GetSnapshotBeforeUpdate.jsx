import  { Component } from 'react'

 class GetSnapshotBeforeUpdate extends Component {

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate",snapshot);
        
    }

    GetSnapshotBeforeUpdate(prevProps,prevState){
        // console.log("GetSnapshotBeforeUpdate")
        return "Hello" + prevProps.data
    }
    
  render() {
    return (
      <>
         <h2>Get Snapshot Before Update| React Life Cycle Method</h2>
         <h3>Hello,{this.props.data}</h3>
      </>
    )
  }
}

export default GetSnapshotBeforeUpdate
