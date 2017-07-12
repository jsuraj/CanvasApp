var sketch = function (p) {
  var gray = 0;
  var x,y;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(gray);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // console.log('in sketch: '+props.x);
      x = props.x;
      y = props.y
  };

  p.draw = function () {
    // p.rect(p.width/2, p.height/2, 200, 200);
    // console.log(x, y);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    console.log('props: '+x+' '+y);
    console.log('default: '+p.mouseX+' '+p.mouseY);
  };


  p.mousePressed = function () {
    // console.log(p.MouseX);
    gray = (gray + 16) % 256;
  };
};


export default sketch
