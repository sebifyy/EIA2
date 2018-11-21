namespace aufg4 {
    //__________________________________________________EVENTLISTENER
    document.addEventListener("DOMContentLoaded", main);

    //__________________________________________________HAUPTFUNKTION
    function main(): void {
        fillTreeType();
        fillHolderType();
        fillCandleType();
        fillExtras();
    }

    //__________________________________________________UNTERFUNKTIONEN
    //_________________________________________________BAUMARTEN HINZUFUEGEN
    var selectedTree: string;

    function fillTreeType(): void {
        let node: HTMLElement = document.getElementById("treeType");
        let childNodeHTML: string;
        node.addEventListener("change", showCurrentTree);
        for (let i: number = 0; i < allTrees.length; i++) {
            selectedTree = allTrees[i].name;
            childNodeHTML = "";
            childNodeHTML += "<option vaulue='" + [i] + "'" + "id='tree" + [i] + "'>" + allTrees[i].name + " " + allTrees[i].price + "EUR</option>"; //<option value="[i]">BAUMNAME</option>
            node.innerHTML += childNodeHTML;
        }

        console.log(selectedTree);
        node.addEventListener("change", showCurrentTree);
        //console.log(node.textContent);


    }

    //________________________________________________HALTERUNG HINZUFUEGEN
    function fillHolderType(): void {
        let node: HTMLElement = document.getElementById("holderType");
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allHolders.length; i++) {
            childNodeHTML += "<option vaulue='" + [i] + "'>" + allHolders[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }

    function fillCandleType(): void {
        let node: HTMLElement = document.getElementById("candleType");
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allCandles.length; i++) {
            childNodeHTML += "<option vaulue='" + [i] + "'>" + allCandles[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }

    function fillExtras(): void {
        let node: HTMLElement = document.getElementById("extras");
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allExtras.length; i++) {
            childNodeHTML += "<input type='checkbox' value='" + [i] + "' id='extra" + [i] + "'>" + allExtras[i].name + "</input>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }

    //________________________________________________AKTUELLE BESTELLUNG ANZEIGEN
    function showCurrentTree(): void {
        let node: HTMLElement = document.getElementById("selectedTree");
        let childNodeHTML: string = "";
        childNodeHTML += "";
        node.innerHTML += selectedTree[i];
    }

}