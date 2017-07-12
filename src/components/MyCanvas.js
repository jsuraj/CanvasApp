import React from 'react'
import p5 from 'p5'


export default class MyCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      x : 50,
      y : 50
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  handleMouseMove(e) {
    // console.log('handleMouseMove called');
    // console.log(e.screenX);

    var x = e.screenX;
    var y = e.screenY;
    // console.log(x+' '+y);
      // console.log(this.state.x, this.state.y);
    this.props.onHandleMouseMove(x, y);
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper} onMouseMove={this.handleMouseMove} ></div>;
  }
}
