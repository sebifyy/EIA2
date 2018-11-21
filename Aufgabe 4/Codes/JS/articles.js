var aufg4;
(function (aufg4) {
    //________________________________________________BAEUME
    let tree1 = { name: "Nordmanntanne", price: 45 };
    let tree2 = { name: "Edeltanne", price: 42.90 };
    aufg4.allTrees = [tree1, tree2];
    //________________________________________________HALTERUNGEN
    let holder1 = { name: "keine Halterung", price: 0.00 };
    let holder2 = { name: "Einfach Halterung", price: 7.90 };
    let holder3 = { name: "Halter 3000", price: 25.90 };
    aufg4.allHolders = [holder1, holder2, holder3];
    //_______________________________________________KERZEN
    let candle1 = { name: "keine Kerzen", price: 0.00 };
    let candle2 = { name: "Kunstkerzen", price: 14.90 };
    let candle3 = { name: "Einfache Wachskerzen", price: 29.90 };
    let candle4 = { name: "Verzierte Wachskerzen", price: 59.90 };
    aufg4.allCandles = [candle1, candle2, candle3, candle4];
    //______________________________________________EXTRAS
    let extra1 = { name: "Lametta Weiss", price: 4.90 };
    let extra2 = { name: "Lametta Rot", price: 4.90 };
    let extra3 = { name: "Weihnachtskugeln gemischt", price: 14.90 };
    aufg4.allExtras = [extra1, extra2, extra3];
})(aufg4 || (aufg4 = {}));
//# sourceMappingURL=articles.js.map