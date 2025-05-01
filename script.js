let input=16;
let container=document.querySelector(".container");

function grid(size){


for(let i=0;i<size*size;i++){
    let square= document.createElement("div");
    square.classList.add("square");
    square.style.width= 600/size + "px";
    square.addEventListener("mouseenter",()=>{
        square.classList.add("hovered");
    })
    container.appendChild(square);
}
}

function cleanGrid(){
   while(container.firstChild){
    container.removeChild(container.firstChild);
   }
}

let btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    let inp=parseInt(prompt("Enter Grid Size:"));
    cleanGrid();
    if(inp>100){
        inp=100;
    }
    grid(inp);
})

grid(input);










