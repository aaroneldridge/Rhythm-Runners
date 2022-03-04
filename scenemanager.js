class SceneManager {
	constructor(game) {
		this.game = game;
		this.game.camera = this;
		this.x = 0;
		
		this.title = true;
		this.transition = false;
		this.death = false;
		this.level = null;
		this.end = false;
		this.titleBackground = ASSET_MANAGER.getAsset("./background/title.png");
		this.ninja = new Ninja(this.game, 0, 500);
		this.hp = ASSET_MANAGER.getAsset("./sprites/hp.png");
		
		this.levelCount = 1;
	};
	
	clearEntities() {
		this.game.entities.forEach(function (entity) {
			entity.removeFromWorld = true;
		});
	};
	
	updateAudio() {
		var mute = document.getElementById("mute").checked;
		var volume = document.getElementById("volume").value;
		
		ASSET_MANAGER.muteAudio(mute);
		ASSET_MANAGER.adjustVolume(volume);
	};
	
	loadEndLevel() {
		this.clearEntities();
		this.endlevel = new EndLevel(this.game, 0, 0);
		this.game.addEntity(this.endlevel);
		ASSET_MANAGER.pauseBackgroundMusic();
		//ASSET_MANAGER.playAsset("./sounds/levelComplete.wav");
		ASSET_MANAGER.playAsset("./sounds/8bitVictory.mp3");
	};
	
	loadLevel(level, transition, title) {
		this.title = title;
		this.transition = transition;
		this.level = level;
		this.clearEntities();
		
		var that = this;
		if (!this.transition && !this.title) {		
			// ninja spawns at beginning of level
			//that.ninja = new Ninja(this.game, 0, 500);
			
			// ninja spawns near front of flag (29000)
			that.ninja = new Ninja(that.game, 0, 500);
			
			var ninja = false;
			this.game.entities.forEach(function(entity) {
				if (that.ninja === entity) {
					ninja = true;
				}
			});
			if (!ninja) this.game.addEntity(that.ninja);

			
			if (level.platform_tiles) {
				for (var i = 0; i < level.platform_tiles.length; i++) {
					let platform = level.platform_tiles[i];
					this.game.addEntity(new Platform_Tile(this.game, platform.x, platform.y));
				}
			}
			
			if (level.spikes) {
				for (var i = 0; i < level.spikes.length; i++) {
					let spike = level.spikes[i];
					this.game.addEntity(new Spike(this.game, spike.x, spike.y));
				}
			}

			if (level.spring) {
				for (var i = 0; i < level.spring.length; i++) {
					let spring = level.spring[i];
					this.game.addEntity(new Spring(this.game, spring.x, spring.y));
				}
			}
			
			if (level.coins) {
				for (var i = 0; i < level.coins.length; i++) {
					let coin = level.coins[i];
					this.game.addEntity(new Coin(this.game, coin.x, coin.y));
				}
			}
			
			if (level.flags) {
				for (var i = 0; i < level.flags.length; i++) {
					let flag = level.flags[i];
					this.game.addEntity(new Flag(this.game, flag.x, flag.y));
				}
			}

			if (level.Grass_Middle) {
				for (var i = 0; i < level.Grass_Middle.length; i++) {
					let grass = level.Grass_Middle[i];
					this.game.addEntity(new Grass_Middle(this.game, grass.x, grass.y));
				}
			}


			
			//Adding grass flooring for first level
			//for(var i = 0; i < 40; i++){
		//		this.game.addEntity(new Grass_Middle(this.game,-400+(i*64),720));
			//}

			//for(var i = 0; i < 50; i++){
			//	this.game.addEntity(new Grass_Middle(this.game,2700+(i*64),720));
			//}

			//for(var i = 0; i < 66; i++){
			//	this.game.addEntity(new Grass_Middle(this.game,7400+(i*64),720));
			//}

			//for(var i = 0; i < 90; i++){
			//	this.game.addEntity(new Grass_Middle(this.game,15000+(i*64),720));
			//}

			//for(var i = 0; i < 40; i++){
			//	this.game.addEntity(new Grass_Middle(this.game,22150+(i*64),720));
			//}

			//for(var i = 0; i < 20; i++){
			//	this.game.addEntity(new Grass_Middle(this.game,26000+(i*64),720));
			//}

		//	for(var i = 0; i < 27; i++){
			//	this.game.addEntity(new Grass_Middle(this.game,29000+(i*64),720));
			

			//}
			//Adding Random Backgrounds
			for(let i = 0; i < 100; i++){
				this.addBackground(i);
			}



			ASSET_MANAGER.pauseBackgroundMusic();
			ASSET_MANAGER.playAsset(level.music);
			
			this.game.click.x = 0;
			this.game.click.y = 0;
		}
	};
	
	update() {
		//PARAMS.DEBUG = document.getElementById("debug").checked;
		
		if (this.title && this.game.click) {
			if (this.game.click.x > 415 && this.game.click.x < 565 && this.game.click.y > 460 && this.game.click.y < 510) {
				this.title = false;
				this.transition = true;
			}
		}
		
		if (this.transition && this.game.click) {
			if (this.game.click.x > 270 && this.game.click.x < 420 && this.game.click.y > 240 && this.game.click.y < 320) {
				this.transition = false;
				this.title = false;
				this.death = false;
				
				this.loadLevel(levelOne, false, false);
			}

			if (this.game.click.x > 570 && this.game.click.x < 720 && this.game.click.y > 240 && this.game.click.y < 320) {
				this.transition = false;
				this.title = false;
				this.death = false;
				
				this.loadLevel(levelTwo, false, false);
			}

			if (this.game.click.x > 270 && this.game.click.x < 420 && this.game.click.y > 390 && this.game.click.y < 470) {
				this.transition = false;
				this.title = false;
				this.death = false;
				
				this.loadLevel(levelThree, false, false);
			}

			if (this.game.click.x > 570 && this.game.click.x < 720 && this.game.click.y > 390 && this.game.click.y < 470) {
				this.transition = false;
				this.title = false;
				this.death = false;
				
				this.loadLevel(levelFour, false, false);
			}
		}
		
		if (this.death) {
			if (this.game.click.x > 400 && this.game.click.x < 625 && this.game.click.y > 560 && this.game.click.y < 610) {
				this.transition = true;
				this.death = false;
				
				ASSET_MANAGER.pauseBackgroundMusic();
				
				// if level 1 -- replay level 1
				// if level 2 -- etc. etc.
				this.loadLevel(levelOne, true, false);
			}
		}
		
		if (this.end && this.game.click) {
			if (this.game.click.x > 390 && this.game.click.x < 650 && this.game.click.y > 660 && this.game.click.y < 710) {
				this.end = false;
				this.levelCount++;
				
				if (this.levelCount === 2) {
					this.loadLevel(levelTwo, false, false);
				}
				
				if (this.levelCount === 3) {
					this.loadLevel(levelThree, false, false);
				}
				
				if (this.levelCount === 4) {
					this.loadLevel(levelFour, false, false);
				}
			}
		}
		
		this.updateAudio();
		
		let midpoint = PARAMS.CANVAS_WIDTH / 4 - PARAMS.BLOCKWIDTH / 4;
		this.x = this.ninja.x - midpoint;
	};
	
	draw(ctx) {
		ctx.fillStyle = "White";
		ctx.fillRect(50, 80, 200, 20);
		if (this.ninja.hits === 0) {
			ctx.drawImage(this.hp, 9, 399, 278, 51, 50, 80, 200, 20);	
		}
		
		if (this.ninja.hits === 1) {
			ctx.drawImage(this.hp, 9, 269, 278, 51, 50, 80, 200, 20);
		}
		
		if (this.ninja.hits === 2) {
			ctx.drawImage(this.hp, 9, 139, 278, 51, 50, 80, 200, 20);
		}
		
		if (this.ninja.hits === 3) {
			this.death = true;
			this.ninja.state = 2;

			ASSET_MANAGER.pauseBackgroundMusic();
			this.ninja.velocity.x = 0;
			this.ninja.canJump=false;
		}
		
		if (this.ninja.flagTouch === true) {
			this.end = true;
		}


		ctx.font = 'italic small-caps 80px fantasy';
		
		if (this.title && !this.transition) {
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Black";
			ctx.fillText("Rhythm Runners", 275, 300);
			
			ctx.font = 'italic small-caps 60px fantasy';
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 415 && this.game.mouse.x < 565 && this.game.mouse.y > 460 && this.game.mouse.y < 510 ? "White" : "Black";
			ctx.fillText("PLAY", 425, 500);
		}
		
		if (this.transition && !this.title) {
			ctx.font = 'italic small-caps 40px fantasy';
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Black";
			ctx.fillText("try to reach the end of the stage without dying!", 210, 100);
			ctx.fillText("collect as many coins as you can!   :)", 260, 150);
			ctx.font = 'italic small-caps 40px fantasy';
			ctx.fillText("SELECT A LEVEL!", 375, 575);
			
			// level select
			ctx.font = 'italic small-caps bold 48px fantasy';
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 270 && this.game.mouse.x < 420 && this.game.mouse.y > 240 && this.game.mouse.y < 320 ? "White" : "Black";
			ctx.fillText("Level 1-1", 275, 300);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 570 && this.game.mouse.x < 720 && this.game.mouse.y > 240 && this.game.mouse.y < 320 ? "White" : "Black";
			ctx.fillText("Level 1-2", 575, 300);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 270 && this.game.mouse.x < 420 && this.game.mouse.y > 390 && this.game.mouse.y < 470 ? "White" : "Black";
			ctx.fillText("Level 2-1", 275, 450);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 570 && this.game.mouse.x < 720 && this.game.mouse.y > 390 && this.game.mouse.y < 470 ? "White" : "Black";
			ctx.fillText("Level 2-2", 575, 450);


		}
		
		if (this.death && !this.transition) {
			//ctx.drawImage(this.black, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.drawImage(this.hp, 9, 9, 278, 51, 50, 80, 200, 20);
			ctx.fillStyle = "Red";
			ctx.fillText("You have died!", 350, 400);
			
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 400 && this.game.mouse.x < 625 && this.game.mouse.y > 560 && this.game.mouse.y < 610 ? "White" : "Red";
			ctx.fillText("Restart?", 400, 600);
		}
	};

	addBackground(i) {
		let rand = Math.floor(Math.random() * 6);
		console.log(rand + " i:" + i);
		switch(rand) { 
			case 1:
				this.game.addEntity(new lantern_w_o(this.game, 0+(1700*i), 480));
			case 2:
				this.game.addEntity(new lantern_w(this.game, 0+(1700*i), 450));
			case 3:
				this.game.addEntity(new no_trees_w_o(this.game, 0+(1700*i), 450));
			case 4:
				this.game.addEntity(new no_trees_w(this.game, 0+(1700*i), 450));
			case 5:
				this.game.addEntity(new trees_and_gate(this.game, 0+(1700*i), 450));
			case 6:
				this.game.addEntity(new trees_w_o(this.game, 0+(1700*i), 450));
			case 0:
				this.game.addEntity(new trees_w(this.game, 0+(1700*i), 450));
		};
	};
};
