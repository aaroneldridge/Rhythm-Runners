class EndLevel {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.transitionBackground = ASSET_MANAGER.getAsset("./background/portals.png");
	}
	
	update() {
		
	}
	
	draw(ctx) {
		ctx.drawImage(this.transitionBackground, 50, 20, 620, 349, 0, 0, 1024, 768);
		ctx.font = 'italic small-caps 80px fantasy';
		// To show completion
		ctx.fillStyle = "White";
		if (this.game.camera.levelCount === 1) {
			ctx.fillText("Stage 1-1 completed!", 250, 300);

			ctx.fillText("Continue?", 350, 600);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 350 && this.game.mouse.x < 450 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Red";
			ctx.fillText("Yes", 350, 700);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 500 && this.game.mouse.x < 600 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Red";
			ctx.fillText("No", 500, 700);
		}
		
		if (this.game.camera.levelCount === 2) {
			ctx.fillText("Stage 1-2 completed!", 250, 300);

			ctx.fillText("Continue?", 350, 600);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 350 && this.game.mouse.x < 450 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Red";
			ctx.fillText("Yes", 350, 700);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 500 && this.game.mouse.x < 600 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Red";
			ctx.fillText("No", 500, 700);
		}
		
		if (this.game.camera.levelCount === 3) {
			ctx.fillText("Stage 2-1 completed!", 250, 300);

			ctx.fillText("Continue?", 350, 600);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 350 && this.game.mouse.x < 450 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Red";
			ctx.fillText("Yes", 350, 700);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 500 && this.game.mouse.x < 600 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Red";
			ctx.fillText("No", 500, 700);
		}
		
		if (this.game.camera.levelCount === 4) {
			ctx.fillText("Stage 2-2 completed!", 250, 300);

			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 450 && this.game.mouse.x < 550 && this.game.mouse.y > 450 && this.game.mouse.y < 550 ? "White" : "Red";
			ctx.fillText("Quit", 450, 550);
		}

	}
}