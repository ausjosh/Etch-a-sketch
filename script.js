//java script file
let container = document.getElementById("grid");

function createDiv(){

let cell = document.createElement("div");
cell.innerHTML = "TEXT";
container.appendChild(cell);
}

// funtion should create pre determined number of divs in a row
function makeRow(){
    for(i= 0; i < 16; i++){
        createDiv()
    }
}


function makeCollum(){
    for(i= 0; i < 16; i++){
        createDiv()
}
}

function fullGrid(){
makeRow()
makeCollum()
}

fullGrid()