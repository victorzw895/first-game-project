console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"],
	cardsInPlay = [],
	cardOne = cards[0],
	cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log(cardsInPlay);

//CHECK FOR A MATCH PSEUDO CODE
// after card is selected
// check if cardsInPlay.length is 2
// if length is 2, check for a match
// if match display message
// if not a match game continues
function selectCard() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!"); // display match found message
			// move cards to matched cards array
		}
		else {
			alert("Sorry, try again.");	// display match not found
			// move cards back to cards[] array
		}
	}
	else {
		// nothing happens
	}
}

selectCard();

//ALERT MESSAGE PSEUDO CODE
// notify winning/losing message
// cards selected do not match
// selected cards match
// alert user with winning message