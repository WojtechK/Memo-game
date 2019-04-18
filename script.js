const cards = document.querySelectorAll(".memo-card");

let isFlipped = false;
let firstCard, secondCard;
let lockBoard = false;

function Rotate() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!isFlipped) {
        //first click
        isFlipped = true;
        firstCard = this;
    } else {
        //second click
        isFlipped = false;
        secondCard = this;
        //cards march
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);

        CheckMatching();
    }
}

function CheckMatching() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        //it's a match
        disableCards();
    } else {
        //not a match
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
             resetBoard();
        }, 1000);
    }
}

//when cards are matched
function disableCards() {
    firstCard.removeEventListener('click', Rotate);
    secondCard.removeEventListener('click', Rotate);

    resetBoard();
}

function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
}

//self-executed function right after it's definition
(function shuffle() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12)
        card.style.order = random;
    });
})
();


cards.forEach(card => card.addEventListener('click', Rotate))