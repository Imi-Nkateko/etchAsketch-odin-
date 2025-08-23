const gridContainer = document.querySelector(".gridContainer");
const inputEl = document.querySelector("input");

inputEl.addEventListener("change", () => {
 createGrid((inputEl.value));
})



const createGrid = (inputValue) => {
     gridContainer.innerHTML = "";

     for (let i = 0; i < inputValue * inputValue; i++) {
       const square = document.createElement("div");
       square.classList.add("square");
       gridContainer.appendChild(square);

       gridContainer.style.gridTemplateColumns = `repeat(${inputValue}, 1fr)`;
       gridContainer.style.gridTemplateRows = `repeat(${inputValue}, 1fr)`;

       square.addEventListener("mouseover", () => {

        if (square.style.backgroundColor === "black") {
            square.style.opacity = "0.9";
        } else {
            square.style.backgroundColor = "black";
        }
       });
     }
}

window.addEventListener("DOMContentLoaded", () => {
  createGrid(inputEl.value = 16);
});