import { Component } from "react";
import ForToggle from "./ForToggle";

class ComponentWillUnmount extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }
  render() {
    return (
      <>
        <h2>Component Will Unmount Method | React Life Cycle Method</h2>

        {this.state.show ? <ForToggle /> : <h3>Toggle Component Remove</h3>}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Button
        </button>
      </>
    );
  }
}

export default ComponentWillUnmount;
