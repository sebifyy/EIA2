namespace unogame3 {
    interface Card {
        color: string;
        value: string;
    }

    //KARTEN DIE NICHT PER FUNKTION GENERIERT WERDEN
    //FARBWUNSCH
    let w1: Card = {
        color: "black",
        value: "Farbwunsch"
    };

    let w2: Card = {
        color: "black",
        value: "Farbwunsch"
    };

    let w3: Card = {
        color: "black",
        value: "Farbwunsch"
    };

    let w4: Card = {
        color: "black",
        value: "Farbwunsch"
    };

    //+4 JOKER
    let j1: Card = {
        color: "black",
        value: "+4"
    };

    let j2: Card = {
        color: "black",
        value: "+4"
    };

    let j3: Card = {
        color: "black",
        value: "+4"
    };

    let j4: Card = {
        color: "black",
        value: "+4"
    };

    //NULL
    let zeroR: Card = {
        color: "Red",
        value: "0"
    };

    let zeroB: Card = {
        color: "Blue",
        value: "0"
    };

    let zeroY: Card = {
        color: "Yellow",
        value: "0"
    };

    let zeroG: Card = {
        color: "Green",
        value: "0"
    };

    let colors: string[] = ["Red", "Blue", "Yellow", "Green"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "RW"];
    var handCards: Card[] = [];
    var deck: Card[] = [w1, w2, w3, w4, j1, j2, j3, j4, zeroR, zeroB, zeroY, zeroG];


    function listeners(): void {
        document.getElementById("draw").addEventListener("click", getNewCard);
        document.addEventListener("keyup", getNewCardSpace);
        //for (let i: number = 0; i < handCards.length; i++) {
        //document.getElementById(String(handCards.indexOf(i)));
        //   }
        // document.getElementById("sort").addEventListener("click", sortByColor);
    }


    function getNewCard(): void {
        randomCards(1);
        displayCards();
        //console.log(_event.key == " ");
    }

    function getNewCardSpace(_event: KeyboardEvent): void {
        if (_event.key == " ") {
            randomCards(1);
            displayCards();
        }
    }
    //function sortByColor(): void {
    // }


    // ________________________________________________GENERIERUNG DER MEISTEN KARTEN__________________________________________
    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                var card: Card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }

    //________________________________________________USER EINGABE___________________________________________________
    var userInput: string = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter: number = Number(userInput);

    function randomCards(amount: number = counter): void {
        for (let i: number = amount; i > 0; i--) {
            let rCard: number = Math.floor(Math.random() * (deck.length - 1));
            handCards.push(deck[rCard]);
            deck.splice(rCard, 1);
        }
    }


    //_____________________________________________KARTEN ANZEIGEN____________________________________________________________
    function displayCards(): void {
        document.getElementById("HandCards").innerHTML = "";
        for (let i: number = 0; i < handCards.length; i++) {
            let x: HTMLElement = document.createElement("div");
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
}