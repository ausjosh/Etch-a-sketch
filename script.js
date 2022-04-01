//java script file
let container = document.getElementById("grid");
let size = 0

askSize = window.prompt("what size grid would you like 8, 16, 32, or 64?");
size = parseInt(askSize)
let devide = 320 / size;
let px = devide.toString();
let type = "px"



function createDiv(){
let cell = document.createElement("div")    
cell.setAttribute('class', 'gridDivs');
cell.setAttribute('id', 'size');
cell.innerHTML = '';
cell.style.width = px + type ;
cell.style.height =  px + type ;
container.appendChild(cell);
}



      


// funtion should create pre determined number of divs in a grid
function makeGrid(){
  
   
    for(i= 0; i < 16; i++){
        createDiv();
        for(j= 0; j < size-1; j++){
            createDiv();
             
            
        }
   
}
}
// hover effect change div color when mouse hovers over 
function draw(){
     
    document.querySelectorAll('.gridDivs').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'black';
        })
      })
    
}
//reset button 
const reset = document.querySelector('#reset')
reset.addEventListener('click',()=>{
    window.location.reload(true)
})


makeGrid()
createDiv()
draw()
