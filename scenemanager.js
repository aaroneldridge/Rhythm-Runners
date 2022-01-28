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
		
		if (!this.title) {		
			if (level.ground) {
				for (var i = 0; i < level.ground.length; i++) {
					let grounds = level.ground[i];
					this.game.addEntity(new Ground(this.game, grounds.x, grounds.y));
				}
			}
		}
		
		/*let x = 0;
		let y = 0;
		
		this.ninja.x = x;
		this.ninja.y = y;
		this.ninja.velocity = { x: 0, y: 0 };
		this.game.addEntity(this.ninja);
		
		if (this.transition && !this.title) {
			ASSET_MANAGER.pauseBackgroundMusic();
			ASSET_MANAGER.playAsset(level.music);
		}*/
	};
	
	update() {
		//PARAMS.DEBUG = document.getElementById("debug").checked;
		
		if (this.title && this.game.click) {
			if (this.game.click.x > 300 && this.game.click.x < 450 && this.game.click.y > 660 && this.game.click.y < 710) {
				this.title = false;
				this.transition = true;
				this.ninja = new Ninja(this.game, 0, 0);
				this.loadLevel(levelOne, true, false);
			}
		}
		
		if (this.transition && this.game.click) {
			if (this.game.mouse.x > 300 && this.game.mouse.x < 590 && this.game.mouse.y > 660 && this.game.mouse.y < 710) {
				this.transition = false;
				this.title = false;
				this.ninja = new Ninja(this.game, 0, 0);
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
			ctx.fillText("TEMPORARY GAME NAME", 200, 200);
			ctx.fillStyle = "Grey";
			ctx.fillRect(300, 660, 150, 50);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 300 && this.game.mouse.x < 450 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("PLAY", 310, 700);
		}
		
		if (this.transition && !this.title) {
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Grey";
			ctx.fillText("Z: Slide", 200, 200);
			ctx.fillText("X: Attack", 200, 250);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 300 && this.game.mouse.x < 590 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("CONTINUE", 410, 700);
		}
	};
};