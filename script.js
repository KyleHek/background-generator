let rgbText = document.getElementById('rgb-text');
let hueText = document.getElementById('hue-text');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body = document.getElementById('gradient');
let random = document.getElementById('random');

//input sliders
let hue = document.getElementById('hue');
let saturation = document.getElementById('saturation');
let lightness = document.getElementById('lightness');

function randomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    const rgb = "rgb(" + red + "," + green + "," + blue + ")";
    return rgb;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    rgbText.textContent = body.style.background + ";";
}

function randomGradient() {
    body.style.background = "linear-gradient(to right, " + randomRGB() + "," + randomRGB() + ")";
    rgbText.textContent = body.style.background + ";";
}

random.addEventListener('click', randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


//setting the background to the values of the input sliders
function setHSL() {
    body.style.background = "hsl(" + hue.value + "," + saturation.value + "%," + lightness.value + "%)";
    hueText.textContent = "hsl(" + hue.value + "," + saturation.value + "%," + lightness.value + "%)";
}

//event listeners for sliders
hue.addEventListener("input", setHSL);

saturation.addEventListener("input", setHSL);

lightness.addEventListener("input", setHSL);
