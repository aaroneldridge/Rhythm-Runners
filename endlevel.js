class EndLevel {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.titleBackground = ASSET_MANAGER.getAsset("./background/title.png");
	}
	
	update() {
		
	}
	
	draw(ctx) {
		ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
		
		// To show completion
		ctx.fillStyle = "Black";
		if (this.game.camera.levelCount === 1) {
			ctx.fillText("Stage 1-1 completed!", 300, 300);
		}
		
		if (this.game.camera.levelCount === 2) {
			ctx.fillText("Stage 1-2 completed!", 300, 300);
		}
		
		if (this.game.camera.levelCount === 3) {
			ctx.fillText("Stage 2-1 completed!", 300, 300);
		}
		
		if (this.game.camera.levelCount === 4) {
			ctx.fillText("Stage 2-2 completed!", 300, 300);
		}
		
		if (this.game.camera.levelCount === 4){
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 390 && this.game.mouse.x < 650 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("Quit", 350, 700);
		} else {
			ctx.fillText("Continue?", 400, 600);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 400 && this.game.mouse.x < 500 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("Yes", 400, 700);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 550 && this.game.mouse.x < 650 && this.game.mouse.y > 630 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("No", 550, 700);
		}
	}
}