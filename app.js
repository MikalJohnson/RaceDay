let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnersAge = 18;

if (earlyReg === true && runnersAge >= 18) {
    raceNumber += 1000;
    console.log(`Your race will start at 9:30am. ${raceNumber}`);
} else if (earlyReg === false && runnersAge >=18) {
    console.log(`Your race will start at 11:00am. ${raceNumber}`)
} else if (runnersAge < 18) {
    console.log(`Your race will start at 12:30pm. ${raceNumber}`)
} else {
    console.log(`Go to the registation desk.`)
}