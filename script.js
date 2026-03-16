
const container = document.querySelector(".container");

function grider(gridNum = 16){
    container.innerHTML = '';

    let cellSize = Math.floor(530/gridNum);
    
    for (let i = 0; i < gridNum; i++) {
        const row = document.createElement("div");
        // console.log(i);
        for (let j = 0; j < gridNum; j++) {
            // console.log(j);
            const column = document.createElement("div");
            
            column.classList.add("column");
            
            row.appendChild(column);
            column.style.width = cellSize + "px";
            column.style.height = cellSize + "px";
        }
        container.appendChild(row);
    }
}

grider();

function generate_randomrgb(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const grid_btn = document.querySelector(".grid-size");
grid_btn.addEventListener("click", () => {
 
    const newSize = prompt('Enter new grid size (e.g., 16 for 16x16):');
    if (!isNaN(newSize) && newSize> 0 && newSize <= 100) {
        grider(newSize);
        const tiles = document.querySelectorAll(".column");
        
        tiles.forEach(tile => {tile.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = generate_randomrgb();
        });})
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
})

const tiles = document.querySelectorAll(".column");

tiles.forEach(tile => {tile.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = generate_randomrgb();
});})

