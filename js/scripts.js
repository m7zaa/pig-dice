
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
    this.subtotalSum = this.subtotalSum + this.subtotal[i]
    // var sum = 0;
    // sum = sum + this.subtotal[i];
    // this.score += sum;
    // console.log(sum);
  }
}


$(document).ready(function() {
  $("#twoPlayerStart").click(function(event) {
    event.preventDefault();
    $(".player1").show();
    playerOne = new Player ("player one", 0);
    playerTwo = new Player ("player two", 0);
    // console.log(playerOne);
    // console.log(playerTwo);
  });

  $("#playerOneRoll").click(function(event) {
    var rand =  1 + Math.floor(Math.random() * 6);
    if (rand === 1) {
        $(".player1").hide();
        $(".player2").show();
       }
       else {
         playerOne.subtotal.push(rand);
         console.log(playerOne.subtotal + 'is the subtotal of player one');
       }
     });

  $("#playerOneHold").click(function(event) {
    playerOne.score = playerOne.rollTotal();
    console.log(playerOne.subtotalSum);
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
       // console.log(playerTwo);
     })

     $("#playerTwoHold").click(function(event) {


     });





});
