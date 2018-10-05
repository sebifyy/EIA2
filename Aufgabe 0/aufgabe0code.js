// Aufgabe: #0
// Name: Sebastian Hoffmann
// Matrikel: 259316
// Datum: 05.10.2018
// Hiermit versichere ich, dass ich diesen
// Code selbst geschrieben habe. Er wurde
// nicht kopiert und auch nicht diktiert.
var aufgabe0;
(function (aufgabe0) {
    var i;
    function main() {
        var i = prompt("Wie heisst du?"); //ANZEIGE DER PROMPTBOX MIT DEM TEXT
        var node = document.getElementById("text"); //SCHNITTSTELLE FUER HTML DOKUMENT
        node.innerHTML += "Guten Tag, "; //TEXT DER ANGEZEIGT WIRD NACH EINGABE
        node.innerHTML += i; //EINGABE DES BENUTZERS
        console.log("Guten Tag, ", i); //EINGABE IN DIE CONSOLE
    }
    document.addEventListener("DOMContentLoaded", main); //BEFEHL DASS ERST AUSGEFUEHRT WIRD WENN SEITE VOLLSTAENDIG GELADEN IST
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=aufgabe0code.js.map