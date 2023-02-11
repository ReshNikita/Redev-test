import React from "react";

class Button extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((state) => ({
      count: ++state.count,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>{count}</p>
        <button onClick={() => this.handleClick()}>Button</button>
      </div>
    );
  }
}

export default Button;
