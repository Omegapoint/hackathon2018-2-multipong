ball = new Ball();

function Ball() {
	this.objects = [];
	this.maxID = 0;

	this.push = function(ball) {

		var id = -1

		while(this.objects[++id] != undefined) {}
		this.objects[id] = ball;
		if(id > this.maxID) {this.maxID = id;}
	}

	this.update = function(dt) {
		for(let i = 0;i < this.maxID;i++) {
			if(this.objects[i] == undefined) continue;

			let obj = this.objects[i];

			obj.y -= obj.v * dt;

			if (obj.y < 0) {
				if (this.objects[i].combo == 0) {player.combo = 0;}
				delete this.objects[i];
			}
		}
	}

	this.render = function(ctx) {
		ctx.fillStyle = "#000000";
		for(let i = 0;i < this.maxID;i++) {
			if(this.objects[i] == undefined) continue;

			let obj = this.objects[i];

			ctx.beginPath();
			ctx.arc(obj.x,obj.y,obj.radius,0,6.28);

			ctx.fill();
		}
	}
}