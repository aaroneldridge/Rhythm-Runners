class SceneManager {
	constructor(game) {
		this.game = game;
		this.game.camera = this;
		this.x = 0;
		
		this.title = true;
		this.transition = false;
		this.level = null;
		this.titleBackground = ASSET_MANAGER.getAsset("./background/title.png");
		this.ninja = new Ninja(this.game, 100, 100);
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
			this.game.addEntity(new Platform_Tile(this.game,700+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,700+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,700+(gap*3),500));
			this.game.addEntity(new Spike(this.game,1100,690));
			this.game.addEntity(new Spike(this.game,1050,690));

			this.game.addEntity(new Platform_Tile(this.game,900+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,900+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,900+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,1500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,1500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,1500+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,1700+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,1700+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,1700+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,1900+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,1900+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,1900+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,2200+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,2200+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,2200+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,2500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,2500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,2500+(gap*3),500));

			this.game.addEntity(new Spike(this.game,3200,695));
			this.game.addEntity(new Spike(this.game,3250,695));

			this.game.addEntity(new Platform_Tile(this.game,2900+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,2900+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,2900+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,3100+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,3100+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,3100+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,3400+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,3400+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,3400+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,3800+gap,600));
			this.game.addEntity(new Platform_Tile(this.game,3800+(gap*2),600));
			this.game.addEntity(new Platform_Tile(this.game,3800+(gap*3),600));
			this.game.addEntity(new Spike(this.game,4270,540));
			this.game.addEntity(new Spike(this.game,4300,540));
			this.game.addEntity(new Spike(this.game,4365,540));

			this.game.addEntity(new Platform_Tile(this.game,4200+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,4200+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,4200+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,4400+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,4400+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,4400+(gap*3),300));

			this.game.addEntity(new Spike(this.game,5400,695));
			this.game.addEntity(new Spike(this.game,5450,695));
			this.game.addEntity(new Spike(this.game,5470,695)); 

			this.game.addEntity(new Spike(this.game,5700,695));
			this.game.addEntity(new Spike(this.game,5750,695));
			this.game.addEntity(new Spike(this.game,5770,695)); 

			this.game.addEntity(new Platform_Tile(this.game,5700+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,5700+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,5700+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,5900+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,5900+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,5900+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,6100+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,6100+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,6100+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,6400+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,6400+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,6400+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,6600+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,6600+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,6600+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,6900+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,6900+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,6900+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,7200+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,7200+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,7200+(gap*3),500));

			this.game.addEntity(new Spike(this.game,7870,695));
			this.game.addEntity(new Spike(this.game,7920,695));
			this.game.addEntity(new Spike(this.game,7940,695)); 

			this.game.addEntity(new Platform_Tile(this.game,7600+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,7600+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,7600+(gap*3),500));

			this.game.addEntity(new Spike(this.game,8270,695));
			this.game.addEntity(new Spike(this.game,8320,695));
			this.game.addEntity(new Spike(this.game,8340,695)); 

			this.game.addEntity(new Platform_Tile(this.game,8000+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,8000+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,8000+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,8300+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,8300+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,8300+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,8600+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,8600+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,8600+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,8900+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,8900+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,8900+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,9200+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,9200+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,9200+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,9500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,9500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,9500+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,9800+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,9800+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,9800+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,10100+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,10100+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,10100+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,10400+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,10400+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,10400+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,10600+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,10600+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,10600+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,11000+gap,600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*2),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*3),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*4),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*5),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*6),600));
			this.game.addEntity(new Spike(this.game,11470,540));
			this.game.addEntity(new Spike(this.game,11520,540));
			this.game.addEntity(new Spike(this.game,11570,540));
			this.game.addEntity(new Spike(this.game,11610,540));
			this.game.addEntity(new Spike(this.game,11660,540));
			this.game.addEntity(new Spike(this.game,11720,540));

			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*5),200));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*6),300));
			// stairs leading up to slide
			this.game.addEntity(new Platform_Tile(this.game,11500+gap,700));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*2),650));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*3),600));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*4),550));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*5),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*6),500));
			// bottom part of slide
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*7),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*8),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*9),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*10),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*11),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*12),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*13),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*14),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*15),500));
			//top part of slide
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*7),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*8),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*9),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*10),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*11),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*12),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*13),400));

			//next long slide
			this.game.addEntity(new Platform_Tile(this.game,12500+gap,450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*2),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*3),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*4),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*5),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*6),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*7),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*8),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*9),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*10),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*11),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*12),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*3),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*4),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*5),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*6),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*7),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*8),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*9),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*10),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*2),200));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*1),150));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*1),150));
			this.game.addEntity(new Platform_Tile(this.game,12500,100));

			this.game.addEntity(new Platform_Tile(this.game,13400+gap,350));
			this.game.addEntity(new Platform_Tile(this.game,13400+(gap*2),350));
			this.game.addEntity(new Platform_Tile(this.game,13400+(gap*3),350));

			this.game.addEntity(new Platform_Tile(this.game,13700+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,13700+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,13700+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,14000+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,14000+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,14000+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,14300+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*3),100));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*4),150));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*5),200));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*6),250));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*7),300));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*8),350));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*9),400));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*10),450));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*11),500));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*12),550));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*13),600));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*14),650));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*15),700));

			this.game.addEntity(new Platform_Tile(this.game,15470+gap,450));
			this.game.addEntity(new Platform_Tile(this.game,15470+(gap*2),450));
			this.game.addEntity(new Platform_Tile(this.game,15470+(gap*3),450));

			/*this.game.addEntity(new Barrel(this.game,1700,700));
			this.game.addEntity(new LanternPost(this.game,600,500));
			this.game.addEntity(new Barrel(this.game,2404,700));
			this.game.addEntity(new Barrel(this.game,100,700));
			this.game.addEntity(new Barrel(this.game,9900,700));
			this.game.addEntity(new Barrel(this.game,3990,700));
			this.game.addEntity(new LanternPost(this.game,4399,500));*/


			
			//Adding grass flooring
			for(var i = 0; i < 1000; i++){
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
				this.ninja = new Ninja(this.game, 100, 100);
				this.loadLevel(levelOne, false, false);
			}
		}
		
		this.updateAudio();
		
		let midpoint = PARAMS.CANVAS_WIDTH / 4 - PARAMS.BLOCKWIDTH / 4;
		this.x = this.ninja.x - midpoint;
	};
	
	draw(ctx) {
		ctx.font = 'italic small-caps bold 48px cursive';
		
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