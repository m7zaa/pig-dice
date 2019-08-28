
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
    $("#twoPlayerStart").hide();
    playerOne = new Player ("player one", 0);
    playerTwo = new Player ("player two", 0);
  });

  // Player One Roll Button
  $("#playerOneRoll").click(function(event) {
    $(".playerTwoEndTurn").hide();
    var rand =  1 + Math.floor(Math.random() * 6);
    if (rand === 1) {
      $(".player1").hide();
      $(".player2").show();
      $(".playerOneEndTurn").show();
      playerOne.subtotal = [];
      playerOne.subtotalSum = 0;
      $("#playerOneCurrentRoll").text("");

    }
    else {
      playerOne.subtotal.push(rand);
      $("#playerOneCurrentRoll").append("<li>" + rand + "</li>");
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
    $("#playerOneCurrentRoll").text("");
    $("#playerOneTotal").text(" " + playerOne.score);
    if (playerOne.score >= 100) {
      
    }
  });

  // Player Two Roll Button
  $("#playerTwoRoll").click(function(event) {
    $(".playerOneEndTurn").hide();
    var rand =  1 + Math.floor(Math.random() * 6);
    if (rand === 1) {
      playerTwoSubTotal = [];
      $(".player1").show();
      $(".player2").hide();
      $(".playerTwoEndTurn").show();
      playerTwo.subtotal = [];
      playerTwo.subtotalSum = 0;
      $("#playerTwoCurrentRoll").text("");

    }
    else {
      playerTwo.subtotal.push(rand);
      $("#playerTwoCurrentRoll").append("<li>" + rand + "</li>");

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
    $("#playerTwoCurrentRoll").text("");
    $("#playerTwoTotal").text(" " + playerTwo.score);
  });
});
