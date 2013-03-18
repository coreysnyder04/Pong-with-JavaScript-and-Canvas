/****** PONG *******/
function Pong(){
	this.box = { // Coordinates of the outer container box on screen
		x: 0,
		y: 0,
		width: 700,
		height: 350
	};
	this.ball = {
		x: 150,
		y: 150,
		vx: -4,
		vy: 5,
		rad: 10
	}
	this.bounds = {
		right: this.box.width + this.box.x - this.ball.rad,
		bottom: this.box.height + this.box.y - this.ball.rad,
		left: this.box.x + this.ball.rad,
		top: 100
	}
	this.wins = 0;
	this.losses = 0;
}

Pong.prototype.init = function() {
	var that = this;

	canvas = document.getElementById('pong');
	if (canvas.getContext){
		this.ctx = canvas.getContext('2d');
	}else{
		return;
	}

	this.entities = [];
	this.entities.push(new Paddle(40, 80, 15, 50));
	this.entities.push(new Player(640, 80, 15, 50, this.ctx));

	//this.entities.push = new Paddle(40, 80, 15, 50);
	//var gameLoop = setInterval(that.loop,16);
	(function gameLoop() {
		that.loop(that.ctx);
		window.requestAnimationFrame(gameLoop);
	})();
}

Pong.prototype.clearCanvas = function(ctx){
	ctx.clearRect(0,0,this.box.width,this.box.height); //Clears everything inside of these coords
}

Pong.prototype.restart = function(){
	this.ball.x = 325;
	this.ball.y = 100;

	$("#wins").text(this.wins);
	$("#losses").text(this.losses);

}

Pong.prototype.loop = function(ctx){
	this.clearCanvas(ctx);
	this.checkGameOver();
	this.drawBall(ctx);
	this.moveBall(ctx);

	for(x in this.entities){
		this.entities[x].draw(ctx, this.ball);
	}
}

Pong.prototype.checkGameOver = function (){
	if(this.ball.x < 20 ){
		this.wins++;
		this.restart();
		alert("You win!");
	}else if(this.ball.x > 670){
		this.losses++;
		alert("You Lose!");
		this.restart();
	}
}

Pong.prototype.drawBall = function(ctx){
	var img = new Image();
	img.src = "ball.jpg";
	ctx.drawImage(img,this.ball.x,this.ball.y,this.ball.rad*2,this.ball.rad*2);
}

Pong.prototype.moveBall = function(ctx){
	var nballx = this.ball.x + this.ball.vx,
		nbally = this.ball.y + this.ball.vy,
		that = this;

	// Make sure ball doesn't leave our canvas.
	if (nballx > this.bounds.right) {
		nballx = this.bounds.right;
		this.ball.vx = -this.ball.vx;
	} if (nballx < this.bounds.left) {
		nballx = this.bounds.left;
		this.ball.vx = -this.ball.vx;
	} if (nbally > this.bounds.bottom) {
		nbally = this.bounds.bottom;
		this.ball.vy = -this.ball.vy;
	} if (nbally < this.bounds.top) {
		nbally = this.bounds.top;
		this.ball.vy = -this.ball.vy;
	}

	var padding = 0;
	for(x in this.entities){
		//this.entities[x].draw(ctx, this.ball);
		var temp = that.entities[x];

		if(that.ball.x < temp.pos.x + temp.pos.width + padding // Is ball left edge inside entity right edge
			&& that.ball.x + (this.ball.rad*2) > temp.pos.x - padding // Is ball right edge Inside entity left edge
			&& that.ball.y < temp.pos.y + temp.pos.height //Is ball top inside entity bottom
			&& that.ball.y + (this.ball.rad*2) > temp.pos.y){ //Is ball bottom inside entity top
			if(this.ball.vx > 0){ //If we're flying right
				nballx = this.ball.x - 5;
			}else{
				nballx = this.ball.x + 5;
			}
			this.ball.vx = -this.ball.vx;
		}
	}

	this.ball.x = nballx;
	this.ball.y = nbally;
}
