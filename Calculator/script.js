 const inputField = document.getElementById("inputField")
const calcBtns = document.querySelectorAll("button")

calcBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        inputField.value += btn.value
    })
})