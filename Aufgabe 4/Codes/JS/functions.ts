namespace aufg4 {


    function listeners(): void {
        document.getElementById("treeType").innerHTML = "";
        for (let i: number = 0; i < allTrees.length; i++) {
            let x: HTMLElement = document.createElement("option");
        }
    }

}