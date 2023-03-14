import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nilima",
      counter: 0,
    };
  }

  //   state = {
  //     name: "Nilima",
  //     counter: 0,
  //   };

  clickMe = () => {
    this.setState({ name: "Binita" });
  };

  decrease = () => {
    // this.setState({
    //   counter: this.state.counter - 1,
    // });

    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  increase = () => {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <button onClick={this.clickMe}>Click Me</button>
        <h2>{counter}</h2>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default CounterClass;
