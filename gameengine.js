// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];
        // Entities to be added at the end of each update
        this.entitiesToAdd = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.keys = {};
        this.mouse = { x: 0, y: 0 };
        
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.space = false;

        // THE KILL SWITCH
        this.running = false;

        // Options and the Details
        this.options = options || {
            prevent: {
                contextMenu: true,
                scrolling: true,
            },
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            if (this.running) {
                requestAnimFrame(gameLoop, this.ctx.canvas);
            }
        };
        gameLoop();
    };

    startInput() {
		var that = this;
		
		var getXandY = (e) => {
			var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
			var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;
			
			return { x: x, y: y, radius: 0 };
		}
		
		this.ctx.canvas.addEventListener("mousemove", (e) => {
			//console.log("mousemove", getXandY(e), e);
			this.mouse = getXandY(e);
		}, false);
		
		this.ctx.canvas.addEventListener("click", (e) => {
			console.log("Click", getXandY(e));
			this.click = getXandY(e);
		}, false);
		
		this.ctx.canvas.addEventListener("keydown", function (e) {
			console.log(e);
			switch (e.code) {
				case "ArrowLeft":
					that.left = true;
					break;
				case "ArrowRight":
					that.right = true;
					break;
				case "ArrowUp":
					that.up = true;
					break;
				case "ArrowDown":
					that.down = true;
					break;
				case "Space":
					that.space = true;
					break;
				case "KeyZ":
					that.z = true;
					break;
				case "KeyX":
					that.x = true;
					break;
			}
		}, false);
		
		this.ctx.canvas.addEventListener("keyup", function (e) {
			switch (e.code) {
				case "ArrowLeft":
					that.left = false;
					break;
				case "ArrowRight":
					that.right = false;
					break;
				case "ArrowUp":
					that.up = false;
					break;
				case "ArrowDown":
					that.down = false;
					break;
				case "Space":
					that.space = false;
					break;
				case "KeyZ":
					that.z = false;
					break;
				case "KeyX":
					that.x = false;
					break;
			}
		}, false);
    };

    addEntity(entity) {
        this.entitiesToAdd.push(entity);
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
        this.camera.draw(this.ctx);
    };

    update() {
        // Update Entities
        this.entities.forEach(entity => entity.update(this));

        // Remove dead things
        this.entities = this.entities.filter(entity => !entity.removeFromWorld);

        // Add new things
        this.entities = this.entities.concat(this.entitiesToAdd);
        this.entitiesToAdd = [];
        
        this.camera.update();
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
};

// KV Le was here :)