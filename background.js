class Background {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/land.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	}
}