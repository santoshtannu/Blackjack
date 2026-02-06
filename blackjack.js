
//let message = "";
//console.log(firstCard + " " + secondCard + " " + sum);
/*
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
//let min = Math.ceil(2);
//let max = Math.floor(11);
//sum = 21;
*/
/* Blackjack Game */

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el"); // id should be referred with # 
let cardsEl = document.querySelector(".cards-el"); // class should be referred with a .
let playerEl = document.querySelector("#player-el") // player element referred
let player = {
    name: "Per Harald",
    chips: 190
}

/* This function is to assign a random number between 2 and 11 */
function randomNumber() {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    let rand = Math.floor(Math.random() * 13) + 1;
    if (rand === 1) {
        return 11;
    } else if (rand > 10) {
        return 10;
    } else {
        return rand;
    }
}

/* startGame() function to start the game*/
function startGame() {
    isAlive = true;
    let firstCard = randomNumber();
    let secondCard = randomNumber();

    cards.push(firstCard);
    cards.push(secondCard);
    sum = cards[0] + cards[1];
    renderGame();
}

/* function renderGame() to render the cards played */
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!!";
        isAlive = false;
    }
    //console.log(message);
    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
}

/* Pull a new card from the deck to play on */
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newcard = randomNumber();
        cards.push(newcard);
        sum += newcard;
        renderGame();
    }
}