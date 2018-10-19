var unogame;
(function (unogame) {
    var color = ["red", "yellow", "green", "blue"];
    var cards_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var cards_Zero = "0";
    var cards_special = ["Aussetzen", "RW", "plus2"];
    var cards_black = ["Joker", "plus4"];
    // FUNKTION UM ZUFAELLIGE ZAHLEN ZU GENERIEREN ZWISCHEN MIN/MAX
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // GENERELLE FOR SCHLEIFE DIE 5 MAL DURCHLAEUFT
    for (var i = 0; i < 5; i++) {
        var card = "";
        var r_color = randomBetween(1, 1000);
        console.log(r_color);
        // WENN r_color KLEINER ALS 74 DANN ENTSCHEIDE ZWISCHEN JOKER/PLUS4 KARTE
        if (r_color <= 74) {
            console.log("BLACK CARD");
            var r_black = randomBetween(0, 1);
            card = cards_black[r_black];
        }
        else {
            console.log("COLORED CARD");
            var r_Zero = randomBetween(0, 1000);
            //console.log(r_Zero);
            //ZERO KARTE
            if (r_Zero <= 37) {
                card = "Zero";
            }
            else if (r_Zero > 37 && r_Zero < 760) {
                var r_Number = randomBetween(1, 9);
                card = String(r_Number);
            }
            else if (r_Zero >= 760) {
                var r_Special = randomBetween(0, 2);
                card = cards_special[r_Special];
            }
        }
        console.log(card);
        console.log("++++++++++++++++++++++++++++++++++++");
    }
})(unogame || (unogame = {}));
//# sourceMappingURL=uno_code.js.map