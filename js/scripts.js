
var playerOne;
var playerTwo;

// Player Constructor
function Player (player, score) {
  this.player = player,
  this.subtotal = [],
  this.subtotalSum = 0,
  this.score = score
}

// Player prototype
Player.prototype.rollTotal = function() {
  for (var i = 0; i < this.subtotal.length; i++) {
    this.subtotalSum = this.subtotal[i]
    this.score = this.score + this.subtotalSum
  }
  return this.score
}

// Player v Player Start Button
$(document).ready(function() {
  $("#twoPlayerStart").click(function(event) {
    event.preventDefault();
    $(".player1").show();
    playerOne = new Player ("player one", 0);
    playerTwo = new Player ("player two", 0);
  });

// Player One Roll Button
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

// Player One Hold Button
  $("#playerOneHold").click(function(event) {
    $(".player1").hide();
    $(".player2").show();
    playerOne.score = playerOne.rollTotal();
    console.log(playerOne.score);
    playerOne.subtotal = [];
    playerOne.subtotalSum = 0;
  });

// Player Two Roll Button
  $("#playerTwoRoll").click(function(event) {
    var rand =  1 + Math.floor(Math.random() * 6);
       if (rand === 1) {
           playerTwoSubTotal = [];
           $(".player1").show();
           $(".player2").hide();
           playerTwo.subtotal = [];
           playerTwo.subtotalSum = 0;
          }
          else {
            playerTwo.subtotal.push(rand);
          }
          console.log(playerTwo.subtotal)
     })

// Player Two Hold Button
     $("#playerTwoHold").click(function(event) {
       $(".player2").hide();
       $(".player1").show();
       playerTwo.score = playerTwo.rollTotal();
       console.log(playerTwo.score);
       playerTwo.subtotal = [];
       playerTwo.subtotalSum = 0;
     });
});
