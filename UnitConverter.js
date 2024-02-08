/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl1 = document.getElementById("length-el1")
let lengthEl2 = document.getElementById("length-el2")
let lengthEl3 = document.getElementById("length-el3")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function()
{
    let baseValue = inputEl.value
    lengthEl1.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} 
    feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meter` 
    lengthEl2.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} 
    gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(3)} liters` 
    lengthEl3.textContent = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(3)} 
    pounds | ${baseValue} pounds = ${(baseValue/kilogramToPound).toFixed(3)} kilos` 
})



