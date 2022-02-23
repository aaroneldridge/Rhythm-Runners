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
		ctx.fillText("Level One completed!", 300, 300);
			
		// To go back to the beginning
		ctx.fillStyle = this.game.mouse && this.game.mouse.x > 400 && this.game.mouse.x < 625 && this.game.mouse.y > 560 && this.game.mouse.y < 610 ? "White" : "Black";
		ctx.fillText("Restart?", 400, 600);
	}
}