namespace unogame2 {
  interface Card {
    color: string;
    value: string;
  }

  let colors: string[] = ["Red", "Blue", "Yellow", "Green"];
  let values: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+2",
    "X",
    "RW"
  ];
  const handCards: Card[] = [];
  const deck: Card[] = [];

  let card: Card;
  for (let i: number = 0; i < colors.length; i++) {
    for (let a: number = 0; a < values.length; a++) {
      for (let z: number = 0; z < 2; z++) {
        card = { color: colors[i], value: values[a] };
        deck.push(card);
      }
    }
  }

  const userInput: string = prompt(
    "Wie viele Karten sollen ausgeteilt werden?"
  );
  const counter: number = Number(userInput);

  function randomCards(amount: number = counter): void {
    for (let i: number = amount; i > 0; i--) {
      let rCard: number = Math.random() * (deck.length - 1);
      handCards.push(deck[rCard]);
      deck.splice(rCard, 1);
    }
  }

  function displayCards(): void {
    for (let i: number = 0; i < handCards.length; i++) {
      let x: HTMLElement = document.getElementById("HandCards");
      x.innerHTML = handCards[i].value;
    }
  }

  randomCards();
  displayCards();
}
