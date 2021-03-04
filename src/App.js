//import React, { Component } from "react";
/*import "./App.css";
//import Counter from "./component/Counter";
//import Forms from "./component/Forms";
import List from "./component/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>list</h1>
        {/*<Counter />*/
    // {/*<Forms/>*/}
    /* <List />
      </div>
    );
  }
}

export default App;*/
import React, { Component } from 'react';
import About from './component/About/About';
import DayApp from "./component/DayApp/DayApp";
import Header from './component/Header/Header';
import {BrowserRouter as Router, Route}from "react-router-dom";
export default class App extends Component {
  render() {
    return (
  
        <Router>
          <Header />
          <Route path="/" exact component={DayApp}/> 
          <Route path="/about" component={About}/>
        </Router>
        
        
    
    );
  }
}