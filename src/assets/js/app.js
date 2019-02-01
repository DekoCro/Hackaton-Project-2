let startGame = document.querySelector(".js-deal");
let hitCard = document.querySelector(".js-hit");
let stand = document.querySelector(".js-stand");

document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);

  startGame.addEventListener("click", () => {
    deck.player();
    deck.dealer();
  });

  hitCard.addEventListener('click', () => {
    deck.hit();
  });
  stand.addEventListener('click', () => {
    deck.stand();
  });

  
});