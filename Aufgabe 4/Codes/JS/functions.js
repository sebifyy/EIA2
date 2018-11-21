var aufg4;
(function (aufg4) {
    //__________________________________________________EVENTLISTENER
    document.addEventListener("DOMContentLoaded", main);
    //__________________________________________________HAUPTFUNKTION
    function main() {
        fillTreeType();
        fillHolderType();
        fillCandleType();
        fillExtras();
    }
    //__________________________________________________UNTERFUNKTIONEN
    //_________________________________________________BAUMARTEN HINZUFUEGEN
    var selectedTree;
    function fillTreeType() {
        let node = document.getElementById("treeType");
        let childNodeHTML;
        node.addEventListener("change", showCurrentTree);
        for (let i = 0; i < aufg4.allTrees.length; i++) {
            selectedTree = aufg4.allTrees[i].name;
            childNodeHTML = "";
            childNodeHTML += "<option vaulue='" + [i] + "'" + "id='tree" + [i] + "'>" + aufg4.allTrees[i].name + " " + aufg4.allTrees[i].price + "EUR</option>"; //<option value="[i]">BAUMNAME</option>
            node.innerHTML += childNodeHTML;
        }
        console.log(selectedTree);
        node.addEventListener("change", showCurrentTree);
        //console.log(node.textContent);
    }
    //________________________________________________HALTERUNG HINZUFUEGEN
    function fillHolderType() {
        let node = document.getElementById("holderType");
        let childNodeHTML = "";
        for (let i = 0; i < aufg4.allHolders.length; i++) {
            childNodeHTML += "<option vaulue='" + [i] + "'>" + aufg4.allHolders[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }
    function fillCandleType() {
        let node = document.getElementById("candleType");
        let childNodeHTML = "";
        for (let i = 0; i < aufg4.allCandles.length; i++) {
            childNodeHTML += "<option vaulue='" + [i] + "'>" + aufg4.allCandles[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }
    function fillExtras() {
        let node = document.getElementById("extras");
        let childNodeHTML = "";
        for (let i = 0; i < aufg4.allExtras.length; i++) {
            childNodeHTML += "<input type='checkbox' value='" + [i] + "' id='extra" + [i] + "'>" + aufg4.allExtras[i].name + "</input>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }
    //________________________________________________AKTUELLE BESTELLUNG ANZEIGEN
    function showCurrentTree() {
        let node = document.getElementById("selectedTree");
        let childNodeHTML = "";
        childNodeHTML += "";
        node.innerHTML += selectedTree;
    }
})(aufg4 || (aufg4 = {}));
//# sourceMappingURL=functions.js.map