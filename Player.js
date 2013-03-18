function Player(x,y, width, height, ctx){
	this.pos = {
		x: x,
		y: y,
		width: width,
		height: height
	};
	this.ctx = ctx;
	var that = this;

	this.ctx.canvas.addEventListener("mousemove", function(e) {

		var getXandY = function(e) {
			var x =  e.clientX - that.ctx.canvas.getBoundingClientRect().left;
			var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;
			return {x: x, y: y};
		}

		that.pos.y = getXandY(e).y;
	}, false);
};

Player.prototype = new Paddle();

Player.prototype.constructor = Player;

Player.prototype.draw = function(ctx, ball){
	ctx.fillRect(this.pos.x, this.pos.y, this.pos.width, this.pos.height);
}
