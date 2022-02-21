class Ninja {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		
		this.game.ninja = this;
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ninja.png");
		this.jumping = false;
		this.hits = 0;
		this.flagTouch = false;
<<<<<<< HEAD
=======
		this.coinCounter = new CoinCount(this.game, 500, 100);
>>>>>>> merit
		this.updateBB();

		
		this.state = 0; // 0 = idle, 1 = walking, 2 = jumping
		this.facing = 0; // 0 = right, 1 = left
		this.animations = [];
		this.loadAnimations();

		this.velocity = { x: 0,  y: 0 };
		this.velocity.x = 3;
		
		this.state = 1;
		this.facing = 0;
		this.canJump = true;
	};
	
	loadAnimations() {
		for (var i = 0; i < 4; i++) {
			this.animations.push([]);
		}
		
		// idle animation
		this.animations[0] = new Animator(this.spritesheet, 265, 13, 22, 22, 1, 1, false);
		
		// walking animation
		this.animations[1] = new Animator(this.spritesheet, 265, 13, 27, 23, 2, 0.2, false);
		
		// sliding animation
		this.animations[2] = new Animator(this.spritesheet, 390, 45, 27, 17, 1, 1, false);
		
		// attacking animation
		this.animations[3] = new Animator(this.spritesheet, 390, 142, 27, 25, 1, 1, false);
	};
	
	update() {
		const TICK = this.game.clockTick;
		

		// if (this.game.z) {
		// 	this.state = 2;
		// 	this.facing = 0;
		// 	this.velocity.x = 2;
		// }
		
		
		// // attacks
		// if (this.game.x) {
		// 	this.state = 3;			
		// 	ASSET_MANAGER.playAsset("./sounds/attack.wav");
		// }
		
		// jumping
		if (this.game.space && this.jumping == false && this.canJump) {
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

				if (that.velocity.y	 > 0) { // falling

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
				
				//COIN
				if (entity instanceof Coin
					&& (that.lastBB.right) >= entity.BB.left) {
						//that.score += 100;
						entity.removeFromWorld = true;
						that.coinCounter.coinCount ++;
						ASSET_MANAGER.playAsset("./sounds/coin.wav");
						
						that.updateBB();
				}
				
				//SPIKE
				if (entity instanceof Spike) {
						console.log("spikes");
						that.hits++;
						entity.BB = new BoundingBox(null,null,null,null);
				}


				//FLAG END GAME					
				if (entity instanceof Flag
					&& (that.lastBB.right) >= entity.BB.left) {
						that.flagTouch = true;
					}
					
				if(that.velocity.y < 0){
				if(entity instanceof Platform_Tile // bonking head
					&& (that.lastBB.top) >= entity.BB.bottom) {
						console.log("bonk");
						that.y = entity.BB.bottom;
						that.velocity.y = 0;
							
				}
			}

			
			}

		});
	};
	
	draw(ctx) {
		if (this.state == 3) {
			this.animations[this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y+25, 5, 5);
		} else if (this.state == 2) {
			this.animations[this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y+30, 5, 5);
		} else {
			this.animations[this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, 5, 5);
		}

		if (PARAMS.DEBUG) {
			ctx.strokeStyle = 'Red';
			//ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
		}
		this.coinCounter.draw(ctx);
	};
	

	updateBB() {
		this.lastBB = this.BB;
		this.BB = new BoundingBox(this.x, this.y, 32, 110);
		};
		
};