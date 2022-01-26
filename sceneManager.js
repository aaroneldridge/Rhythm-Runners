class SceneManager{
    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.title = true;
        //this.transition = false;
        this.level = null;

        this.ninja = new Ninja(this.game,420,0);
        this.ninja.velocity = {x:0, y:0};
        this.game.addEntity(this.ninja);
        this.loadlevel(levelOne,false);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
  
    loadlevel(level,title, transition) {
        this.title = title;
        //this.level = level;
        this.transition = transition;
        this.clearEntities();
        this.x = 0; 
        

        if(transition) {
            this.game.addEntity(new TransitionScreen(this.game,level,x,y,title));
        }

        if(level.music && !this.title){
           ASSET_MANAGER.pauseBackgroundMusic();
           ASSET_MANAGER.playAsset(level.music);
       }
        
    };

    
     
    
    updateAudio() {
        var mute = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").value;

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);

    };
    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        this.updateAudio();
        if (this.title && this.game.click) {
            if (this.game.click && this.game.click.y > 9 * PARAMS.BLOCKWIDTH && this.game.click.y < 9.5 * PARAMS.BLOCKWIDTH) {
                this.title = false;
                this.ninja = new Ninja(this.game, 420, 0);
                this.loadLevel(levelOne, 420, 0, true);
            }
            if (this.game.click && this.game.click.y > 10 * PARAMS.BLOCKWIDTH && this.game.click.y < 10.5 * PARAMS.BLOCKWIDTH) {
                this.title = false;
                this.ninja = new Ninja(this.game, 420, 0, true);
                this.loadLevel(levelOne, 420, 0, true);
            }
        }
    };
    draw(ctx) {


        if (this.title) {

            ctx.font = 5 * PARAMS.BLOCKWIDTH + 'px "Press Start 2P"';
            ctx.fillStyle = "White";
            ctx.fillText("SOLITARY SLAMMER", 
                         this.hero.BB.center.x - this.x - 8 * 5 * PARAMS.BLOCKWIDTH, 
                         this.hero.BB.top - this.y);
            ctx.font = 3 * PARAMS.BLOCKWIDTH + 'px "Press Start 2P"';
            ctx.fillStyle = this.game.mouse && 
                            this.game.mouse.x > this.hero.BB.center.x - this.x - 2.5 * 3 * PARAMS.BLOCKWIDTH && 
                            this.game.mouse.x < this.hero.BB.center.x - this.x + 2.5 * 3 * PARAMS.BLOCKWIDTH &&
                            this.game.mouse.y > this.hero.BB.bottom - this.y && 
                            this.game.mouse.y < this.hero.BB.bottom - this.y + 3 * PARAMS.BLOCKWIDTH ? "Black" : "White";
            ctx.fillText("START", 
                         this.hero.BB.center.x - this.x - 2.5 * 3 * PARAMS.BLOCKWIDTH, 
                         this.hero.BB.bottom - this.y + 3 * PARAMS.BLOCKWIDTH);

           /* var width = 176;
            var height = 88;
            ctx.drawImage(ASSET_MANAGER.getAsset("./black.jpg"), 2.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, width * PARAMS.SCALE, height * PARAMS.SCALE);
            ctx.fillStyle = this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 9.5 * PARAMS.BLOCKWIDTH ? "Grey" : "White";
            ctx.fillText("MARIO", 6.75 * PARAMS.BLOCKWIDTH, 9.5 * PARAMS.BLOCKWIDTH);
            ctx.fillStyle = this.game.mouse && this.game.mouse.y > 10 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 10.5 * PARAMS.BLOCKWIDTH ? "Grey" : "White";
            ctx.fillText("LUIGI", 6.75 * PARAMS.BLOCKWIDTH, 10.5 * PARAMS.BLOCKWIDTH);*/
        }


    

        

    }
};