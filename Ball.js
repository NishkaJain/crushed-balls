class Ball {
    constructor(x, y) {
      var options = {
      'restitution':1.5
      }
        
      ball = Bodies.circle(200,100,20,ball_options);
      ball.shapeColor = "yellow";
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
      stroke("red");
      }
    };
  
  