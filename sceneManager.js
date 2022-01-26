class SceneManager{
    constructor(game){
        this.game = game;
        this.game.camera = this;

        this.x = 0;
    
        this.title = true;
        this.level = null;

        
     //   this.game.addEntity(this.ninja);

      //  this.loadLevel(levelOne, 2.5 * PARAMS.BLOCKWIDTH, 13 * PARAMS.BLOCKWIDTH, false, true);
        this.loadlevel();
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
  
    loadlevel() {
      //  this.level = level;
       // this.title = title;
       // this.transition = transition;
       // this.clearEntities();
      //  this.x=0;
      // if(!title){
      //     if(level.background) {
      //         this.game(addEventity(new Background(this.game, level.background)));
       //    }
        
     //  }
     //  this.ninja.removeFromWorld = false;
      document.getElementById("gameWorld").style.backgroundImage="url('./forest_back.png')";
      document.getElementById("gameWorld").style.backgroundSize="1024px 768px";
      this.ninja = new Ninja(this.game,420,100);
      this.ninja.velocity = {x:0, y:0};
      this.game.addEntity(this.ninja);
      

       /*if(level.music){
           ASSET_MANAGER.pauseBackgroundMusic();
           ASSET_MANAGER.playAsset(level.music);
       }*/
    
        
    }
    updateAudio() {
        var mute = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").value;
        
        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);

    };
    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        this.updateAudio();
    };
    draw(ctx){
        ctx.font = 'px "Press Start 2P"';
        ctx.fillStyle = "White";

        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * 25, 1 * 25);
    }; 
}