const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
nameInput.addEventListener("input", (evt) => {
   let trueOutput = nameInput.value.trim();
   output.textContent = !trueOutput ?  "Anonymous" : trueOutput
});


