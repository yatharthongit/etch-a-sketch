function grid(size){
let container=document.querySelector(".container");
for(let i=0;i<size*size;i++){
    let square= document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseenter",()=>{
        square.classList.add("hovered");
    })
    container.appendChild(square);
}
}

grid(16);

const sq=document.querySelector(".square");








