// Concentration Game: The object of the game is to collect as many matching pairs as possible.

// Start with a standard deck (grid) of playing cards.
// The player can chooses a card and turn it over.
// The player then selects another card and turns it over.
// If the two cards are a matching pair for example two sixes then they take the two cards and start their stack.
// If the cards are not a match they are turned back over and resume playing.
// Play continues in this fashion until all the cards are played or time runs out.
// A players turn is not over until they are unsuccessfully at matching a pair.

$(function playGame() {

  var matchCount = $("#match-list"); // Selects Matches HTML Area
  var counter = 0; // Set the counter to '0'
  var magicMike = $("#magic"); // Selects Magic button
  var newGame = $("#new-game"); // Selects New Game button
  var grid = $("#memory-grid"); // Create grid variable
  gridCards = []; // Create card array

  function checkCards() { // Function to check if cards are matching
    var match = (gridCards[0].data("card") === gridCards[1].data("card")) // Valid if data-card values of first and second card are the same
      if (match) {
        counter = counter + 1; // Increase the counter by 1 if there is a match
        matchCount.html("Matches: " + counter); // Display the counter increase
        alert("Congratulations, you got a match!");
        console.log("The cards are the same!");
        gridCards = []; // Reset the array so cards can be compared again
        if($('.check').length === ($("#memory-grid > li").length)) { // If all the cards have been matched (.check)
          alert("Congrats, you've revealed everything!");
          setTimeout(simpleClear, 2000); // Refresh the game
          counter = 0; // Refresh the counter
          matchCount.html("Matches: " + counter); // Set refreshed counter
          console.log("All the matches are matched")
        }
      }
      else {
        setTimeout(clearCards, 3000); // Clear unmatched cards
        alert("Sorry, keep making Mike dance.");
        console.log("The cards are different");
      }
  }

  function clearCards() { // Function to clear unmatched cards
    gridCards[0].removeClass("check"); // Remove class to clear [0]
    gridCards[1].removeClass("check"); // Remove class to clear [1]
    gridCards.length = 0; // Resets cards so player can continue
  }

  function simpleClear() { // Function to clear cards at end of game
    grid.children().removeClass("check"); // Removes .check so all cards reset
  }

  grid.on("click", "li.card", function() { // Add Click Listener for list items .card in #memory-grid
    var self = $(this); // Sets li.card variable
      if (gridCards.length == 2 || self.is('.check') || self.is('.correct')) return console.log("Don't flip more than two"); // Disables users from clicking multiple cards until cards have matched or been flipped over
      gridCards.push(self.addClass("check")); // Set class 'check' to see if card has been clicked and push to array
      console.log("The card has been clicked")
      if (gridCards.length === 2) checkCards(); // If two cards are flipped, run function to check if cards are matching
  });

  newGame.on("click", function() { // Add Click Listener New Game button
    var cardShuffle = $("#memory-grid"); // Selects list items in #memory-grid
    for (var i = cardShuffle.children().length; i >= 0; i--) { // For the amount of list items, iterate through
      cardShuffle.append(cardShuffle.children().eq((Math.random() * i | 0))); // Append the shuffled list items
    }
    console.log("The cards are shuffled");
      cardShuffle.children().removeClass("check"); // Removes .check so all cards reset
      gridCards = []; // Reset the array so cards can be compared again
      counter = 0; // Refresh the counter
      matchCount.html("Matches: " + counter); // Set refreshed counter
  });

  magicMike.on("click", function() { // Add Click Listener Magic Mike button
   var self = $("li.card"); // Sets li.card variable
   console.log("Show me the magic!")
   gridCards.push(self.addClass("check")); // Let's make all the cards show!
 });

console.log("The game is ready to be played");

});
