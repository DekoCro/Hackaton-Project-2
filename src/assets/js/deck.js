
/*
 * Generates a random integer from min to max.
 */
function randint(min, max) {
  return Math.round(min + Math.random() * (max - min));
}
let total = 0;
let newScore = 0;

let dealerSc = 0;

/*
 * The deck of cards to deal from.
 */
class Deck {
  constructor() {
    this.cards = [
      new Card('ace', 'clubs'),
      new Card('2', 'clubs'),
      new Card('3', 'clubs'),
      new Card('4', 'clubs'),
      new Card('5', 'clubs'),
      new Card('6', 'clubs'),
      new Card('7', 'clubs'),
      new Card('8', 'clubs'),
      new Card('9', 'clubs'),
      new Card('10', 'clubs'),
      new Card('jack', 'clubs'),
      new Card('queen', 'clubs'),
      new Card('king', 'clubs'),
      new Card('ace', 'hearts'),
      new Card('2', 'hearts'),
      new Card('3', 'hearts'),
      new Card('4', 'hearts'),
      new Card('5', 'hearts'),
      new Card('6', 'hearts'),
      new Card('7', 'hearts'),
      new Card('8', 'hearts'),
      new Card('9', 'hearts'),
      new Card('10', 'hearts'),
      new Card('jack', 'hearts'),
      new Card('queen', 'hearts'),
      new Card('king', 'hearts'),
      new Card('ace', 'spades'),
      new Card('2', 'spades'),
      new Card('3', 'spades'),
      new Card('4', 'spades'),
      new Card('5', 'spades'),
      new Card('6', 'spades'),
      new Card('7', 'spades'),
      new Card('8', 'spades'),
      new Card('9', 'spades'),
      new Card('10', 'spades'),
      new Card('jack', 'spades'),
      new Card('queen', 'spades'),
      new Card('king', 'spades'),
      new Card('ace', 'diamonds'),
      new Card('2', 'diamonds'),
      new Card('3', 'diamonds'),
      new Card('4', 'diamonds'),
      new Card('5', 'diamonds'),
      new Card('6', 'diamonds'),
      new Card('7', 'diamonds'),
      new Card('8', 'diamonds'),
      new Card('9', 'diamonds'),
      new Card('10', 'diamonds'),
      new Card('jack', 'diamonds'),
      new Card('queen', 'diamonds'),
      new Card('king', 'diamonds'),
    ]
  }

  /*
   * Fisher–Yates shuffle of the cards in the deck.
   */
  shuffle() {
    for(let i = 0; i < this.cards.length - 1; i++) {
      let j = randint(i, this.cards.length - 1);
      let swap = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = swap;
    }
  }

  render(player) {
    this.element = document.querySelector(`#${player}-hand .cards`);
    return this.element;
  }

  /*hit(player) {
  return this.cards.pop().mount(document.querySelector(`#${player}-hand .cards`));
  }*/
  
  player() {
    let result = document.querySelector("#player-hand .score");

    let card = this.cards.pop();
    card.mount(this.render('player'));
    console.log(card);

    let card1 = this.cards.pop();
    card1.mount(this.render('player'));
    console.log(card1);

    total = card.value + card1.value;
    result.innerHTML = `Score: ${total}`
    return total;
  }

  dealer() {
    let dealerDeck = document.querySelector("#dealer-cards");

    let cardD = this.cards.pop();
    cardD.mount(dealerDeck);
    
    dealerSc = cardD.value;

    this.dealerCard = this.cards.pop();
    this.dealerCard.mountReversed(dealerDeck);
    console.log(this.card);
    return this.card;
  }

  hit() {
    let result = document.querySelector("#player-hand .score");

    let card2 = this.cards.pop();
    card2.mount(this.render('player'));
    console.log(card2);

    newScore = total + card2.value;
    result.innerHTML = `Score: ${newScore}`;
  
  }

  stand() {
    let dealersScore = document.querySelector("#dealer-hand .score");
    let dealerDeck = document.querySelector("#dealer-cards");

    let cardD2 = this.cards.pop();
    cardD2.mount(dealerDeck);

    document.querySelector(".face-revers").style.display = "none";

    dealerSc += cardD2.value;
    dealersScore.innerHTML = `Score: ${dealerSc}`;


    let message = document.querySelector('.table');
    if(dealerSc > newScore) {
      message.innerHTML = "You lost! Refresh the browser to play again.";
    } else {
      message.innerHTML = "You won! Refresh the browser to play again."
    }
    
  }
  

}