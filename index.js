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

let metersFeet = document.getElementById("meters")
let feetMeters = document.getElementById("feet")

let liters = document.getElementById("liters")
let gallons = document.getElementById("gallons")

let kilos = document.getElementById("kilos")
let pounds = document.getElementById("pounds")

function convert() {

}

convertBtn.addEventListener("click", function () {
    meters.textContent += inputEl.value + " ";
    feet.textContent += inputEl.value + " ";
    kilos.textContent += inputEl.value + " ";
    pounds.textContent += inputEl.value + " ";
    liters.textContent += inputEl.value + " ";
    gallons.textContent += inputEl.value + " ";


})


function meterToFeet() {
    //metersFeet.textContent = inputEl.value * 3.281
}







