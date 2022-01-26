const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./ninja.png")
//music
ASSET_MANAGER.queueDownload("./music/mainmenu.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	// sets background
	//var background = document.getElementById("gameWorld").style.backgroundImage="url('./land.png')";
	//document.getElementById("gameWorld").style.backgroundSize="1024px 768px";

	ASSET_MANAGER.autoRepeat("./music/mainmenu.mp3");
    //gameEngine.addEntity(new Ninja(gameEngine,420,0));
	gameEngine.init(ctx);

	new SceneManager(gameEngine);
	gameEngine.start();
});