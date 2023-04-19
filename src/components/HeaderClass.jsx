import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("componentDidMount", this.state, this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "ComponentDidUpdate",
      prevProps,
      prevState,
      this.props,
      this.state
    );
  }

  componentWillMount() {
    console.log("ComponentWillMount");
  }

  setCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h1>Header</h1>
        <p>{counter}</p>
        <p>{name}</p>
        <button onClick={this.setCounter}>Add</button>
      </div>
    );
  }
}

export default Header;
