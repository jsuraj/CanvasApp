var sketch = function (p) {
  var black = 0;
  var x,y;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(black);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // console.log('in sketch: '+props.x);
      x = props.x;
      y = props.y
  };

  p.draw = function () {
    // console.log(x, y);
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    console.log('props: '+x+' '+y);
    console.log('default: '+p.mouseX+' '+p.mouseY);
  };

};


export default sketch
