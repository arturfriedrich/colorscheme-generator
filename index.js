const colorPicker = document.getElementById("color-picker")
const schemesSelect = document.getElementById("schemes-select")
const generateBtn = document.getElementById("generate-btn")
const colorsDisplay = document.getElementById("colors-display")
const hexDisplay = document.getElementById("hex-display")
const form = document.getElementById("form")


/*
colorPicker.addEventListener("submit", (event) => {
    const baseColor = event.target.value
    console.log(baseColor)
})
*/

function getData() {
    const baseColor = colorPicker.value
    const scheme = schemesSelect.value
    const url = `https://www.thecolorapi.com/scheme?hex=${baseColor.substring(1)}&mode=${scheme}&count=5`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            colorsDisplay.innerHTML = ""
            hexDisplay.innerHTML = ""
            for ( let i=0; i<5; i++ ) {
                colorsDisplay.innerHTML += `
                    <div class="color" onclick="copyDivToClipboard()" style="background-color:${data.colors[i].hex.value};"></div>
                `
                hexDisplay.innerHTML += `
                    <div class="hex-value">${data.colors[i].hex.value}</div>
                `
            }
        })
}

generateBtn.addEventListener("click", function(event) {
    event.preventDefault()
    getData()
})

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("a"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
