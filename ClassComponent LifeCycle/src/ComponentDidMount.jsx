import { Component } from "react";

class ComponentDidMount extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Rajasva Raj",
    };
  }
  //!---------------------------------------------
  componentDidMount() {
    console.log("ComponentDidMount");
  }

//* 1 when our html is ready or component is ready then Component Did Mount Method called
//* 2 Component Did Mount Method did not call after state update or props update 
//* 3 Component Did Mount Method call after constructor and render method 
//* it is used in API call
  //!---------------------------------------------
  render() {
    console.log("render");
    return (
      <>
        <h2>Component Did Mount Method | React Life Cycle Method</h2>
        <h3>Hello,{this.state.name}</h3>
        <button
          onClick={() => {
            this.setState({ name: "Kuch bhi" });
          }}
        >
          Click Me
        </button>
      </>
    );
  }
}

export default ComponentDidMount;
