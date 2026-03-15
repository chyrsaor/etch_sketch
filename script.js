
const container = document.querySelector(".container");

function grider(gridNum, width, height){
    
    for (let i = 0; i < gridNum; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < gridNum; j++) {
            const column = document.createElement("div");
            column.classList.add("column");

            row.appendChild(column);
            // console.log("hey");
            // document.querySelector(".column").style.backgroundcolor = "red";
            
        }
        container.appendChild(row);
    }

    console.log(width, height);
    // document.getElementsByClassName("column").style.width = width;
    // document.getElementsByClassName("column").style.height = height;
}


const grid_btn = document.querySelector(".grid-size");
grid_btn.addEventListener("click", () => {
 
    let size = prompt("what canvas size do you want?: ");
    size = Math.floor(parseInt(size));
    if(size>100){
        size=100
    }
    let width = Math.floor(530/size);
    let height = Math.floor(530/size);

    // document.getElementsByClassName("column").style.width = width;
    // document.getElementsByClassName("column").style.height = height;
    grider(size, width, height);
})

