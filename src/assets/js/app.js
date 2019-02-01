let hitBtn = document.querySelector(".js-hit");


document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
 
  deck.shuffle();
  console.log(deck); 


  hitBtn.addEventListener("click", () => {
    console.log(deck.player(2));
    console.log(deck.dealer());
  })
  
});