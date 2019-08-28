
var playerOne;
var playerTwo;

function Player (player, score) {
  this.player = player,
  this.subtotal = [],
  this.subtotalSum = 0,
  this.score = score
}
Player.prototype.rollTotal = function() {
  for (var i = 0; i < this.subtotal.length; i++) {
    this.subtotalSum = this.subtotal[i]
    this.score = this.score + this.subtotalSum
  }
  return this.score
}

$(document).ready(function() {
  $("#twoPlayerStart").click(function(event) {
    event.preventDefault();
    $(".player1").show();
    playerOne = new Player ("player one", 0);
    playerTwo = new Player ("player two", 0);
  });

  $("#playerOneRoll").click(function(event) {
    var rand =  1 + Math.floor(Math.random() * 6);
    if (rand === 1) {
        $(".player1").hide();
        $(".player2").show();
        playerOne.subtotal = [];
        playerOne.subtotalSum = 0;
       }
       else {
         playerOne.subtotal.push(rand);
       }
      console.log(playerOne.subtotal);
     });

  $("#playerOneHold").click(function(event) {
    $(".player1").hide();
    $(".player2").show();
    playerOne.score = playerOne.rollTotal();
    console.log(playerOne);
    playerOne.subtotal = [];
    playerOne.subtotalSum = 0;
  });

  $("#playerTwoRoll").click(function(event) {
    var rand =  1 + Math.floor(Math.random() * 6);
       if (rand === 1) {
           playerTwoSubTotal = [];
           $(".player1").show();
           $(".player2").hide();
          }
          else {
            playerTwo.subtotal.push(rand);
          }
     })

     $("#playerTwoHold").click(function(event) {


     });





});
