// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let fuelTempCelsius = -225
let fuelLevel = 100.0
let weatherStatus = "clear"
let takeoff = "YES"
let dash = "-------------------------------------"
const input = require('readline-sync');
astronautCount = input.question("How many astronauts are there? ");
// Write code to generate the LC04 report here:
function generate(){
  automate("LC04 - LAUNCH CHECKLIST", [date, time], ["Date", "Time"], false, ["",""])
  automate("ASTRONAUT INFO" , [astronautCount, astronautStatus], ["count", "status"], true, ["",""])
  automate("FUEL DATA", [fuelTempCelsius, fuelLevel], ["fuel temp celsius", "fuel level"], true, ["C","%"])
  automate("MASS DATA", [crewMassKg, fuelMassKg, shuttleMassKg, totalMassKg], ["Crew Mass", "Fuel mass", "Shuttle mass", "Total mass"], true, ["kg","kg","kg","kg"])
  automate("FLIGHT PLAN", [weatherStatus], ["weather"], true, [""])
  automate("OVERALL STATUS", [takeoff], ["Clear for takeoff"], true, [""])
}

function automate(title, listofitems, listoftitles, tab, suffix){
  console.log(dash)
  console.log("> " + title)
  console.log(dash)
  if(!tab){listofitems.forEach((element, index) => console.log(listoftitles[index] + ": " + element + " " + suffix[index])) }
  else{listofitems.forEach((element, index) => console.log("* " + listoftitles[index] + ": " + element + " " + suffix[index])) }
  console.log("")
}

// When done, have your TA check your code.
generate()



// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.