/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    if(this.rank === "jack"){
      this.value = 10;
    } else if (this.rank === "queen") {
      this.value = 10;
    } else if (this.rank === "king"){
      this.value = 10;
    } else if (this.rank === "ace"){
      this.value = 11;
    } else {
      this.value = parseInt(this.rank);
    }
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = `card face-${this.rank}-of-${this.suit}`;
    return this.element;
    };

  reversedCard () {
      this.element = document.createElement("div");
      this.element.className = "card face-revers";
      return this.element;

    }





  mount(parent) {
    parent.appendChild(this.render());
  }

  mountReversed(parent) {
    parent.appendChild(this.reversedCard());
  }
} 