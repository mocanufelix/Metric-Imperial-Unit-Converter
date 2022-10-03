/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function convertUnit(){
  let inputValue = document.getElementById("input-value").value;
  let initialValue = inputValue;
  let meterToFeet = inputValue * 3.2808399;
  let feetToMeter = inputValue * 1/3.2808399;
  //console.log(result);
  let displayValueLength = document.getElementById("display-value-length");
  displayValueLength.innerText = initialValue + " meters" + " = " + meterToFeet.toFixed(3) + " feet " + "| " + initialValue + " feet" + " = " + feetToMeter.toFixed(3) + " meters";
  
  let literToGallon = inputValue * 0.26417205236;
  let gallonToLiter = inputValue * 1/0.26417205236;
  let displayValueVolume = document.getElementById("display-value-volume");
  displayValueVolume.textContent = initialValue + " liters" + " = " + literToGallon.toFixed(3) + " gallons " + "| " + initialValue + " gallons" + " = " + gallonToLiter.toFixed(3) + " liters";

  let kilogramToPound = inputValue * 2.20462262;
  let poundToKilogram = inputValue * 1/2.20462262;
  let displayValueMass = document.getElementById("display-value-mass");
  displayValueMass.textContent = initialValue + " kilos" + " = " + kilogramToPound.toFixed(3) + " pounds " + "| " + initialValue + " pounds" + " = " + poundToKilogram.toFixed(3) + " kilos";
}

