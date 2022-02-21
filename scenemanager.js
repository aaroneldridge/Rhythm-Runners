class SceneManager {
	constructor(game) {
		this.game = game;
		this.game.camera = this;
		this.x = 0;
		
		this.title = true;
		this.transition = false;
		this.death = false;
		this.level = null;
		this.flag = false;
		this.end = false;
		this.titleBackground = ASSET_MANAGER.getAsset("./background/title.png");
		this.ninja = new Ninja(this.game, 100, 100);
		this.hp = ASSET_MANAGER.getAsset("./sprites/hp.png");
		this.loadLevel(levelOne, false, this.title);
	};
	
	clearEntities() {
		this.game.entities.forEach(function (entity) {
			entity.removeFromWorld = true;
		});
	};
	
	updateAudio() {
		var mute = document.getElementById("mute").checked;
		var volume = document.getElementById("volume").value;
		
		ASSET_MANAGER.muteAudio(mute);
		ASSET_MANAGER.adjustVolume(volume);
	};
	
	loadLevel(level, transition, title) {
		this.title = title;
		this.transition = transition;
		this.level = level;
		this.clearEntities();
		
		if (!this.transition && !this.title) {		
			if (level.ground) {
				for (var i = 0; i < level.ground.length; i++) {
					let grounds = level.ground[i];
					// this.game.addEntity(new Ground(this.game, grounds.x, grounds.y));
				}
			}

			//17000
			// ninja spawns at beginning of level
			this.ninja = new Ninja(this.game, 0, 500);
			
			// ninja spawns near front of flag
			//this.ninja = new Ninja(this.game, 22000, 500);
			
			var ninja = false;
			this.game.entities.forEach(function(entity) {
				if (that.ninja === entity)
				 ninja = true;
			});
			if (!ninja) this.game.addEntity(this.ninja);



			let gap = 56;

			//Adding Obstacles, Enemies, and Platforms
			this.game.addEntity(new Platform_Tile(this.game,700+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,700+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,700+(gap*3),500));
			this.game.addEntity(new Spike(this.game,1100-400,690));
			this.game.addEntity(new Spike(this.game,1050-400,690));

			this.game.addEntity(new Platform_Tile(this.game,900+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,900+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,900+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,1500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,1500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,1500+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,1700+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,1700+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,1700+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,1900+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,1900+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,1900+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,2200+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,2200+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,2200+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,2500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,2500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,2500+(gap*3),500));

			this.game.addEntity(new Spike(this.game,3200-400,695));
			this.game.addEntity(new Spike(this.game,3250-400,695));

			this.game.addEntity(new Platform_Tile(this.game,2900+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,2900+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,2900+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,3100+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,3100+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,3100+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,3400+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,3400+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,3400+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,3800+gap,600));
			this.game.addEntity(new Platform_Tile(this.game,3800+(gap*2),600));
			this.game.addEntity(new Platform_Tile(this.game,3800+(gap*3),600));
			this.game.addEntity(new Spike(this.game,4270-400,540));
			this.game.addEntity(new Spike(this.game,4300-400,540));
			this.game.addEntity(new Spike(this.game,4365-400,540));

			this.game.addEntity(new Platform_Tile(this.game,4200+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,4200+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,4200+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,4400+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,4400+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,4400+(gap*3),300));

			this.game.addEntity(new Spike(this.game,5400-400,695));
			this.game.addEntity(new Spike(this.game,5450-400,695));
			this.game.addEntity(new Spike(this.game,5470-400,695)); 

			this.game.addEntity(new Spike(this.game,5700-400,695));
			this.game.addEntity(new Spike(this.game,5750-400,695));
			this.game.addEntity(new Spike(this.game,5770-400,695)); 

			this.game.addEntity(new Platform_Tile(this.game,5700+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,5700+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,5700+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,5900+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,5900+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,5900+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,6100+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,6100+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,6100+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,6400+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,6400+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,6400+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,6600+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,6600+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,6600+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,6900+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,6900+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,6900+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,7200+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,7200+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,7200+(gap*3),500));

			this.game.addEntity(new Spike(this.game,7870-400,695));
			this.game.addEntity(new Spike(this.game,7920-400,695));
			this.game.addEntity(new Spike(this.game,7940-400,695)); 

			this.game.addEntity(new Platform_Tile(this.game,7600+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,7600+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,7600+(gap*3),500));

			this.game.addEntity(new Spike(this.game,8270-400,695));
			this.game.addEntity(new Spike(this.game,8320-400,695));
			this.game.addEntity(new Spike(this.game,8340-400,695)); 

			this.game.addEntity(new Platform_Tile(this.game,8000+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,8000+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,8000+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,8300+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,8300+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,8300+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,8600+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,8600+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,8600+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,8900+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,8900+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,8900+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,9200+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,9200+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,9200+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,9500+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,9500+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,9500+(gap*3),500));

			this.game.addEntity(new Spike(this.game,9400,695));
			this.game.addEntity(new Spike(this.game,9400+gap,695));
			this.game.addEntity(new Spike(this.game,9400+(gap*2),695));


			this.game.addEntity(new Platform_Tile(this.game,9800+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,9800+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,9800+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,10100+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,10100+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,10100+(gap*3),100));

			this.game.addEntity(new Platform_Tile(this.game,10400+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,10400+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,10400+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,10600+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,10600+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,10600+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,11000+gap,600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*2),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*3),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*4),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*5),600));
			this.game.addEntity(new Platform_Tile(this.game,11000+(gap*6),600));
			this.game.addEntity(new Spike(this.game,11470-400,540));
			this.game.addEntity(new Spike(this.game,11520-400,540));
			this.game.addEntity(new Spike(this.game,11570-400,540));
			this.game.addEntity(new Spike(this.game,11610-400,540));
			this.game.addEntity(new Spike(this.game,11660-400,540));
			this.game.addEntity(new Spike(this.game,11720-400,540));

			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*5),200));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*6),300));
			// stairs leading up to slide
			this.game.addEntity(new Platform_Tile(this.game,11500+gap,700));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*2),650));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*3),600));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*4),550));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*5),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*6),500));
			// bottom part of slide
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*7),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*8),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*9),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*10),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*11),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*12),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*13),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*14),500));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*15),500));
			//top part of slide
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*7),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*8),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*9),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*10),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*11),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*12),400));
			this.game.addEntity(new Platform_Tile(this.game,11500+(gap*13),400));
			//next long slide
			this.game.addEntity(new Platform_Tile(this.game,12500+gap,450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*2),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*3),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*4),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*5),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*6),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*7),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*8),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*9),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*10),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*11),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*12),450));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*3),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*4),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*5),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*6),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*7),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*8),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*9),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*10),350));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*2),200));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*1),150));
			this.game.addEntity(new Platform_Tile(this.game,12500+(gap*1),150));
			this.game.addEntity(new Platform_Tile(this.game,12500,100));

			this.game.addEntity(new Platform_Tile(this.game,13400+gap,350));
			this.game.addEntity(new Platform_Tile(this.game,13400+(gap*2),350));
			this.game.addEntity(new Platform_Tile(this.game,13400+(gap*3),350));

			this.game.addEntity(new Platform_Tile(this.game,13700+gap,500));
			this.game.addEntity(new Platform_Tile(this.game,13700+(gap*2),500));
			this.game.addEntity(new Platform_Tile(this.game,13700+(gap*3),500));

			this.game.addEntity(new Platform_Tile(this.game,14000+gap,300));
			this.game.addEntity(new Platform_Tile(this.game,14000+(gap*2),300));
			this.game.addEntity(new Platform_Tile(this.game,14000+(gap*3),300));

			this.game.addEntity(new Platform_Tile(this.game,14300+gap,100));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*2),100));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*3),100));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*4),150));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*5),200));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*6),250));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*7),300));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*8),350));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*9),400));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*10),450));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*11),500));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*12),550));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*13),600));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*14),650));
			this.game.addEntity(new Platform_Tile(this.game,14300+(gap*15),700));

			this.game.addEntity(new Platform_Tile(this.game,15770+gap,450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*2),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*3),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*4),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*5),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*6),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*7),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*8),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*9),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*10),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*11),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*12),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*13),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*14),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*15),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*16),450));
			this.game.addEntity(new Platform_Tile(this.game,15770+(gap*17),450))

			this.game.addEntity(new Spring(this.game,15300+150,690));
			this.game.addEntity(new Spike(this.game,15700+gap+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*2)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*3)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*4)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*5)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*6)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*7)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*8)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*9)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*10)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*11)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*12)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*13)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*14)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*15)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*16)+150-400,690));
			this.game.addEntity(new Spike(this.game,15700+(gap*17)+150-400,690));

			this.game.addEntity(new Platform_Tile(this.game,17600,690));
			this.game.addEntity(new Platform_Tile(this.game,17600+gap,690-gap));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*2),690-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*3),690-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*5),360));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*6),360-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*7),360-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*8),360-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*12),500));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*13),500-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*14),500-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*15),500-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*19),260));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*20),260-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*21),260-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,17600+(gap*22),260-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,18700+(gap*6),400-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,18700+(gap*7),400-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,18700+(gap*8),400-(gap*0)));

			this.game.addEntity(new Platform_Tile(this.game,18700+(gap*13),400-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,18700+(gap*14),400-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,18700+(gap*15),400-(gap*0)));

			this.game.addEntity(new Platform_Tile(this.game,20400-gap,690));
			this.game.addEntity(new Platform_Tile(this.game,20400,690-gap));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*1),690-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*2),690-(gap*2))); 

			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*4),360)); 
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*5),360-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*6),360-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*7),360-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*11),500)); 
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*12),500-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*13),500-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*14),500-(gap*2))); 

			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*18),260)); 
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*19),260-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*20),260-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,20400+(gap*21),260-(gap*2))); 
			
			this.game.addEntity(new Platform_Tile(this.game,21500+(gap*4),400-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,21500+(gap*5),400-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,21500+(gap*6),400-(gap*0)));
			
			this.game.addEntity(new Platform_Tile(this.game,22150-(gap*2),200-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,22150-(gap*1),200-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*0),200-(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*1),200+(gap*1)));
			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*2),200+(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*3),200+(gap*3)));

			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*9),450+(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*10),450+(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,22150+(gap*11),450+(gap*0)));

			this.game.addEntity(new Platform_Tile(this.game,23200,690));
			this.game.addEntity(new Platform_Tile(this.game,23200+gap,690-gap));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*2),690-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*3),690-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*5),360));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*6),360-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*7),360-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*8),360-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*12),500));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*13),500-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*14),500-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*15),500-(gap*2)));

			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*19),260));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*20),260-(gap)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*21),260-(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*22),260-(gap*2)));		
			
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*25),260));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*26),260));

			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*30),460));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*31),460));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*32),460));

			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*37),360));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*38),360));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*39),360));

			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*44),460));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*45),460));
			this.game.addEntity(new Platform_Tile(this.game,23200+(gap*46),460));

			// deep tone of music


			//this.game.addEntity(new Platform_Tile(this.game,25584+(gap*1),360));
			//this.game.addEntity(new Platform_Tile(this.game,25584+(gap*2),360+(gap)));
			//this.game.addEntity(new Platform_Tile(this.game,25584+(gap*3),360+(gap*2)));
			//this.game.addEntity(new Platform_Tile(this.game,25584+(gap*4),360+(gap*2)));
			
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*9),360));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*10),360));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*11),360));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*12),360));
			
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*17),360));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*18),360+(gap)));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*19),360+(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*20),360+(gap*3))); 
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*21),360+(gap*3))); 

			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*25),360));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*26),360+(gap)));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*27),360+(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,25584+(gap*28),360+(gap*2))); 

			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*4),360+(gap*2)));
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*5),360+(gap*2))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*6),360+(gap*2))); 

			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*10),325));
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*11),325)); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*12),325)); 

			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*14),500));
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*15),500)); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*16),500)); 

			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*20),300));
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*21),300)); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*22),300)); 

			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*26),100+(gap*0)));
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*27),100+(gap*1))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*28),100+(gap*2))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*29),100+(gap*3))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*30),100+(gap*4))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*31),100+(gap*5))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*32),100+(gap*6))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*33),100+(gap*7))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*34),100+(gap*8))); 
			this.game.addEntity(new Platform_Tile(this.game,27152+(gap*35),100+(gap*9))); 




			this.game.addEntity(new Coin(this.game, 500, 670));
			this.game.addEntity(new Coin(this.game, 950, 430));
			this.game.addEntity(new Coin(this.game, 1200, 670));
			this.game.addEntity(new Coin(this.game, 1600, 400));
			this.game.addEntity(new Coin(this.game, 1900, 50));
			this.game.addEntity(new Coin(this.game, 2500, 200));
			this.game.addEntity(new Coin(this.game, 3000, 300));
			this.game.addEntity(new Coin(this.game, 3500 , 400));
			this.game.addEntity(new Coin(this.game, 3800+(gap*1), 670));
			this.game.addEntity(new Coin(this.game, 3800+(gap*2), 670));
			this.game.addEntity(new Coin(this.game, 3800+(gap*3), 670));
			this.game.addEntity(new Coin(this.game, 3800+(gap*4), 670));
			this.game.addEntity(new Coin(this.game, 5200, 670));
			this.game.addEntity(new Coin(this.game, 6000, 200));
			this.game.addEntity(new Coin(this.game, 6500, 200));
			this.game.addEntity(new Coin(this.game, 7000, 200));
			this.game.addEntity(new Coin(this.game, 7500, 550));
			this.game.addEntity(new Coin(this.game, 7900, 550));
			this.game.addEntity(new Coin(this.game, 9000, 400));
			this.game.addEntity(new Coin(this.game, 10000, 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*1), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*2), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*3), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*4), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*5), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*6), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*7), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*8), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*9), 200));
			this.game.addEntity(new Coin(this.game, 16000+(gap*10), 200));
			this.game.addEntity(new Coin(this.game, 19000, 300));
			this.game.addEntity(new Coin(this.game, 19050, 400));

			this.game.addEntity(new Coin(this.game,21150,300));
			this.game.addEntity(new Coin(this.game,21800,300));
			this.game.addEntity(new Coin(this.game,22750,350));
			this.game.addEntity(new Coin(this.game,22750,350));
			this.game.addEntity(new Coin(this.game,23600,150));
			this.game.addEntity(new Coin(this.game,24000,300));
			this.game.addEntity(new Coin(this.game,24600,200));
			this.game.addEntity(new Coin(this.game,26200,275));
			this.game.addEntity(new Coin(this.game,26750,400));







			this.game.addEntity(new Spike(this.game,22750,690));
			this.game.addEntity(new Spike(this.game,22750+gap,690));
			this.game.addEntity(new Spike(this.game,22500+(gap*2),690));



			this.game.addEntity(new Coin(this.game, 30200, 670));
			this.game.addEntity(new Coin(this.game, 30200, 570));
			this.game.addEntity(new Coin(this.game, 30200, 470));
			this.game.addEntity(new Coin(this.game, 30200, 370));

			this.game.addEntity(new Flag(this.game, 30550, 670));
			
			
			


			
			//Adding grass flooring
			for(var i = 0; i < 40; i++){
				this.game.addEntity(new Grass_Middle(this.game,-400+(i*64),720));
			}

			for(var i = 0; i < 50; i++){
				this.game.addEntity(new Grass_Middle(this.game,2700+(i*64),720));
			}

			for(var i = 0; i < 66; i++){
				this.game.addEntity(new Grass_Middle(this.game,7400+(i*64),720));
			}

			for(var i = 0; i < 90; i++){
				this.game.addEntity(new Grass_Middle(this.game,15000+(i*64),720));
			}

			for(var i = 0; i < 40; i++){
				this.game.addEntity(new Grass_Middle(this.game,22150+(i*64),720));
			}

			for(var i = 0; i < 20; i++){
				this.game.addEntity(new Grass_Middle(this.game,26000+(i*64),720));
			}

			for(var i = 0; i < 27; i++){
				this.game.addEntity(new Grass_Middle(this.game,29000+(i*64),720));
			

			}
			//Adding Random Backgrounds
			for(let i = 0; i < 100; i++){
				this.addBackground(i);
			}



			ASSET_MANAGER.pauseBackgroundMusic();
			ASSET_MANAGER.playAsset(level.music);
		}
	};
	
	update() {
		//PARAMS.DEBUG = document.getElementById("debug").checked;
		
		if (this.title && this.game.click) {
			if (this.game.click.x > 415 && this.game.click.x < 565 && this.game.click.y > 660 && this.game.click.y < 710) {
				this.title = false;
				this.transition = true;
				//this.ninja = new Ninja(this.game, 100, 100);
				this.loadLevel(levelOne, true, false);
			}
		}
		
		if (this.transition && this.game.click) {
			if (this.game.click.x > 690 && this.game.click.x < 990 && this.game.click.y > 660 && this.game.click.y < 710) {
				this.transition = false;
				this.title = false;
				this.death = false;
				this.ninja = new Ninja(this.game, 100, 100);
				this.loadLevel(levelOne, false, false);
			}
		}
		
		if (this.death) {
			if (this.game.click.x > 400 && this.game.click.x < 625 && this.game.click.y > 560 && this.game.click.y < 610) {
				this.transition = true;
				this.death = false;
				
				ASSET_MANAGER.pauseBackgroundMusic();
				
				this.loadLevel(levelOne, true, false);
			}
		}
		
		if (this.flag && this.end) {
			if (this.game.click.x > 400 && this.game.click.x < 625 && this.game.click.y > 560 && this.game.click.y < 610) {
				this.transition = true;
				this.death = false;
				
				ASSET_MANAGER.pauseBackgroundMusic();
				
				this.loadLevel(levelOne, true, false);
			}
		}
		
		this.updateAudio();
		
		let midpoint = PARAMS.CANVAS_WIDTH / 4 - PARAMS.BLOCKWIDTH / 4;
		this.x = this.ninja.x - midpoint;
	};
	
	draw(ctx) {
		ctx.fillStyle = "White";
		ctx.fillRect(50, 80, 200, 20);
		if (this.ninja.hits === 0) {
			ctx.drawImage(this.hp, 9, 399, 278, 51, 50, 80, 200, 20);	
		}
		
		if (this.ninja.hits === 1) {
			ctx.drawImage(this.hp, 9, 269, 278, 51, 50, 80, 200, 20);
		}
		
		if (this.ninja.hits === 2) {
			ctx.drawImage(this.hp, 9, 139, 278, 51, 50, 80, 200, 20);
		}
		
		if (this.ninja.hits === 3) {
			this.death = true;
			this.ninja.state = 2;

			ASSET_MANAGER.pauseBackgroundMusic();
			this.ninja.velocity.x = 0;
			this.ninja.canJump=false;
		}
		
		if (this.ninja.flagTouch === true) {
			this.flag = true;
			this.end = true;
		}
		
		ctx.font = 'italic small-caps bold 48px cursive';
		
		if (this.title && !this.transition) {
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Black";
			ctx.fillText("Rhythm Runners", 300, 300);
			
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 415 && this.game.mouse.x < 565 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("PLAY", 425, 700);
		}
		
		if (this.transition && !this.title) {
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.fillStyle = "Black";
			ctx.fillText("Z: Slide", 250, 200);
			ctx.fillText("X: Attack", 250, 250);
			
			//ctx.fillRect(690, 660, 300, 50);
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 690 && this.game.mouse.x < 990 && this.game.mouse.y > 660 && this.game.mouse.y < 710 ? "White" : "Black";
			ctx.fillText("CONTINUE", 700, 700);
		}
		
		if (this.death && !this.transition) {
			//ctx.drawImage(this.black, 0, 0, 620, 349, 0, 0, 1024, 768);
			ctx.drawImage(this.hp, 9, 9, 278, 51, 50, 80, 200, 20);
			ctx.fillStyle = "Red";
			ctx.fillText("You have died!", 350, 400);
			
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 400 && this.game.mouse.x < 625 && this.game.mouse.y > 560 && this.game.mouse.y < 610 ? "White" : "Red";
			ctx.fillText("Restart?", 400, 600);
		}
		
		if (this.flag && !this.transition) {
			
			
			ctx.drawImage(this.titleBackground, 0, 0, 620, 349, 0, 0, 1024, 768);
			
			ASSET_MANAGER.pauseBackgroundMusic();
			
			setTimeout(function(){
				ASSET_MANAGER.playAsset("./sounds/levelComplete.wav");
			}, 100);
			
			// To show completion
			ctx.fillStyle = "Black";
			ctx.fillText("Level One completed!", 300, 300);
			
			// To go back to the beginning
			ctx.fillStyle = this.game.mouse && this.game.mouse.x > 400 && this.game.mouse.x < 625 && this.game.mouse.y > 560 && this.game.mouse.y < 610 ? "White" : "Black";
			ctx.fillText("Restart?", 400, 600);
		}
	};

	addBackground(i) {
		let rand = Math.floor(Math.random() * 6);
		console.log(rand + " i:" + i);
		switch(rand) { 
			case 1:
				this.game.addEntity(new lantern_w_o(this.game, 0+(1700*i), 480));
			case 2:
				this.game.addEntity(new lantern_w(this.game, 0+(1700*i), 450));
			case 3:
				this.game.addEntity(new no_trees_w_o(this.game, 0+(1700*i), 450));
			case 4:
				this.game.addEntity(new no_trees_w(this.game, 0+(1700*i), 450));
			case 5:
				this.game.addEntity(new trees_and_gate(this.game, 0+(1700*i), 450));
			case 6:
				this.game.addEntity(new trees_w_o(this.game, 0+(1700*i), 450));
			case 0:
				this.game.addEntity(new trees_w(this.game, 0+(1700*i), 450));
		};
	};
};
