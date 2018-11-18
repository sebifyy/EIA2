namespace aufg4 {



    //________________________________________________BAEUME
    interface TreeType {
        name: string;
        price: number;
    }

    let tree1: TreeType = { name: "Nordmanntanne", price: 45 };
    let tree2: TreeType = { name: "Edeltanne", price: 42.90 };


    let allTrees: TreeType[] = [tree1, tree2];

}