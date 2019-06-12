console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"],
	cardsInPlay = [];


//CREATE FUNCTION TO GROUP TOGETHER LOGIC TO (PSEUDOCODE)
// - CHECK TO SEE IF TWO CARDS THAT USER FLIPPED, MATCH EACH OTHER
// provide feedback to user:
// - advise if two cards match
// - or try again
function checkForMatch(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!"); // display match found message
			// move cards to matched cards array
		}
		else {
			console.log("Sorry, try again.");	// display match not found
			// move cards back to cards[] array
		}
	}
	return; 
}


//CREATE FUNCTION TO STORE ALL STEPS RELATED TO (PSEUDOCODE)
// - SELECTING/FLIPPING OVER A CARD
// when user flips card
// add card to array of cards in play
// if user flipped two cards
// check for a match
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

//Calling flipCard function
flipCard(0);
flipCard(2);

console.log(cardsInPlay);

//CHECK FOR A MATCH PSEUDO CODE
// after card is selected
// check if cardsInPlay.length is 2
// if length is 2, check for a match
// if match display message
// if not a match game continues


//ALERT MESSAGE PSEUDO CODE
// notify winning/losing message
// cards selected do not match
// selected cards match
// alert user with winning message