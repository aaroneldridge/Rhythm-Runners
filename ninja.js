class Ninja {
	constructor(game) {
		this.game = game;
		this.spritesheet = ASSET_MANAGER.getAsset("./ninja.png");
		
		//this.walk = new Animator(this.spritesheet, 1, 52, 25, 23, 10, .1);
		//this.idle = new Animator(this.spritesheet, 6, 4, 24, 21, 2, 1.2);
		
		this.x = 420;
		this.y = 0;
		this.jumping = false;
		
		this.state = 0; // 0 = idle, 1 = walking, 2 = jumping
		this.facing = 0; // 0 = right, 1 = left
		this.animations = [];
		this.loadAnimations();
		
		this.velocity = { x: 0, y: 0};
	};
	
	loadAnimations() {
		for (var i = 0; i < 4; i++) {
			this.animations.push([]);
			for (var j = 0; j < 2; j++) {
				this.animations[i].push([]);
			}
		}
		
		// idle animation
		// facing right
		this.animations[0][0] = new Animator(this.spritesheet, 265, 13, 22, 22, 1, 1, false);
		
		// facing left
		this.animations[0][1] = new Animator(this.spritesheet, 222, 13, 24, 22, 1, 1, false);
		
		// walking animation
		// facing right
		this.animations[1][0] = new Animator(this.spritesheet, 265, 13, 27, 23, 2, 0.2, false);
		
		// facing left
		this.animations[1][1] = new Animator(this.spritesheet, 190, 13, 27, 23, 2, 0.2, true);
		
		// jumping animation
		// facing right
		//this.animations[2][0] = new Animator(this.spritesheet, 265, 46, 27, 23, 3, 0.2, false);
		
		// facing left
		//this.animations[2][1] = new Animator(this.spritesheet, 158, 46, 27, 23, 3, 0.2, true);
		
		// sliding animation
		// facing right
		this.animations[2][0] = new Animator(this.spritesheet, 390, 45, 27, 17, 1, 1, false);
		
		// facing left
		this.animations[2][1] = new Animator(this.spritesheet, 93, 45, 27, 17, 1, 1, false);
		
		// attacking animation
		// facing right
		this.animations[3][0] = new Animator(this.spritesheet, 390, 142, 27, 25, 1, 1, false);
		
		// facing left
		this.animations[3][1] = new Animator(this.spritesheet, 90, 142, 27, 25, 1, 1, false);
	};
	
	update() {
		const TICK = this.game.clockTick;
        
        // no left/right inputs -- idle
        if (!this.game.left && !this.game.right) {
			this.state = 0;
			this.velocity.x = 0;
		}
		
		// slides left
		if (this.game.left && !this.game.right && this.game.z) {
			this.state = 2;
			this.facing = 1;
			this.velocity.x -= 0.90;
		}
		// moves left
		else if (this.game.left && !this.game.right) {
			this.state = 1;
			this.facing = 1;
			this.velocity.x -= 0.5;
		}
		
		// slides right
		if (this.game.right && !this.game.left && this.game.z) {
			this.state = 2;
			this.facing = 0;
			this.velocity.x += 0.90;
		}
		// moves right
		else if (this.game.right && !this.game.left) {
			this.state = 1;
			this.facing = 0;
			this.velocity.x += 0.5;
		}
		
		// attacks
		if (this.game.x) {
			this.state = 3;
			this.velocity.x = 0;
		}
		
		// attacks left
		/*if (this.game.left && !this.game.right && this.game.x) {
			this.state = 3;
			this.facing = 1;
			this.velocity.x = 0;
		}
		
		// attacks right
		if (this.game.right && !this.game.left && this.game.x) {
			this.state = 3;
			this.facing = 0;
			this.velocity.x = 0;
		}*/
		
		// jumping
		if (this.game.space && this.jumping == false) {
			//this.state = 2;
			this.velocity.y -= 25;
			this.jumping = true;
		}
		
		// jumping
		/*if (this.game.space && this.jumping == false) {
			this.state = 2;
			this.velocity.y -= 25;
			this.jumping = true;
		}*/
		
		this.velocity.y += .45; // gravity
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.velocity.x *= 0.9;
		this.velocity.y *= 0.9;
		
		if (this.y >  660) {
			this.jumping = false;
			this.y = 660;
			this.velocity.y = 0;
		}
		
		if (this.x < -260) {
			this.x = 1024;
		} else if (this.x > 1024) {
			this.x = -260;
		}
		
		//this.x += this.velocity.x * this.game.clockTick;
		//if (this.x > 1024 || this.x < 0) this.x = 0;
		
		//this.y += this.velocity.x * this.game.clockTick;
		//if (this.y > 768 || this.y < 0) this.y = 0;
	};
	
	draw(ctx) {
		this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
		
		//this.idle.drawFrame(this.game.clockTick, ctx, 0, 150);
	};
};