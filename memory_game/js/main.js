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

// Cards
var cardsInPlay = [];

// Initial Scoring
var counter = 100;
var score = '';
// Final Score setup
var currentScore = "Current Score: " + counter + " points";

// Game Over Status
var gameOverStatus = false;

// declaring messageBoard
var messageBoard = document.getElementById("message-board");

function gameStart() {
	//maybe add gameOverStatus
	//initial gameStatus
	messageBoard.innerText = "Game Start!\n" + currentScore;
	shuffleCards();

}

gameStart();

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
			messageBoard.innerText = "You found a match!\n" + "Current Score: " + counter + " points";
			// move cards to matched cards array
		}
		else {
			console.log("Sorry, try again.");	// display match not found
			resetBoard();
			console.log(counter);
			console.log(currentScore);
			messageBoard.innerText = "Wrong card, try again.\n" + "Current Score: " + counter + " points";
			// move cards back to cards[] array
		}
	}
	// Once all cards have been flipped, trigger Game Over
	else if (cardsInPlay.length === 4) {
	// test alert
	// alert("game over!");
		if (counter === 100) {
			score = "Perfect!";
		}
		else if (counter >= 85) {
			score = "Great!";
		}
		else if (counter >= 70) {
			score = "Not Bad";
		}
		else if (counter >= 50) {
			score = "Just Passed";
		}
		else {
			score = "Fail..";
		}
		// alert("Final Score \n" + score + "\n" + counter + " points");
		messageBoard.innerText = "Game Over\n" + score + "\nYour Final Score: " + counter + " points";
	playAgain();
	return; 
	}
}


function playAgain() {
	// if game over, create Reset button
	var resetButton = document.createElement('button');
	resetButton.innerHTML = "Play Again?";
	document.getElementById("message-board").appendChild(resetButton);
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
		counter = 100;
		gameOverStatus = false;
		window.location.hash = "#game-board";
		gameStart();
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
	counter = counter - 15;
	console.log(counter);
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