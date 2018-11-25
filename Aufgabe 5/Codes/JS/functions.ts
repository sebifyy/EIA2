namespace aufg5 {
    //__________________________________________________EVENTLISTENER
    document.addEventListener("DOMContentLoaded", main);


    //__________________________________________________HAUPTFUNKTION
    function main(): void {
        fillConfigurator("treeType", allTrees, "selectedTree");
        fillConfigurator("holderType", allHolders, "selectedHolder");
        fillConfigurator("candleType", allCandles, "selectedCandle");
        fillConfigurator("shippingType", allShippingOptions, "selectedShipping");
        fillExtras();
        document.addEventListener("change", showTotalPrice);
        document.getElementById("checkoutVerify").addEventListener("click", validateOrder);
        document.getElementById("extrasAmount").addEventListener("change", showTotalPrice);
    }

    //__________________________________________________UNTERFUNKTIONEN
    //_________________________________________________BAUMARTEN HINZUFUEGEN

    function fillConfigurator(_htmlId: string, _srcArray: ArticleType[], _targetHtmlId: string): void {
        let node: HTMLElement = document.getElementById(_htmlId);
        let childNodeHTML: string;
        for (let i: number = 0; i < _srcArray.length; i++) {
            childNodeHTML = "";
            childNodeHTML += "<option value='" + [i] + "'data-price='" + _srcArray[i].price + "'>" + _srcArray[i].name + " " + _srcArray[i].price + "EUR</option>"; //<option value="[i]">BAUMNAME</option>
            node.innerHTML += childNodeHTML;
        }
        node.addEventListener("change", function(): void { showCurrentSelection(_htmlId, _srcArray, _targetHtmlId); });
        //console.log(node.textContent);
    }

    //________________________________________________HALTERUNG HINZUFUEGEN
    /* function fillHolderType(): void {
        let node: HTMLElement = document.getElementById("holderType");
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allHolders.length; i++) {
            childNodeHTML += "<option value='" + [i] + "'>" + allHolders[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    }

    //________________________________________________KERZEN EINFUEGEN
    function fillCandleType(): void {
        let node: HTMLElement = document.getElementById("candleType");
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allCandles.length; i++) {
            childNodeHTML += "<option value='" + [i] + "'>" + allCandles[i].name + "</option>";
        }
        node.innerHTML += childNodeHTML;
        //node.addEventListener("change", showCurrentSelection);
    } */


    //_______________________________________________EXTRAS EINFUEGEN
    function fillExtras(): void {
        let node: HTMLElement = document.getElementById("extras");
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allExtras.length; i++) {
            childNodeHTML += "<label><input type='checkbox' data-text='" + allExtras[i].name + "' data-price='" + allExtras[i].price + "' value='" + [i] + "' id='extra" + [i] + "' name='extras'>" + allExtras[i].name + "</label>";
            childNodeHTML += "<input type='number' id='extrasAmount" + [i] + "'></input>";
        }
        node.innerHTML += childNodeHTML;
        node.addEventListener("change", showCurrentExtras);
    }


    //________________________________________________AKTUELLE BESTELLUNG ANZEIGEN
    function showCurrentSelection(_htmlId: string, _srcArray: ArticleType[], _targetHtmlId: string): void {
        let node: HTMLSelectElement = (document.getElementById(_htmlId)) as HTMLSelectElement;
        let childNodeHTML: string = "";
        let arrayIndex: number = node.selectedIndex - 1;
        childNodeHTML += _srcArray[arrayIndex].name;
        document.getElementById(_targetHtmlId).innerHTML = childNodeHTML;
        console.log(childNodeHTML);
        //node.innerHTML
    }


    //_______________________________________________________PREIS VON DEN SELECT
    function getSectionPrice(): number {
        let totalPrice: number = 0;
        let allSelectors: NodeListOf<Element> = document.getElementsByTagName("select");
        for (let i: number = 0; i < allSelectors.length; i++) {
            let node: HTMLSelectElement = (allSelectors[i]) as HTMLSelectElement;
            totalPrice += Number(node.selectedOptions[0].getAttribute("data-price"));
        }
        return totalPrice;
    }


    //_______________________________________________________PREIS VON DEN CHECKBOXEN
    function getExtrasPrice(): number {
        let totalPrice: number = 0;
        let allSelectors: NodeListOf<Element> = document.getElementsByTagName("input");
        for (let i: number = 0; i < allSelectors.length; i++) {
            if (allSelectors[i].getAttribute("type") == "checkbox") {
                let node: HTMLInputElement = (allSelectors[i]) as HTMLInputElement;
                let multiplier = document.getElementById("extrasAmount" + [i]).getAttribute("value");
                if (node.checked) {
                    totalPrice += Number(node.getAttribute("data-price")) * Number(multiplier);
                }
            }
        }
        return totalPrice;
    }

    //_______________________________________________________TOTALEN PREIS BERECHNEN
    function showTotalPrice(): void {
        let totalPrice: number = 0;
        totalPrice += getSectionPrice();
        totalPrice += getExtrasPrice();

        document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2) + " EUR";
        console.log(totalPrice.toFixed(2));
    }

    /*function showCurrentExtras(): void {
        let node: HTMLInputElement = (document.getElementById("extras")) as HTMLInputElement;
        let childNodeHTML: string = "";
        for (let i: number = 0; i < allExtras.length; i++) {
 
        }
    } */


    //_______________________________________________________CHECKBOXEN ERSTELLEN
    function showCurrentExtras(): void {
        let allGeneratedExtras: NodeListOf<Element> = document.getElementsByName("extras");
        let selectedExtrasToShow: string = "";
        for (let i: number = 0; i < allGeneratedExtras.length; i++) {
            let extraToCheck: HTMLInputElement = <HTMLInputElement>allGeneratedExtras[i];
            if (extraToCheck.checked) {
                selectedExtrasToShow += extraToCheck.getAttribute("data-text") + ", ";
            }
        }
        document.getElementById("selectedExtras").innerHTML = selectedExtrasToShow.substring(0, selectedExtrasToShow.length - 2);

    }


    //________________________________________________________BESTELLUNG VALIDIEREN
    function validateOrder(): void {
        let valid: boolean = true;

        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataName")).value.length > 5; //NAME MIN 5 ZEICHEN

        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataEmail")).value.includes("@"); //EMAIL BRAUCHT @
        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataEmail")).value.includes("."); //EMAIL HAT "."

        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataStreet")).value.length > 0; //ETWAS EINGETRAGEN
        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataHouseNmb")).value.length > 0;
        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataPostalcode")).value.length > 0;
        valid = valid && (<HTMLInputElement>document.getElementById("checkoutDataCity")).value.length > 0;

        if (valid == true) {
            alert("Bestellung wurde abgeschickt.");
        }

        else {
            alert("Bitte Daten korrekt eingeben!");
        }
    }
}