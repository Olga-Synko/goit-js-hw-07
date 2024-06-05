const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
nameInput.addEventListener("input", (e) => {
   let trueOutput = nameInput.value.trim();
   output.textContent = !trueOutput ?  "Anonymous" : trueOutput
});


