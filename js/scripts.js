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
      $("#p1-die-2").hide();
      $("#p1-die-3").hide();
      $("#p1-die-4").hide();
      $("#p1-die-5").hide();
      $("#p1-die-6").hide();
      playerOne.subtotal = [];
      playerOne.subtotalSum = 0;
      $("#playerOneSubtotal").text("");
    }
    else {
      $("#p1-die-1").hide();
      $("#p1-die-2").hide();
      $("#p1-die-3").hide();
      $("#p1-die-4").hide();
      $("#p1-die-5").hide();
      $("#p1-die-6").hide();
      playerOne.subtotal.push(rand);
      playerOne.rollSubtotal();
      $("#playerOneSubtotal").text(" " + playerOne.subtotalSum);
      if (rand === 2) {
        $("#p1-die-2").fadeIn();
      } else if (rand === 3){
        $("#p1-die-3").fadeIn();
      } else if (rand === 4) {
        $("#p1-die-4").fadeIn();
      } else if (rand === 5) {
        $("#p1-die-5").fadeIn();
      } else {
        $("#p1-die-6").fadeIn();
      }
    }
  });

  // Player One Hold Button
  $("#playerOneHold").click(function(event) {
    $(".player1").hide();
    $(".player2").show();
    playerOne.score = playerOne.rollTotal();
    playerOne.subtotal = [];
    playerOne.subtotalSum = 0;
    $("#p1-die-1").hide();
    $("#p1-die-2").hide();
    $("#p1-die-3").hide();
    $("#p1-die-4").hide();
    $("#p1-die-5").hide();
    $("#p1-die-6").hide();
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
      $("#p2-die-2").hide();
      $("#p2-die-3").hide();
      $("#p2-die-4").hide();
      $("#p2-die-5").hide();
      $("#p2-die-6").hide();
      playerTwo.subtotal = [];
      playerTwo.subtotalSum = 0;
      $("#playerTwoSubtotal").text("");
    }
    else {
      $("#p2-die-1").hide();
      $("#p2-die-2").hide();
      $("#p2-die-3").hide();
      $("#p2-die-4").hide();
      $("#p2-die-5").hide();
      $("#p2-die-6").hide();
      playerTwo.subtotal.push(rand);
      playerTwo.rollSubtotal();
      $("#playerTwoSubtotal").text(" " + playerTwo.subtotalSum);
      if (rand === 2) {
        $("#p2-die-2").fadeIn();
      } else if (rand === 3){
        $("#p2-die-3").fadeIn();
      } else if (rand === 4) {
        $("#p2-die-4").fadeIn();
      } else if (rand === 5) {
        $("#p2-die-5").fadeIn();
      } else {
        $("#p2-die-6").fadeIn();
      }
    }
  });

  // Player Two Hold Button
  $("#playerTwoHold").click(function(event) {
    $(".player2").hide();
    $(".player1").show();
    playerTwo.score = playerTwo.rollTotal();
    playerTwo.subtotal = [];
    playerTwo.subtotalSum = 0;
    $("#p2-die-1").hide();
    $("#p2-die-2").hide();
    $("#p2-die-3").hide();
    $("#p2-die-4").hide();
    $("#p2-die-5").hide();
    $("#p2-die-6").hide();
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

    $("#playerOneTotal").text("")
    $("#playerTwoTotal").text("")
  });
});
