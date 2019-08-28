//Business logic ---------------------------------------------

// Player Constructor
function Player (player, score) {
  this.player = player,
  this.subtotal = [],
  this.subtotalSum = 0,
  this.score = score
}

// Player total prototype
Player.prototype.rollTotal = function() {
    for (var i = 0; i < this.subtotal.length; i++) {
    this.subtotalSum = this.subtotal[i]
    this.score = this.score + this.subtotalSum
  }
  return this.score
}

// Player subtotal prototype
Player.prototype.rollSubtotal = function() {
  this.subtotalSum = 0;
  for (var i = 0; i < this.subtotal.length; i++) {
    this.subtotalSum += this.subtotal[i];
  }
  return this.subtotalSum;
}

// UI logic -------------------------------------------------
$(document).ready(function() {

  // Player v Player Start Button
  $("#twoPlayerStart").click(function(event) {
    event.preventDefault();
    $(".col-md-6").show();
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
      $("#playerOneSubtotal").text("");
    }
    else {
      playerOne.subtotal.push(rand);
      $("#playerOneCurrentRoll").append("<li>" + rand + "</li>");
      playerOne.rollSubtotal();
      $("#playerOneSubtotal").text(playerOne.subtotalSum);
    }
  });

  // Player One Hold Button
  $("#playerOneHold").click(function(event) {
    $(".player1").hide();
    $(".player2").show();
    playerOne.score = playerOne.rollTotal();
    playerOne.subtotal = [];
    playerOne.subtotalSum = 0;
    $("#playerOneCurrentRoll").text("");
    $("#playerOneTotal").text(" " + playerOne.score);
    $("#playerOneSubtotal").text("");
    if (playerOne.score >= 100) {
      $(".ui").hide();
      $("#winner").text(playerOne.player + " ")
      $(".declareWinner").show();
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
      $("#playerTwoSubtotal").text("");
    }
    else {
      playerTwo.subtotal.push(rand);
      $("#playerTwoCurrentRoll").append("<li>" + rand + "</li>");
      playerTwo.rollSubtotal();
      $("#playerTwoSubtotal").text(playerTwo.subtotalSum);
    }
  })

  // Player Two Hold Button
  $("#playerTwoHold").click(function(event) {
    $(".player2").hide();
    $(".player1").show();
    playerTwo.score = playerTwo.rollTotal();
    playerTwo.subtotal = [];
    playerTwo.subtotalSum = 0;
    $("#playerTwoCurrentRoll").text("");
    $("#playerTwoTotal").text(" " + playerTwo.score);
    $("#playerTwoSubtotal").text("");
    if (playerTwo.score >= 100) {
      $(".ui").hide();
      $("#winner").text(playerTwo.player + " ")
      $(".declareWinner").show();
    }
  });

  // Play Again Button
  $("#playAgain").click(function(event) {
    $(".ui").show();
    $(".declareWinner").hide();
    $(".col-md-6").hide();
    $("#twoPlayerStart").show();
    $("#playerOneCurrentRoll").text("");
    $("#playerTwoCurrentRoll").text("");
    $("#playerOneTotal").text("")
    $("#playerTwoTotal").text("")
  });
});
