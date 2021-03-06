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
ASSET_MANAGER.queueDownload("./sprites/SpaceSpring.png");

ASSET_MANAGER.queueDownload("./platforms/space middle.png");
ASSET_MANAGER.queueDownload("./platforms/Wood Middle.png");



// sounds
ASSET_MANAGER.queueDownload("./sounds/bgm.mp3");
ASSET_MANAGER.queueDownload("./sounds/level1.mp3");
ASSET_MANAGER.queueDownload("./sounds/level2.mp3");
ASSET_MANAGER.queueDownload("./sounds/level3.mp3");
ASSET_MANAGER.queueDownload("./sounds/attack.wav");
ASSET_MANAGER.queueDownload("./sounds/level4.mp3");

ASSET_MANAGER.queueDownload("./sounds/jump.wav");
ASSET_MANAGER.queueDownload("./sounds/coin.wav");
ASSET_MANAGER.queueDownload("./sounds/levelComplete.wav");
ASSET_MANAGER.queueDownload("./sounds/8bitVictory.mp3");
ASSET_MANAGER.queueDownload("./sounds/oof.mp3");

// title
ASSET_MANAGER.queueDownload("./background/title.png");
ASSET_MANAGER.queueDownload("./background/all_portal.png");
ASSET_MANAGER.queueDownload("./background/portals.png");
ASSET_MANAGER.queueDownload("./background/transition.png");
ASSET_MANAGER.queueDownload("./background/tran.png");
ASSET_MANAGER.queueDownload("./background/transit.png");

//background
ASSET_MANAGER.queueDownload("./background/lantern w_o.png");
ASSET_MANAGER.queueDownload("./background/lantern w.png");
ASSET_MANAGER.queueDownload("./background/no_trees_w_o.png");
ASSET_MANAGER.queueDownload("./background/no_trees_w.png");
ASSET_MANAGER.queueDownload("./background/trees and gate.png");
ASSET_MANAGER.queueDownload("./background/trees w_o.png");
ASSET_MANAGER.queueDownload("./background/trees w.png");
ASSET_MANAGER.queueDownload("./background/Space1.png");
ASSET_MANAGER.queueDownload("./background/Space2.png");
ASSET_MANAGER.queueDownload("./background/Space3.png");
ASSET_MANAGER.queueDownload("./background/Space4.png");
ASSET_MANAGER.queueDownload("./background/Space5.png");
ASSET_MANAGER.queueDownload("./background/Space6.png");
ASSET_MANAGER.queueDownload("./background/Space7.png");
ASSET_MANAGER.queueDownload("./background/Space8.png");
ASSET_MANAGER.queueDownload("./background/Space9.png");



ASSET_MANAGER.queueDownload("./background/inside_castle.png");
ASSET_MANAGER.queueDownload("./background/inside_start.png");
ASSET_MANAGER.queueDownload("./background/inside_end.png");

ASSET_MANAGER.queueDownload("./background/inside_crop.png");
ASSET_MANAGER.queueDownload("./background/start_crop.png");
ASSET_MANAGER.queueDownload("./background/end_crop.png");
ASSET_MANAGER.queueDownload("./background/inside_cas.png");

ASSET_MANAGER.queueDownload("./background/space_temp.png");




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