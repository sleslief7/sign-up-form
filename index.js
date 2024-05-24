const inputs = document.querySelectorAll("input");
const button = document.getElementById("create-btn");

inputs.forEach(inp => {
    inp.addEventListener("input", e => {
        e.target.required = true;
    })
})

button.addEventListener("click", e => {
    inputs.forEach(inp => {
        inp.required = true;
    })
})
