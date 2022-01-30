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
					this.game.addEntity(new Ground(this.game, grounds.x, grounds.y));
				}
			}
			
			this.ninja = new Ninja(this.game, 0, 660);
			
			var ninja = false;
			this.game.entities.forEach(function(entity) {
				if (that.ninja === entity)
				 ninja = true;
			});
			if (!ninja) this.game.addEntity(this.ninja);
			for(let i = 0; i < 40; i++)
				this.game.addEntity(new Background(this.game, 0+(1700*i), 450));
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
};