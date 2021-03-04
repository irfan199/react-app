import React, { Component } from "react";

class Forms extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:""
    };
    this.inputOne=React.createRef();
    this.inputTwo=React.createRef();
  }
 
  onSubmit = () => {
    console.log(this.inputOne.value);
    console.log(this.inputTwo.value);
  };

  render() {
    return (
      <form>
        <h2>form components</h2>
        <input type="text" name="firstName" ref={input=>this.inputOne=input} />

        <input type="text" name="lastName" ref={input=>this.inputTwo=input}/>
        <button type="button" onClick={this.onSubmit}>
          submit
        </button>
      </form>
    );
  }
}
export default Forms;
