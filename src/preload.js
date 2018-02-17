var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBG = this.add.sprite(0, 0, "loading_bg")
        var loadingBar = this.add.sprite(57,165,"loading_bar");
        loadingBar.anchor.setTo(0,0);
        this.load.setPreloadSprite(loadingBar);

        this.game.load.audio("snd-break-anti", "/assets/sounds/break-anti.wav");
        this.game.load.audio("snd-break-bricks", "/assets/sounds/break-bricks.wav");
        this.game.load.audio("snd-die", "/assets/sounds/die.wav");
        this.game.load.audio("snd-level-end", "/assets/sounds/level-end.wav");
        this.game.load.audio("snd-move", "/assets/sounds/move.wav");
        this.game.load.audio("snd-push-anti", "/assets/sounds/push-anti.wav");
        this.game.load.audio("snd-push-block", "/assets/sounds/push-block.wav");
        this.game.load.audio("snd-push-block", "/assets/sounds/push-reflector.wav");
        this.game.load.audio("snd-reflect", "/assets/sounds/reflect.wav");
        this.game.load.audio("snd-shoot-anti", "/assets/sounds/shoot-anti.wav");
        this.game.load.audio("snd-shoot-tank", "/assets/sounds/shoot-tank.wav");
        this.game.load.audio("snd-sink", "/assets/sounds/sink.wav");
        this.game.load.audio("snd-turn-reflector", "/assets/sounds/turn-reflector.wav");
        this.game.load.audio("snd-turn-tank", "/assets/sounds/turn-tank.wav");
        this.game.load.audio("snd-wallbump-tank", "/assets/sounds/wallbump-tank.wav");
        this.game.load.audio("snd-wallbump-laser", "/assets/sounds/wallbump-laser.wav");

        this.game.load.binary("levels-regular", "/assets/LaserTank.lvl");
    }
}