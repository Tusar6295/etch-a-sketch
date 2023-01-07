const btn = document.querySelector('#btn');
const contDiv = document.querySelector('.container');
const reset = document.querySelector('#reset');

//change square color on hover
contDiv.addEventListener('mouseover', (e) => {if(e.target.firstElementChild == null){e.target.style.backgroundColor = "black";}})

//reload the board
reset.addEventListener('click', (e) => {location.reload();})

//initial grid layout with 16 X 16 grids
let size = 16;
grid();
function grid() // function to add the grid squares to the container div
{
    for(let i=0; i<(size*size); i++){
        let measure = 500 / size;
        const newDiv = document.createElement('div')
        newDiv.style.border = "0.5px solid black";
        newDiv.style.width = measure + "px";
        newDiv.style.height = measure + "px";
        newDiv.classList.add('myStyle')
        contDiv.append(newDiv);
    }
}

btn.addEventListener('click', newGrid);

function newGrid() // function that deletes the previous grid and creates a new grid with the entered size
{
    while(contDiv.firstChild){
    contDiv.removeChild(contDiv.firstChild);
    }

    let newSize = prompt("Enter the grid size: ");
    size = newSize;
    grid();
}
