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
		this.titleBackground = ASSET_MANAGER.getAsset("./background/all_portal.png");
		this.transitionBackground = ASSET_MANAGER.getAsset("./background/portals.png");
		this.ninja = new Ninja(this.game, 0, 500);
		this.hp = ASSET_MANAGER.getAsset("./sprites/hp.png");
		
		this.levelCount;
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

			if (level.spaceSpring) {
				for (var i = 0; i < level.spaceSpring.length; i++) {
					let spaceSpring = level.spaceSpring[i];
					this.game.addEntity(new SpaceSpring(this.game, spaceSpring.x, spaceSpring.y));
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
			
			if (level.space_tiles) {
				for (var i = 0; i < level.space_tiles.length; i++) {
					let space = level.space_tiles[i];
					this.game.addEntity(new Space_Tile(this.game, space.x, space.y));
				}
			}
			
			if (level.space_middle) {
				for (var i = 0; i < level.space_middle.length; i++) {
					let space = level.space_middle[i];
					this.game.addEntity(new Space_Middle(this.game, space.x, space.y));
				}
			}
			
			if (level === levelOne) {
				//Adding grass flooring
				for(var i = 0; i < 40; i++){
					this.game.addEntity(new Grass_Middle(this.game,-400+(i*64),720));
				}

				for(var i = 0; i < 50; i++){
					this.game.addEntity(new Grass_Middle(this.game,2700+(i*64),720));
				}

				for(var i = 0; i < 66; i++){
					this.game.addEntity(new Grass_Middle(this.game,7400+(i*64),720));
				}

				for(var i = 0; i < 90; i++){
					this.game.addEntity(new Grass_Middle(this.game,15000+(i*64),720));
				}

				for(var i = 0; i < 40; i++){
					this.game.addEntity(new Grass_Middle(this.game,22150+(i*64),720));
				}

				for(var i = 0; i < 20; i++){
					this.game.addEntity(new Grass_Middle(this.game,26000+(i*64),720));
				}

				for(var i = 0; i < 27; i++){
					this.game.addEntity(new Grass_Middle(this.game,29000+(i*64),720));
				}
			}

			if (level === levelTwo) {
				//Adding flooring
				for(var i = 0; i < 40; i++){
					this.game.addEntity(new Wood_Middle(this.game,-400+(i*64),720));
				}

				for(var i = 0; i < 96; i++){
					this.game.addEntity(new Wood_Middle(this.game,12000+(i*64),720));
				}

				for(var i = 0; i < 35; i++){
					this.game.addEntity(new Wood_Middle(this.game,32142+(i*64),720));
				}
			}
			
			if (level === levelThree) {
				//Adding space flooring
				for(var i = 0; i < 30; i++){
					this.game.addEntity(new Space_Middle(this.game,-400+(i*64),720));
				}

				for(var i = 0; i < 50; i++){
					this.game.addEntity(new Space_Middle(this.game,2600+(i*64),720));
				}

				for(var i = 0; i < 80; i++){
					this.game.addEntity(new Space_Middle(this.game,7400+(i*64),720));
				}

				for(var i = 0; i < 124; i++){
					this.game.addEntity(new Space_Middle(this.game,15000+(i*64),720));
				}
			}

			if (level === levelFour) {
				//Adding space flooring
				for(var i = 0; i < 32; i++){
					this.game.addEntity(new Space_Middle(this.game,-400+(i*64),720));
				}

				for(var i = 0; i < 15; i++){
					this.game.addEntity(new Space_Middle(this.game,3400+(i*64),720));
				}

				for(var i = 0; i < 21; i++){
					this.game.addEntity(new Space_Middle(this.game,5600+(i*64),720));
				}

				for(var i = 0; i < 22; i++){
					this.game.addEntity(new Space_Middle(this.game,8200+(i*64),720));
				}

				for(var i = 0; i < 40; i++){
					this.game.addEntity(new Space_Middle(this.game,13500+(i*64),720));
				}

			}
			
			//Adding Random Backgrounds
			if(level == levelOne) {
				for(let i = 0; i < 100; i++){
					this.addForestBackground(i);
				}
			}
			else if (level == levelTwo){
				this.game.addEntity(new inside(this.game, 0, 480));
				for(let i = 1; i < 20; i++){
					this.game.addEntity(new inside(this.game, 0+(1700*i), 480));
				}
				this.game.addEntity(new inside_end(this.game, 33020, 480));
			} 
			else {
				for(let i = 0; i < 100; i++){
					this.addSpaceBackground(i);
				}
			
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
				this.levelCount = 1;
				
				this.loadLevel(levelOne, false, false);
			}

			if (this.game.click.x > 570 && this.game.click.x < 720 && this.game.click.y > 240 && this.game.click.y < 320) {
				this.transition = false;
				this.title = false;
				this.death = false;
				this.levelCount = 2;
				
				this.loadLevel(levelTwo, false, false);
			}

			if (this.game.click.x > 270 && this.game.click.x < 420 && this.game.click.y > 390 && this.game.click.y < 470) {
				this.transition = false;
				this.title = false;
				this.death = false;
				this.levelCount = 3;
				
				this.loadLevel(levelThree, false, false);
			}

			if (this.game.click.x > 570 && this.game.click.x < 720 && this.game.click.y > 390 && this.game.click.y < 470) {
				this.transition = false;
				this.title = false;
				this.death = false;
				this.levelCount = 4;
				
				this.loadLevel(levelFour, false, false);
			}
		}
		
		if (this.death) {
			if (this.game.click.x > 400 && this.game.click.x < 625 && this.game.click.y > 560 && this.game.click.y < 610) {
				this.transition = true;
				this.death = false;
			}
		}
		
		if (this.end && this.game.click) {
			if (this.game.click.x > 350 && this.game.click.x < 450 && this.game.click.y > 630 && this.game.click.y < 710) {
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
			} else if (this.game.click.x > 500 && this.game.click.x < 600 && this.game.click.y > 630 && this.game.click.y < 710) {
				this.transition = true;
			} else if (this.game.click.x > 450 && this.game.click.x < 550 && this.game.click.y > 450 && this.game.click.y < 550) {
				this.transition = true;
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
			ctx.drawImage(this.titleBackground, 10, 30, 620, 349, 0, 0, 1024, 768);

			ctx.font = 'italic small-caps 130px fantasy';
			ctx.fillStyle = "Black";
			ctx.fillText("Rhythm Runners", 195, 300);
			ctx.fillStyle = "Red";
			ctx.fillText("Rhythm Runners", 200, 300);
			
			ctx.font = 'italic small-caps 80px fantasy';
			ctx.fillStyle = "Black";
			ctx.fillText("PLAY", 435, 500);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 415 && this.game.mouse.x < 565 && this.game.mouse.y > 460 && this.game.mouse.y < 510 ? "White" : "Red";
			ctx.fillText("PLAY", 440, 500);
		
		}
		
		if (this.transition && !this.title) {
			ctx.font = 'italic small-caps 40px fantasy';
			ctx.drawImage(this.transitionBackground, 50, 20, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "White";
			ctx.fillText("try to reach the end of the stage without dying!", 210, 100);
			ctx.fillText("collect as many coins as you can!", 260, 150);
			ctx.font = 'italic small-caps 40px fantasy';
			ctx.fillText("SELECT A LEVEL!", 375, 575);
			
			// level select
			ctx.font = 'italic small-caps bold 48px fantasy';
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 270 && this.game.mouse.x < 420 && this.game.mouse.y > 240 && this.game.mouse.y < 320 ? "White" : "Red";
			ctx.fillText("Level 1-1", 275, 300);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 570 && this.game.mouse.x < 720 && this.game.mouse.y > 240 && this.game.mouse.y < 320 ? "White" : "Red";
			ctx.fillText("Level 1-2", 575, 300);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 270 && this.game.mouse.x < 420 && this.game.mouse.y > 390 && this.game.mouse.y < 470 ? "White" : "Red";
			ctx.fillText("Level 2-1", 275, 450);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 570 && this.game.mouse.x < 720 && this.game.mouse.y > 390 && this.game.mouse.y < 470 ? "White" : "Red";
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

	addForestBackground(i) {
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

	addSpaceBackground(i) {
		let rand = Math.floor(Math.random() * 10);
		console.log(rand + " i:" + i);
		switch(rand) { 
			case 1:
				this.game.addEntity(new Space1(this.game, 0+(1000*i), 480));
			case 2:
				this.game.addEntity(new Space2(this.game, 0+(1000*i), 450));
			case 3:
				this.game.addEntity(new Space3(this.game, 0+(1000*i), 450));
			case 4:
				this.game.addEntity(new Space4(this.game, 0+(1000*i), 450));
			case 5:
				this.game.addEntity(new Space5(this.game, 0+(1000*i), 450));
			case 6:
				this.game.addEntity(new Space6(this.game, 0+(1000*i), 450));
			case 7:
				this.game.addEntity(new Space7(this.game, 0+(1000*i), 450));
			case 8:
				this.game.addEntity(new Space8(this.game, 0+(1000*i), 450));
			case 9:
				this.game.addEntity(new Space9(this.game, 0+(1000*i), 450));
			case 10:
				this.game.addEntity(new Space3(this.game, 0+(1000*i), 450));
			case 0:
				this.game.addEntity(new Space3(this.game, 0+(1000*i), 450));
		};
	};
};
