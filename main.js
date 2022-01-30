const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// spritesheets
ASSET_MANAGER.queueDownload("./sprites/ninja.png");

// sounds
ASSET_MANAGER.queueDownload("./sounds/bgm.mp3");
ASSET_MANAGER.queueDownload("./sounds/attack.wav");
ASSET_MANAGER.queueDownload("./sounds/jump.wav");

// title
ASSET_MANAGER.queueDownload("./background/title.png");
ASSET_MANAGER.queueDownload("./background/land.png");


// objects
ASSET_MANAGER.queueDownload("./platforms/ground.png");

ASSET_MANAGER.downloadAll(() => {
	ASSET_MANAGER.autoRepeat("./sounds/bgm.mp3");
	
	
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	
	gameEngine.init(ctx);
	
	new SceneManager(gameEngine);

	gameEngine.start();
});
