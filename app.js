let title = document.getElementById("header-change")
let blueButton = document.getElementById("blue-button")
let redButton = document.getElementById("red-button")


blueButton.addEventListener('mouseover', e => {
    title.style.color = "blue"
})

blueButton.addEventListener('mouseout', e => {
    title.style.color = "black"
})

redButton.addEventListener('mouseover', e => {
    title.style.color = "red"
})

redButton.addEventListener('mouseout', e => {
    title.style.color = "black"
})