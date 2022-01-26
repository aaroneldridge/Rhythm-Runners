
const ASSET_MANAGER = new AssetManager();
//sprite
ASSET_MANAGER.queueDownload("./ninja.png");

//music
ASSET_MANAGER.queueDownload("./music/mainmenu.mp3");

//background images
ASSET_MANAGER.queueDownload("./white.jpg");
ASSET_MANAGER.queueDownload("./black.jpg");

ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	ASSET_MANAGER.autoRepeat("./music/mainmenu.mp3");
	gameEngine.init(ctx);

	new SceneManager(gameEngine);
	
	gameEngine.start();
});