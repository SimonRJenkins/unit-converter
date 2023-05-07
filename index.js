/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

let meters = document.getElementById("meters")
let feet = document.getElementById("feet")
let liters = document.getElementById("liters")
let gallons = document.getElementById("gallons")
let kilos = document.getElementById("kilos")
let pounds = document.getElementById("pounds")

let metersFeet = document.getElementById("meters-feet")
let feetMeters = document.getElementById("feet-meters")
let litersGallons = document.getElementById("liters-gallons")
let gallonsLiters = document.getElementById("gallons-liters")
let kilosPounds = document.getElementById("kilos-pounds")
let poundsKilos = document.getElementById("pounds-kilos")

convertBtn.addEventListener("click", function () {
    meters.textContent += inputEl.value + " ";
    feet.textContent += inputEl.value + " ";
    liters.textContent += inputEl.value + " ";
    gallons.textContent += inputEl.value + " ";
    kilos.textContent += inputEl.value + " ";
    pounds.textContent += inputEl.value + " ";


    metersFeet.textContent += inputEl.value * 3.281 + " ";
    feetMeters.textContent += inputEl.value / 3.281 + " ";

    litersGallons.textContent += inputEl.value * 0.264 + " ";
    gallonsLiters.textContent += inputEl.value / 0.264 + " ";

    kilosPounds.textContent += inputEl.value * 2.204 + " ";
    poundsKilos.textContent += inputEl.value / 2.204 + " ";

})







