var PLAYER_BOTTOM = 100;
var FOOT_LENGTH = 30;
var HAND_LENGTH = 20;
var HEAD_SIZE = 30;

var PLAYER_HEIGHTS = {
    haramarazmat: 35,
    mozgovoi: 50
}

var coords1 = {
    left: 100
};

var coords2 = {
    left: 200
};

var Player = {
    init: function(ctx) {
        this.ctx = ctx;
    },

    create: function(coords, player) {
        this.player = player;
        this.ctx.beginPath();
        var top = PLAYER_BOTTOM - PLAYER_HEIGHTS[this.player];

        // тело
        this.ctx.moveTo(coords.left, top);
        this.ctx.lineTo(coords.left, PLAYER_BOTTOM);

        // ноги
        this.ctx.moveTo(coords.left, PLAYER_BOTTOM);
        this.ctx.lineTo(coords.left-FOOT_LENGTH, PLAYER_BOTTOM+FOOT_LENGTH);
        this.ctx.moveTo(coords.left, PLAYER_BOTTOM);
        this.ctx.lineTo(coords.left+FOOT_LENGTH, PLAYER_BOTTOM+FOOT_LENGTH);

        // руки
        var ple40 = top+10; // плечо)))
        this.ctx.moveTo(coords.left, ple40);
        this.ctx.lineTo(coords.left-HAND_LENGTH, ple40+HAND_LENGTH);
        this.ctx.moveTo(coords.left, ple40);
        this.ctx.lineTo(coords.left+HAND_LENGTH, ple40+HAND_LENGTH);

        // голова
        var img = document.getElementById(player);
        var half_head_size = HEAD_SIZE / 2;
        this.ctx.drawImage(img, coords.left-half_head_size, top-HEAD_SIZE, HEAD_SIZE, HEAD_SIZE);

        this.ctx.stroke();
    },

    handKick: function() {
        // todo: короч остановился на том, что хз как нарисовать удар
        //  я думал, что можно как-то изменить координаты руки
        //  но хуй там плавал, походу для каждого движения нужно будет перерисовывать канву ебучую
    },
}