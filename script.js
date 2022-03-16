//java script file
let container = document.getElementById("grid");

function createDiv(){
let cell = document.createElement("div");
cell.innerHTML = '';
container.appendChild(cell);
}

// funtion should create pre determined number of divs in a grid
function makeGrid(){
    for(i= 0; i < 16; i++){
        createDiv()
            for(j= 0; j < 16; j++){
            createDiv()
    
    }

    }
}




makeGrid()