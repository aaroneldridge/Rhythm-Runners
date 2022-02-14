class SceneManager {
	constructor(game) {
		this.game = game;
		this.game.camera = this;
		this.x = 0;
		
		this.title = true;
		this.transition = false;
		this.death = false;
		this.level = null;
		this.titleBackground = ASSET_MANAGER.getAsset("./background/title.png");
		this.ninja = new Ninja(this.game, 100, 100);
		this.hp = ASSET_MANAGER.getAsset("./sprites/hp.png");
		this.loadLevel(levelOne, false, this.title);
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
	
	loadLevel(level, transition, title) {
		this.title = title;
		this.transition = transition;
		this.level = level;
		this.clearEntities();
		
		if (!this.transition && !this.title) {		
			if (level.ground) {
				for (var i = 0; i < level.ground.length; i++) {
					let grounds = level.ground[i];
					// this.game.addEntity(new Ground(this.game, grounds.x, grounds.y));
				}
			}
			
			this.ninja = new Ninja(this.game, 0,500);
			
			var ninja = false;
			this.game.entities.forEach(function(entity) {
				if (that.ninja === entity)
				 ninja = true;
			});
			if (!ninja) this.game.addEntity(this.ninja);



			let gap = 56;

			//Adding Obstacles, Enemies, and Platforms
			this.game.addEntity(new Platform_Tile(this.game,500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,500+(gap*3),500));
			this.game.addEntity(new Platform_Tile(this.game,500,500));

			this.game.addEntity(new Platform_Tile(this.game,1000+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,1000+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,1000+(gap*3),500));
			this.game.addEntity(new Platform_Tile(this.game,1000,500));

			this.game.addEntity(new Platform_Tile(this.game,1200+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,1200+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,1200+(gap*3),300));
			this.game.addEntity(new Platform_Tile(this.game,1200,300));

			this.game.addEntity(new Platform_Tile(this.game,1500+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,1500+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,1500+(gap*3),300));
			this.game.addEntity(new Platform_Tile(this.game,1500,300));

			this.game.addEntity(new Barrel(this.game,1700,700));
			this.game.addEntity(new LanternPost(this.game,600,500));
			this.game.addEntity(new Barrel(this.game,2404,700));
			this.game.addEntity(new Barrel(this.game,100,700));
			this.game.addEntity(new Barrel(this.game,9900,700));
			this.game.addEntity(new Barrel(this.game,3990,700));
			this.game.addEntity(new LanternPost(this.game,4399,500));
			
			this.game.addEntity(new Coin(this.game, 500, 670));
			//this.game.addEntity(new Coin(this.game, 950, 430));
			this.game.addEntity(new Coin(this.game, 1000, 670));
			this.game.addEntity(new Coin(this.game, 1500, 670));


			
			
			for(var i = 0; i < 120; i++){
				this.game.addEntity(new Grass_Middle(this.game,-400+(i*64),720));
			}
			//Adding Random Backgrounds
			for(let i = 0; i < 40; i++){
				this.addBackground(i);
			}



			ASSET_MANAGER.pauseBackgroundMusic();
			ASSET_MANAGER.playAsset(level.music);
		}
	};
	
	update() {
		//PARAMS.DEBUG = document.getElementById("debug").checked;
		
		if (this.title && this.game.click) {
			if (this.game.click.x > 415 && this.game.click.x < 565 && this.game.click.y > 660 && this.game.click.y < 710) {
				this.title = false;
				this.transition = true;
				//this.ninja = new Ninja(this.game, 100, 100);
				this.loadLevel(levelOne, true, false);
			}
		}
		
		if (this.transition && this.game.click) {
			if (this.game.click.x > 690 && this.game.click.x < 990 && this.game.click.y > 660 && this.game.click.y < 710) {
				this.transition = false;
				this.title = false;
				this.death = false;
				this.ninja = new Ninja(this.game, 100, 100);
				this.loadLevel(levelOne, false, false);
			}
		}
		
		if (this.death) {
			if (this.game.click.x > 400 && this.game.click.x < 625 && this.game.click.y > 560 && this.game.click.y < 610) {
				this.transition = true;
				this.death = false;
				
				this.loadLevel(levelOne, true, false);
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
		}
		
		
		ctx.font = 'italic small-caps bold 48px cursive';
		
		ctx.fillRect 
		
		if (this.title && !this.transition) {
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Black";
			ctx.fillText("TEMPORARY GAME NAME", 200, 200);
			
			//ctx.fillRect(300, 660, 150, 50);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 415 && this.game.mouse.x < 565 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("PLAY", 425, 700);
		}
		
		if (this.transition && !this.title) {
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Black";
			ctx.fillText("Z: Slide", 250, 200);
			ctx.fillText("X: Attack", 250, 250);
			
			//ctx.fillRect(690, 660, 300, 50);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 690 && this.game.mouse.x < 990 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("CONTINUE", 700, 700);
		}
		
		if (this.death && !this.transition) {
			//ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.drawImage(this.hp, 9, 9, 278, 51, 50, 80, 200, 20);
			ctx.fillStyle = "Black";
			ctx.fillText("You have died!", 350, 400);
			
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 400 && this.game.mouse.x < 625 && this.game.mouse.y > 560 && this.game.mouse.y < 610 ? "White" : "Black";
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