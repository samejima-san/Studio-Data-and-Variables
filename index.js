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

// Write code to generate the LC04 report here:
function generate(){
  automate("LC04 - LAUNCH CHECKLIST", [date, time], ["Date", "Time"])
  automate("ASTRONAUT INFO" , [astronautCount, astronautStatus], ["count", "status"])
  automate("FUEL DATA", [fuelTempCelsius, fuelLevel], ["fuel temp celsius", "fuel level"])
  automate("MASS DATA", [crewMassKg, fuelMassKg, shuttleMassKg, totalMassKg], ["Crew Mass", "Fuel mass", "Shuttle mass", "Total mass"])
  automate("FLIGHT PLAN", [weatherStatus], ["weather"])
  automate("OVERALL STATUS", [takeoff], ["Clear for takeoff"])
}

function automate(title, listofitems, listoftitles){
  console.log(dash)
  console.log("> " + title)
  console.log(dash)
  listofitems.forEach((element, index) => console.log("* " + listoftitles[index] + ": " + element))
  console.log("")
}

// When done, have your TA check your code.
generate()



// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.