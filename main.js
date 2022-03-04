const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// spritesheets
ASSET_MANAGER.queueDownload("./sprites/ninja.png");
ASSET_MANAGER.queueDownload("./sprites/Barrel.png");
ASSET_MANAGER.queueDownload("./sprites/Boulder.png");
ASSET_MANAGER.queueDownload("./sprites/Grass Edge.png");
ASSET_MANAGER.queueDownload("./platforms/Grass Middle.png");
ASSET_MANAGER.queueDownload("./sprites/Lantern Post.png");
ASSET_MANAGER.queueDownload("./sprites/Plant1.png");
ASSET_MANAGER.queueDownload("./sprites/Pot.png");
ASSET_MANAGER.queueDownload("./sprites/SPIKES.png");
ASSET_MANAGER.queueDownload("./sprites/Spring.png");
ASSET_MANAGER.queueDownload("./sprites/Coin1.png");
ASSET_MANAGER.queueDownload("./sprites/hp.png");
ASSET_MANAGER.queueDownload("./sprites/Flag.png");

ASSET_MANAGER.queueDownload("./platforms/space middle.png");



// sounds
ASSET_MANAGER.queueDownload("./sounds/bgm.mp3");
ASSET_MANAGER.queueDownload("./sounds/level1.mp3");
ASSET_MANAGER.queueDownload("./sounds/level2.mp3");
ASSET_MANAGER.queueDownload("./sounds/level3.mp3");
ASSET_MANAGER.queueDownload("./sounds/attack.wav");
ASSET_MANAGER.queueDownload("./sounds/jump.wav");
ASSET_MANAGER.queueDownload("./sounds/coin.wav");
ASSET_MANAGER.queueDownload("./sounds/levelComplete.wav");

// title
ASSET_MANAGER.queueDownload("./background/title.png");

//background
ASSET_MANAGER.queueDownload("./background/lantern w_o.png");
ASSET_MANAGER.queueDownload("./background/lantern w.png");
ASSET_MANAGER.queueDownload("./background/no_trees_w_o.png");
ASSET_MANAGER.queueDownload("./background/no_trees_w.png");
ASSET_MANAGER.queueDownload("./background/trees and gate.png");
ASSET_MANAGER.queueDownload("./background/trees w_o.png");
ASSET_MANAGER.queueDownload("./background/trees w.png");
ASSET_MANAGER.queueDownload("./background/Space1.png");




// objects
ASSET_MANAGER.queueDownload("./platforms/Platform Tile.png");
ASSET_MANAGER.queueDownload("./platforms/space tile.png");

ASSET_MANAGER.downloadAll(() => {
	ASSET_MANAGER.autoRepeat("./sounds/level1.mp3");
	
	
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	
	gameEngine.init(ctx);
	
	new SceneManager(gameEngine);

	gameEngine.start();
});