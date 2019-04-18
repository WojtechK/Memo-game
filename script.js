const cards = document.querySelectorAll(".memo-card");

let isFlipped = false;
let firstCard, secondCard;

function Rotate() {
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
    }
}

cards.forEach(card => card.addEventListener('click', Rotate))
