let input=16;
let container=document.querySelector(".container");
let check=document.querySelector(".checkbox");
let shade=document.querySelector(".shading");
let eraser=document.querySelector(".eraser");

let a=0.1;

function grid(size){


for(let i=0;i<size*size;i++){
    let square= document.createElement("div");
    square.classList.add("square");
    square.style.width= 600/size + "px";
    square.addEventListener("mouseover",()=>{
        if(check.checked){
            let r=Math.floor(Math.random()*256);
            let g=Math.floor(Math.random()*256);
            let b=Math.floor(Math.random()*256);

            square.style.backgroundColor=`rgb(${r},${g},${b})`;
        }
        else if(shade.checked){
            a+=0.1;
            square.style.backgroundColor=`rgba(${0},${0},${0},${a})`;
        }
        else if(eraser.checked){
            square.style.backgroundColor="#bfbfbf"
        }
        else{
            square.style.backgroundColor="black";
        }
    })
    square.style.width=`${100/size}%`;
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










