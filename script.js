const btn = document.querySelector('#btn');
const contDiv = document.querySelector('.container');
const reset = document.querySelector('#reset');
const rgb = document.querySelector('#color');
const black = document.querySelector('#black')

black.addEventListener('click', addBlack)
rgb.addEventListener('click', addRgb)
btn.addEventListener('click', newGrid);
//reload the board
reset.addEventListener('click', (e) => { location.reload(); })

addBlack();

//initial grid layout with 16 X 16 grids
let size = 16;
grid();
function grid() // function to add the grid squares to the container div
{
    for (let i = 0; i < (size * size); i++) {
        let measure = 500 / size;
        const newDiv = document.createElement('div')
        newDiv.style.border = "0.5px solid black";
        newDiv.style.width = measure + "px";
        newDiv.style.height = measure + "px";
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
    size = newSize;
    grid();
}
