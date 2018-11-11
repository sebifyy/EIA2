var unogame3;
(function (unogame3) {
    //KARTEN DIE NICHT PER FUNKTION GENERIERT WERDEN
    //FARBWUNSCH
    let w1 = {
        color: "black",
        value: "Farbwunsch"
    };
    let w2 = {
        color: "black",
        value: "Farbwunsch"
    };
    let w3 = {
        color: "black",
        value: "Farbwunsch"
    };
    let w4 = {
        color: "black",
        value: "Farbwunsch"
    };
    //+4 JOKER
    let j1 = {
        color: "black",
        value: "+4"
    };
    let j2 = {
        color: "black",
        value: "+4"
    };
    let j3 = {
        color: "black",
        value: "+4"
    };
    let j4 = {
        color: "black",
        value: "+4"
    };
    //NULL
    let zeroR = {
        color: "Red",
        value: "0"
    };
    let zeroB = {
        color: "Blue",
        value: "0"
    };
    let zeroY = {
        color: "Yellow",
        value: "0"
    };
    let zeroG = {
        color: "Green",
        value: "0"
    };
    let colors = ["Red", "Blue", "Yellow", "Green"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "RW"];
    var handCards = [];
    var deck = [w1, w2, w3, w4, j1, j2, j3, j4, zeroR, zeroB, zeroY, zeroG];
    function listeners() {
        document.getElementById("draw").addEventListener("click", getNewCard);
        document.addEventListener("keyup", getNewCardSpace);
        //for (let i: number = 0; i < handCards.length; i++) {
        //document.getElementById(String(handCards.indexOf(i)));
        //   }
        // document.getElementById("sort").addEventListener("click", sortByColor);
    }
    function getNewCard() {
        randomCards(1);
        displayCards();
        //console.log(_event.key == " ");
    }
    function getNewCardSpace(_event) {
        if (_event.key == " ") {
            randomCards(1);
            displayCards();
        }
    }
    //function sortByColor(): void {
    // }
    // ________________________________________________GENERIERUNG DER MEISTEN KARTEN__________________________________________
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                var card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }
    //________________________________________________USER EINGABE___________________________________________________
    var userInput = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter = Number(userInput);
    function randomCards(amount = counter) {
        for (let i = amount; i > 0; i--) {
            let rCard = Math.floor(Math.random() * (deck.length - 1));
            handCards.push(deck[rCard]);
            deck.splice(rCard, 1);
        }
    }
    //_____________________________________________KARTEN ANZEIGEN____________________________________________________________
    function displayCards() {
        document.getElementById("HandCards").innerHTML = "";
        for (let i = 0; i < handCards.length; i++) {
            let x = document.createElement("div");
            x.innerText = handCards[i].value;
            x.classList.add("card");
            x.classList.add(handCards[i].color);
            x.setAttribute("id", String([i]));
            document.getElementById("HandCards").appendChild(x);
        }
    }
    randomCards();
    displayCards();
    listeners();
    console.log(card);
})(unogame3 || (unogame3 = {}));
//# sourceMappingURL=uno_code2.js.map