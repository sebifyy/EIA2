var unogame2;
(function (unogame2) {
    let colors = ["Red", "Blue", "Yellow", "Green"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "RW"];
    var handCards = [];
    var deck = [];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                var card = { color: colors[i], value: values[i] };
                deck.push(card);
            }
        }
    }
    var userInput = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter = Number(userInput);
    function randomCards(amount = counter) {
        for (let i = amount; i > 0; i--) {
            let rCard = Math.floor(Math.random() * (deck.length - 1));
            handCards.push(deck[rCard]);
            deck.splice(rCard, 1);
        }
    }
    function displayCards() {
        for (let i = 0; i < handCards.length; i++) {
            let x = document.createElement("div");
            x.innerText = handCards[i].value;
            x.classList.add("card");
            x.classList.add(handCards[i].color);
            document.getElementById("HandCards").appendChild(x);
        }
    }
    randomCards();
    displayCards();
    console.log(card);
})(unogame2 || (unogame2 = {}));
//# sourceMappingURL=uno_code2.js.map