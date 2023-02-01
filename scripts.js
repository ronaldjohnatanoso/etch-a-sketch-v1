

const container = document.querySelector(".window-container")
const cell = document.createElement("div")
cell.classList.add("box")

let rainbowMode = false
let isPainting = false
let size = 20;
let boxSize = 800/size;
container.style.gridTemplateColumns =  `repeat(${size},${boxSize}px)`
container.style.gridAutoRows = `${boxSize}px`

for(let i=0;i<(size*size);i++){
    const cell = document.createElement("div")
    cell.classList.add("box")
    container.appendChild(cell)
}

//rainbow mode portion, random rgb codes
function randomColor(){
    return (Math.floor(Math.random()*255)).toString()
}
//
function doPainting(x,y){
    let element = document.elementFromPoint(x,y)//element with the coor
    //if it has the box class
    if(element.classList.contains('box')){
        //if rainbow mode is one
        if(rainbowButton){
            element.style.background = `rgb( ${randomColor()},${randomColor()},${randomColor()} )`
        }

        else element.style.backgroundColor = 'red'
    }

}

//
document.onmousedown = () => {
    isPainting=true
}

document.onmouseup = () => {
    isPainting = false
}

document.addEventListener("mouseover",(event)=>{
    event.preventDefault()
    if(isPainting){
        doPainting(event.clientX,event.clientY)
    }
})

//nodelist of all box
const grids = document.querySelectorAll(".box")

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click",()=>{

    grids.forEach( button =>{
         button.style.background = 'white'
    } )

})


//query for rainbow mode
const rainbowButton = document.querySelector(".rainbow")
rainbowButton.addEventListener("click", ()=>{
    rainbowMode = !(rainbowMode)
    // alert(rainbowMode)
})

