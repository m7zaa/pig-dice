
var playerOneSubTotal = [];
var playerTwoSubTotal = [];



function Player (player, score) {
  this.player = player,
  this.score = score
}

Player.prototype.rollTotal = function() {

}






$(document).ready(function() {
  $("#twoPlayerStart").click(function(event) {
    event.preventDefault();
    $(".player1").show();
    var playerOne = new Player ("player one", 0);
    var playerTwo = new Player ("player two", 0);
    console.log(playerOne);
    console.log(playerTwo);
  });

  $("#playerOneRoll").click(function(event) {


    var rand =  1 + Math.floor(Math.random() * 6);


    if (rand === 1) {
        playerOneSubTotal = [];
        $(".player1").hide();
        $(".player2").show();
       }
       else {
         playerOneSubTotal.push(rand);

       }
     });
  $("#playerTwoRoll").click(function(event) {
    var rand =  1 + Math.floor(Math.random() * 6);


       if (rand === 1) {
           playerTwoSubTotal = [];
           $(".player1").show();
           $(".player2").hide();

          }
          else {
            playerTwoSubTotal.push(rand);
          }
       console.log(playerTwoSubTotal);
     })
});
