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
