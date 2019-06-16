console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamods",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//"queen", "queen", "king", "king"],
var cardsInPlay = [];

var counter = 0;

var gameOverStatus = false;

shuffleCards();

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}



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
			resetBoard();
		}
	}
	// Once all cards have been flipped, trigger Game Over
	else if (cardsInPlay.length === 4) {
	// test alert
	// alert("game over!");
	playAgain();
	return; 
	}
}


function playAgain() {
	// if game over, create Reset button
	var resetButton = document.createElement('button');
	resetButton.innerHTML = "Play Again?";
	document.getElementById("game-board").appendChild(resetButton);
	resetButton.addEventListener("click", resetBoard);

	gameOverStatus = true;
	shuffleCards();
}


//RESET BUTTON
function resetBoard() {

	if (!gameOverStatus) {
		countAttempts();
	}
	else {
		console.log(counter);
		counter = 0;
		gameOverStatus = false;
	}
	//reset cards in play
	cardsInPlay = [];

	//remove cards in game-board
	var usedCards = document.getElementById('game-board');
	while (usedCards.hasChildNodes()) {
		usedCards.removeChild(usedCards.firstChild);
	}

	//add new cards to board
	createBoard();


	// location reset at game section
	//window.location.hash = "#!game-board";
	// test alert
	// alert("game is being reset!");
}

function shuffleCards() {
	for (let i = 0; i < cards.length; i++) {
		let swapIdx = Math.trunc(Math.random() * cards.length);
		let tmp = cards[i];
		cards[i] = cards[swapIdx];
		cards[swapIdx] = tmp;
	}
}

//CREATE FUNCTION TO STORE ALL STEPS RELATED TO (PSEUDOCODE)
// - SELECTING/FLIPPING OVER A CARD
// when user flips card
// add card to array of cards in play
// if user flipped two cards
// check for a match
function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src',cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	// remove eventListener for cards that have already been flipped
	this.removeEventListener('click',flipCard);
}

//Calling flipCard function

console.log(cardsInPlay);
console.log(cards);

function countAttempts() {
	counter++;
	console.log(counter)
}

createBoard();


//TRACK DISPLAY USER SCORE


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