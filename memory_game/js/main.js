//Test javascript
console.log("Up and running!");


// Declared variables
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

// Cards
var cardsInPlay = [];

// Initial Scoring
var counter = 100;
var score = '';

// Game Over Status
var gameOverStatus = false;

// declaring messageBoard
var messageBoard = document.getElementById("message-board");


// FUNCTIONS
/* Page loads, game first starts */
function gameStart() {
	//maybe add gameOverStatus
	//initial gameStatus
	messageBoard.innerText = "Game Start!\n" + "Current Score: " + counter + " points";
	createBoard();
	shuffleCards();
}

/* Code for every time game resets and starts over again */
function gameReset() {
	//maybe add gameOverStatus
	//initial gameStatus
	counter = 100;
	gameOverStatus = false;
	window.location.hash = "#game-board";
	messageBoard.innerText = "Game Start!\n" + "Current Score: " + counter + " points";
	shuffleCards();
}


/* Code for placing cards on game board (facedown) */
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

/* each time player clicks on card, flip card face up */
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

/* Check 2 selected cards for a match */
function checkForMatch(){

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!"); // display match found message
			messageBoard.innerText = "You found a match!\n" + "Current Score: " + counter + " points";
		}
		else {
			console.log("Sorry, try again.");	// display match not found
			countAttempts(); // updating score
			resetBoard(); // deselect cards and flip cards back down
			messageBoard.innerText = "Wrong card, try again.\n" + "Current Score: " + counter + " points";
			// move cards back to cards[] array
		}
		console.log(cardsInPlay);
	}

	// Once all cards have been flipped, trigger Game Over
	// NEED UPDATE SCORE FUNCTION
	else if (cardsInPlay.length === 4) {
	// test alert
	// alert("game over!");
		gameOverStatus = true;
		countAttempts();
		gameOver();

	}
}

function countAttempts() {

	if (!gameOverStatus) {
		counter = counter - 15;
	}
	else {
		countFinalScore();
	}	
	console.log(counter);
}

function countFinalScore() {
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
}

/* game is over, option to play again? */
function gameOver() {
	// if game over, create Reset button
	var resetButton = document.createElement('button');
	resetButton.innerHTML = "Play Again?";
	document.getElementById("message-board").appendChild(resetButton);
	resetButton.addEventListener("click", resetBoard);
}


// resets message board and cards
function resetBoard() {

	if (gameOverStatus) {
		gameReset();
	}

	//reset cards in play
	cardsInPlay = [];

	//remove cards in game-board
	var usedCards = document.getElementById('game-board');
	while (usedCards.hasChildNodes()) {
		usedCards.removeChild(usedCards.firstChild);
	}

	//fill board with cards again
	createBoard();
}

function shuffleCards() {
	for (let i = 0; i < cards.length; i++) {
		let swapIdx = Math.trunc(Math.random() * cards.length);
		let tmp = cards[i];
		cards[i] = cards[swapIdx];
		cards[swapIdx] = tmp;
	}
}


gameStart();
