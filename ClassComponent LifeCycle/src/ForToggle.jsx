import React, { Component } from 'react'

 class ForToggle extends Component {
    componentWillUnmount(){
        alert("component Will Unmount")
    }
  render() {
    return (
      <>
        <h3>Toggle</h3>
      </>
    )
  }
}

export default ForToggle
