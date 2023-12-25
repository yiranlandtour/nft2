import React from "react";

class Button extends React.Component {
  handleButtonClick = () => {
    alert("Button clicked!");
  };

  render() {
    return (
      <button onClick={this.handleButtonClick}>Click Me</button>
    );
  }
}

export default Button;
