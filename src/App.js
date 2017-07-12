import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCanvas from './components/MyCanvas'
import sketch from './components/Sketch'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateSketch : sketch,
      x : 50,
      y : 50
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(x, y) {
    this.setState({
      x : x,
      y : y
    });
  }
  render() {
    return (
      <MyCanvas sketch={this.state.stateSketch} onHandleMouseMove={this.handleMouseMove} x={this.state.x} y={this.state.y}/>
    );
  }
}

export default App;
