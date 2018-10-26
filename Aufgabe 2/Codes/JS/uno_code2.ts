namespace unogame2 {
    interface Card {
        color: string;
        value: string;
    }

    let colors: string[] = ["Red", "Blue", "Yellow", "Green"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "RW"];
    var handCards: Card[] = [];
    var deck: Card[] = [];


    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                var card: Card = { color: colors[i], value: values[i] };
            }
            deck.push(card);
        }
    }


    var userInput: string = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter: number = Number(userInput);

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

    console.log(card);
}