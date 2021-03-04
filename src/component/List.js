import React, { Component } from "react";

export default class List extends Component {
  state = {
    score: 5,
    data: [
      {
        id: 1,
        name: "Arun",
        age: 34,
      },
      {
        id: 2,
        name: "irfan",
        age: 36,
      },
    ],
  };
  incrementScore = () => {
    this.setState({
      score: 10,
    });
  };

  render() {
    console.log(this.state.score);
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => (
            <li key={value.id}>
              {value.id}-{value.name}-{value.age}
            </li>
          ))}
        </ul>
        <button onClick={this.incrementScore}>score click</button>
      </div>
    );
  }
}
