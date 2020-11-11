// alert('Колян петух');
var CANVAS_HEIGHT = 800;
var CANVAS_WIDTH = 1200;

var PLAYER_BOTTOM = 100;
var FOOT_LENGTH = 30;
var HAND_LENGTH = 20;
var HEAD_SIZE = 30;

var coords1 = {
    height: 50,
    left: 100
};

var coords2 = {
    height: 35,
    left: 200
};
    
var GAME = {
    init: function() {
        var canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.setupField();
        this.setupPlayer1();
        this.setupPlayer2();
    },
    
    setupField: function() {
        this.ctx.fillStyle = "#ddd";
        this.ctx.fillRect(10, 10, CANVAS_HEIGHT, CANVAS_WIDTH);
    },
    
    setupPlayer1: function() {
        this.setupPlayer(coords1, 'kolyan');
    },

    setupPlayer2: function() {
        this.setupPlayer(coords2, 'azamat');
    },
    
    setupPlayer: function(coords, player_name) {
        this.ctx.beginPath(); 
        var top = PLAYER_BOTTOM - coords.height;

        // тело
        this.ctx.moveTo(coords.left, top);
        this.ctx.lineTo(coords.left, PLAYER_BOTTOM);

        // ноги
        this.ctx.moveTo(coords.left, PLAYER_BOTTOM);
        this.ctx.lineTo(coords.left-FOOT_LENGTH, PLAYER_BOTTOM+FOOT_LENGTH);
        this.ctx.moveTo(coords.left, PLAYER_BOTTOM);
        this.ctx.lineTo(coords.left+FOOT_LENGTH, PLAYER_BOTTOM+FOOT_LENGTH);

        // руки
        var ple40 = top+10;
        this.ctx.moveTo(coords.left, ple40);
        this.ctx.lineTo(coords.left-HAND_LENGTH, ple40+HAND_LENGTH);
        this.ctx.moveTo(coords.left, ple40);
        this.ctx.lineTo(coords.left+HAND_LENGTH, ple40+HAND_LENGTH);

        // голова
        var img = document.getElementById(player_name);
        var half_head_size = HEAD_SIZE / 2;
        this.ctx.drawImage(img, coords.left-half_head_size, top-HEAD_SIZE, HEAD_SIZE, HEAD_SIZE);

        this.ctx.stroke();
    },
    
}

window.onload = function() {
    g = GAME;
    g.init();
}
