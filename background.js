class lantern_w_o {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/lantern w_o.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};


class lantern_w {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/lantern w.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class no_trees_w_o {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/no_trees_w_o.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class no_trees_w {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/no_trees_w.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class trees_and_gate {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/trees and gate.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class trees_w_o {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/trees w_o.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class trees_w {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/trees w.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class inside_start {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/start_crop.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class inside {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/inside_cas.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class inside_castle {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/inside_castle.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class inside_end {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/end_crop.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class space_temp {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/space_temp.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1700,1000);
	};
};

class Barrel{
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Barrel.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,this.y,64,64);
	};
};

class LanternPost{
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Lantern Post.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,this.y,64,256);
	};
};

class Space1 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space1.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space2 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space2.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space3 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space3.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space4 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space4.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space5 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space5.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space6 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space6.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space7 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space7.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space8 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space8.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};

class Space9 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./background/Space9.png");
	};
	
	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(this.spritesheet,this.x-this.game.camera.x-400,0,1000,1000);
	};
};