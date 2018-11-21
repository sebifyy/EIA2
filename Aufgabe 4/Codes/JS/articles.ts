namespace aufg4 {

    interface ArticleType {
        name: string;
        price: number;
    }

    //________________________________________________BAEUME
    let tree1: ArticleType = { name: "Nordmanntanne", price: 45 };
    let tree2: ArticleType = { name: "Edeltanne", price: 42.90 };

    export let allTrees: ArticleType[] = [tree1, tree2];

    //________________________________________________HALTERUNGEN
    let holder1: ArticleType = { name: "keine Halterung", price: 0.00 };
    let holder2: ArticleType = { name: "Einfach Halterung", price: 7.90 };
    let holder3: ArticleType = { name: "Halter 3000", price: 25.90 };

    export let allHolders: ArticleType[] = [holder1, holder2, holder3];

    //_______________________________________________KERZEN
    let candle1: ArticleType = { name: "keine Kerzen", price: 0.00 };
    let candle2: ArticleType = { name: "Kunstkerzen", price: 14.90 };
    let candle3: ArticleType = { name: "Einfache Wachskerzen", price: 29.90 };
    let candle4: ArticleType = { name: "Verzierte Wachskerzen", price: 59.90 };

    export let allCandles: ArticleType[] = [candle1, candle2, candle3, candle4];

    //______________________________________________EXTRAS
    let extra1: ArticleType = { name: "Lametta Weiss", price: 4.90 };
    let extra2: ArticleType = { name: "Lametta Rot", price: 4.90 };
    let extra3: ArticleType = { name: "Weihnachtskugeln gemischt", price: 14.90 };

    export let allExtras: ArticleType[] = [extra1, extra2, extra3];
}