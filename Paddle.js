/****** PADDLE *******/
function Paddle(x,y, width, height){
	this.pos = {
		x: x,
		y: y,
		width: width,
		height: height
	}
	this.randomOffset = 0;
}

Paddle.prototype.draw = function(ctx, ball){

	if(ball.y < this.pos.y){
		this.pos.y = ball.y;
	}else if(ball.y > this.pos.y + this.pos.height){
		this.pos.y = ball.y - this.pos.height+10 + this.randomOffset;
	}

	if(ball.x > 135 && ball.x < 140){
		var randomness = Math.random() * 40;
		var plusminus = (randomness %2 > 1) ? 1 : -1;
		this.randomOffset = randomness * plusminus;
	}
	ctx.fillRect(this.pos.x, this.pos.y, this.pos.width, this.pos.height);
}