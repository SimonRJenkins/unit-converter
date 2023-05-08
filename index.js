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

    const conversionResults = [meters, feet, liters, gallons, kilos, pounds, metersFeet, feetMeters, litersGallons, gallonsLiters, kilosPounds, poundsKilos];
    conversionResults.forEach(result => result.textContent = "");

    const conversionFactors = [1, 3.281, 1, 0.264, 1, 2.204];
    const metersToFeet = inputEl.value * conversionFactors[1];
    const feetToMeters = inputEl.value / conversionFactors[1];
    const litersToGallons = inputEl.value * conversionFactors[3];
    const gallonsToLiters = inputEl.value / conversionFactors[3];
    const kilosToPounds = inputEl.value * conversionFactors[5];
    const poundsToKilos = inputEl.value / conversionFactors[5];

    meters.textContent += inputEl.value + " ";
    feet.textContent += metersToFeet.toFixed(3) + " ";
    liters.textContent += inputEl.value + " ";
    gallons.textContent += litersToGallons.toFixed(3) + " ";
    kilos.textContent += inputEl.value + " ";
    pounds.textContent += kilosToPounds.toFixed(3) + " ";

    metersFeet.textContent += metersToFeet.toFixed(3) + " ";
    feetMeters.textContent += feetToMeters.toFixed(3) + " ";

    litersGallons.textContent += litersToGallons.toFixed(3) + " ";
    gallonsLiters.textContent += gallonsToLiters.toFixed(3) + " ";

    kilosPounds.textContent += kilosToPounds.toFixed(3) + " ";
    poundsKilos.textContent += poundsToKilos.toFixed(3) + " ";

})







