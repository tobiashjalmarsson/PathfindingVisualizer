
// Function to generate the maze
// Initlialy the maze will consist of a grid of divs


function generateRow(container) {
    for(let i = 0; i < 15; i++){
        var square = document.createElement("div");
        square.className = "sortingBlock";
        square.id = "square"
        container.appendChild(square);
    }
}

function generateMaze(){
    container = document.getElementById("mazeContainer");
    for(let i = 0; i < 15; i++){
        var row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        generateRow(row);
    }
}

function generateMaze2(){
    var mySquare = new Square(1,2);
    mySquare.test();
    container = document.getElementById("mazeContainer");
    for(let i = 0; i < 15; i++){
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        for(let j = 0; j < 15; j++){
            var square = document.createElement("div");
            square.className = "sortingBlock";
            square.id = "" + i + j;
            // adding eventlistener so we can change styles/properties on a mousedown
            square.addEventListener('mouseover', function(e){
                // we trigger the event if we are moving the cursor above the object
                if(e.buttons == 1){
                    // if the right mousebutton is pressed down we change the class
                    this.className = "clickedSortingBlock";
                }
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}