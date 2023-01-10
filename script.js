const btn = document.querySelector('#btn');
const contDiv = document.querySelector('.container');
const reset = document.querySelector('#reset');
const rgb = document.querySelector('#color');
const black = document.querySelector('#black')
const eraser = document.querySelector('#eraser')

black.addEventListener('click', addBlack)
rgb.addEventListener('click', addRgb)
btn.addEventListener('click', newGrid);
//reload the board
reset.addEventListener('click', (e) => { location.reload(); })
eraser.addEventListener('click', erase);

addBlack();

//initial grid layout with 24 X 24 grids
let size = 24;
grid();
function grid() // function to add the grid squares to the container div
{
    for (let i = 0; i < (size * size); i++) {
        let measure = 600 / size;
        const newDiv = document.createElement('div')
        newDiv.style.border = "1px solid rgb(128,128,128,.25)";
        newDiv.style.width = measure + "px";
        newDiv.style.height = measure + "px";
        newDiv.style.backgroundColor = "white"
        newDiv.classList.add('myStyle')
        contDiv.append(newDiv);
    }
}

 // function to generate a random RGB color
function randomRGB() { 
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
}

//change square color on hover
function addBlack() {
    contDiv.addEventListener('mouseover', (e) => { if (e.target.firstElementChild == null) { e.target.style.backgroundColor = "black"; } })
}

function addRgb() {
    contDiv.addEventListener('mouseover', (e) => { if (e.target.firstElementChild == null) { e.target.style.backgroundColor = randomRGB();; } })
}

//change square color to white
function erase() {
    contDiv.addEventListener('mouseover', (e) => { if (e.target.firstElementChild == null) { e.target.style.backgroundColor = "white";; } })
}

function newGrid() // function that deletes the previous grid and creates a new grid with the entered size
{
    while (contDiv.firstChild) {
        contDiv.removeChild(contDiv.firstChild);
    }

    let newSize = prompt("Enter the grid size: ", "Enter a number less than 100");
    if (newSize > 100) {
        alert("Enter a number less than 100");
        let newSize = prompt("Enter the grid size: ", "Enter a number less than 100");
    }
    else if(newSize == null){
        newSize = 24;
    }
    size = newSize;
    grid();
}
