// const age = 22;
// const name = "Sarah";
// const totalAmount = 100;
// const isFemale = true;
//const driverStatus = "bob";

//Testdata
const age = 32;
const name = "Bram";
const totalAmount = 35;
const isFemale = false;
const driverStatus = "dronken";

if (age >= 18 && age <= 25) {
    console.log("Goedenavond welkom, je krijgt 50% korting op je drankjes! Kom binnen!");
} else if (age > 26){
    console.log("Goedenavond welkom, kom erin!");
} else if (age < 18){
    console.log("Goedenavond! Ik kan je helaas niet binnenlaten, je bent te jong.");
} 

if (name == "Sarah" || name == "Bram"){
    console.log("Wij vieren onze 50e verjaardag en omdat jij Sarah of Bram heeft, krijg jíj een gratis biertje!");
} 

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Bedankt voor je bestelling! Je krijgt er gratis (vega)bitterballen bij!");
} else if (totalAmount > 50 && totalAmount < 100){
    console.log("Bedankt voor je bestelling! Je krijgt er gratis een portie nachos!");
} else if (totalAmount >= 100){
    console.log("Bedankt voor je bestelling! Je krijgt er gratis een flesje champagne bij!");
} 

if (isFemale){
    console.log("Bedankt dame, loop maar door, fijne avond!");
} else {
    console.log("Helaas ik kan je niet binnenlaten, het is vanavond ladiesnight.");
} 

if (driverStatus == "bob"){
    console.log("Geen slokje alcohol, super! Zorg jij dat je vriendinnen veilig thuiskomen?");
} else {
    console.log("Je hebt teveel gedronken, je mag zo niet naar huis rijden. Zal ik een taxi voor je bellen?");
} 
