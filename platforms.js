
class Platform_Tile {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./platforms/Platform Tile.png");
		this.BB = new BoundingBox(this.x-34,this.y,32+34,32);
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x,this.y,64,64);
	};
};


class Grass_Middle {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./platforms/Grass Middle.png");
		this.BB = new BoundingBox(this.x-34,this.y,32+34,32);
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x,this.y,64,64);
	};
};


class Coin {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/coin.png");
		this.BB = new BoundingBox(this.x-34, this.y, 32+34, 32);
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet, this.x - this.game.camera.x, this.y, 64, 64);
	}
};

class Spring {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Spring.png");
		this.BB = new BoundingBox(this.x,this.y,64,64);
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x,this.y,64,64);
	};
};

class Spike{
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SPIKES.png");
		this.BB = new BoundingBox(this.x, this.y, 32, 32);
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet, this.x - this.game.camera.x, this.y, 64, 64);
	};
};

class Flag{
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Flag.png");
		this.BB = new BoundingBox(this.x, this.y, 32, 32);
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet, this.x - this.game.camera.x, this.y, 64, 64);
	};
};