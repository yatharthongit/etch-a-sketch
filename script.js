function grid(size){
let container=document.querySelector(".container");
for(let i=0;i<size;i++){
    let row=document.createElement("div");
    row.classList.add("row");
    row.style.border="2px solid black";
    for(let j=0;j<=size;j++){
        let column=document.createElement("div");
        column.classList.add("column");
        column.style.border="2px solid black";
        row.appendChild(column);
    }
    container.appendChild(row);
}
}

grid(16);


