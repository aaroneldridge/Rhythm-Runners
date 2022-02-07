class Ground {
	constructor(game, x, y, w) {
		Object.assign(this, { game, x, y });
		
		this.animation = new Animator(ASSET_MANAGER.getAsset("./platforms/ground.png"), 0, 0, 456, 219, 1, 1);
	};
	
	update() {
	};
	
	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, 0.5);
	};
}