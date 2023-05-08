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

// add values of inputvalue to round for each conversion e.g :
// feetValue = inputValue * 3.281;
// roundedFeetValue = feetValue.toFixed(2) (to 3 decimal places, required by project spec.)
// metersFeet.textContent += roundedFeetValue + " ";  < in the click event listener

//or instead do

/**
 * 
 *   // clear conversion results
    const conversionResults = [meters, feet, liters, gallons, kilos, pounds, metersFeet, feetMeters, litersGallons, gallonsLiters, kilosPounds, poundsKilos];
    conversionResults.forEach(result => result.textContent = "");

        // perform conversions
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

 */
convertBtn.addEventListener("click", function () {

    // clear conversion results
    const conversionResults = [meters, feet, liters, gallons, kilos, pounds, metersFeet, feetMeters, litersGallons, gallonsLiters, kilosPounds, poundsKilos];
    conversionResults.forEach(result => result.textContent = "");

    // perform conversions
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


    /*meters.textContent = "";
    feet.textContent = "";
    liters.textContent = "";
    gallons.textContent = "";
    kilos.textContent = "";
    pounds.textContent = "";
    metersFeet.textContent = "";
    feetMeters.textContent = "";
    litersGallons.textContent = "";
    gallonsLiters.textContent = "";
    kilosPounds.textContent = "";
    poundsKilos.textContent = "";

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
    poundsKilos.textContent += inputEl.value / 2.204 + " ";*/
})







