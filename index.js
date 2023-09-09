const sketchPad = document.querySelector(".sketchPad")
const dropdown = document.querySelector("#size")
let size = 16

//function to add a color 
const addColor = (e) => {
   e.target.style.backgroundColor = "black"
}

//create grid function
const createGrids = (num) => {
    sketchPad.innerHTML = " "
    for(let i = 0; i < num; i++){
       const row = document.createElement("div")
       row.classList.add('row')
       sketchPad.appendChild(row)
     

        for(let j = 0; j < num; j++){
            const col = document.createElement('div');
            col.classList.add('col')
            row.appendChild(col)
            col.onclick = (e) => {
                addColor(e)
           }
        }
    }
}
createGrids(size) 


dropdown.addEventListener("change", () =>  {
    //get the index of the selected value
    let index = dropdown.selectedIndex;
    //set size to the value of the selected index
    size = dropdown.options[index].value; 
    //call createGrids with the new size
    createGrids(size) 
})



