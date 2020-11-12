// var CANVAS_HEIGHT = 800;
// var CANVAS_WIDTH = 1200;


    
// var GAME = {
//     init: function() {
//         this.setupPlayersChoice();
//         this.setupCanvas();
//         this.setupField();
//     },

//     setupPlayersChoice: function() {
//         var self = this;
//         self.$players = $('#players');
//         self.$players.find('.player').on('click', function(e) {
//             var player = $(e.target).attr('id');
//             if (self.player1 === undefined) {
//                 self.setupPlayer1(player);
//             } else if (self.player1 && self.player2 === undefined) {
//                 self.setupPlayer2(player);
//                 self.hidePlayersChoice();
//             }
//         });
//     },

//     hidePlayersChoice: function() {
//         this.$players.addClass('d-none');
//     },

//     setupCanvas: function() {
//         var canvas = $("#canvas")[0];
//         this.ctx = canvas.getContext("2d");
//     },
    
//     setupField: function() {
//         this.ctx.fillStyle = "#ddd";
//         this.ctx.fillRect(10, 10, CANVAS_HEIGHT, CANVAS_WIDTH);
//     },
    
//     setupPlayer1: function(player) {
//         $('#player1').text(player);
//         this.player1 = Player;
//         this.player1.init(this.ctx);
//         this.player1.create(coords1, player);
//     },

//     setupPlayer2: function(player) {
//         $('#player2').text(player);
//         this.player2 = Player;
//         this.player2.init(this.ctx);
//         this.player2.create(coords2, player);
//     },
    
// }

// window.onload = function() {
//     g = GAME;
//     g.init();
// }
console.log('hello!');