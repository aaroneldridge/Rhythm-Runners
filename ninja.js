class Ninja {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		
		this.game.ninja = this;
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ninja.png");
		this.jumping = false;
		this.hits = 0;
		this.flagTouch = false;

		this.updateBB();

		
		this.state = 0; // 0 = idle, 1 = walking, 2 = jumping
		this.facing = 0; // 0 = right, 1 = left
		this.animations = [];
		this.loadAnimations();
		
		this.velocity = { x: 0,  y: 0 };
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
		
		// slides right
		//this.game.right && !this.game.left && 
		if (this.game.z) {
			this.state = 2;
			this.facing = 0;
			this.velocity.x = 2;
		}
		// moves right
		//else if (this.game.right && !this.game.left) {
			this.state = 1;
			this.facing = 0;
			this.velocity.x = 3;
		//}
		
		// attacks
		if (this.game.x) {
			this.state = 3;			
			ASSET_MANAGER.playAsset("./sounds/attack.wav");
		}
		
		// jumping
		if (this.game.space && this.jumping == false) {
			//this.state = 2;
			this.velocity.y -= 13;
			this.jumping = true;
			ASSET_MANAGER.playAsset("./sounds/jump.wav");
		}
		
		this.velocity.y += .3; // gravity
		
		if (this.hits === 3) {
			this.state = 0;
			this.velocity.x = 0;
			//ASSET_MANAGER.pauseBackgroundMusic();
		}
		
		this.y += this.velocity.y;
		this.x += this.velocity.x;
		
		

		this.updateBB();

		//collision
		var that = this;
		this.game.entities.forEach(function (entity) {
			if (entity.BB && that.BB.collide(entity.BB)) {

				if (that.velocity.y > 0) { // falling

					if(entity instanceof Platform_Tile || entity instanceof Grass_Middle// landing
						&& (that.lastBB.bottom) >= entity.BB.top) { // was above last tick
							that.y = entity.BB.top - 85;
							that.velocity.y = 0;
							that.jumping = false;
							if(entity instanceof Grass_Middle)
								that.y = entity.BB.top - 64;

					}

					//SPRING MECHANICS
					if (entity instanceof Spring && (that.lastBB.bottom) >= entity.BB.top)
					{
						that.y = entity.BB.top-85;
						that.velocity.y = -20
						that.jumping = true;
					}

				}
			
				if(that.velocity.y < 0){
					if(entity instanceof Platform_Tile // bonking head
						&& (that.lastBB.top) >= entity.BB.bottom) {
							that.y = entity.BB.bottom;
							that.velocity.y = 0;
								
					}
				}
				
				if (entity instanceof Coin
					&& (that.lastBB.right) >= entity.BB.left) {
						//that.score += 100;
						entity.removeFromWorld = true;
						ASSET_MANAGER.playAsset("./sounds/coin.wav");
						
						that.updateBB();
				}
				
				if (entity instanceof Spike
					&& (that.lastBB.right) >= entity.BB.left) {
						that.hits++;
						entity.BB = new BoundingBox(null, null, null, null);
						
						that.updateBB();
					}
					
				if (entity instanceof Flag
					&& (that.lastBB.right) >= entity.BB.left) {
						that.flagTouch = true;
						
						that.updateBB();
					}
			}

		});
	};
	
	draw(ctx) {

		if(this.state == 3){
			this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y+25, 5, 5);
		} else {
			this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, 5, 5);
		}

		if (PARAMS.DEBUG) {
			ctx.strokeStyle = 'Red';
			//ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
		}
	
	};
	

	updateBB() {
		this.lastBB = this.BB;
		this.BB = new BoundingBox(this.x, this.y, 32, 110);
		};
		
};