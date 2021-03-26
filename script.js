var age = 22;
if (age >= 18 && age <= 25) {
    console.log("Goedenavond welkom, je krijgt 50% korting op je drankjes! Kom binnen!");
} else if (age > 26){
    console.log("Goedenavond welkom, kom erin!");
} else if (age < 18){
    console.log("Goedenavond! Ik kan je helaas niet binnenlaten, je bent te jong.");
} 

var name = "Sarah";
if (name == "Sarah" || name == "Bram"){
    console.log("Wij vieren onze 50e verjaardag en jíj krijgt een gratis biertje!");
} 

var totalAmount = 100;
if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Bedankt voor je bestelling! Je krijgt er gratis (vega)bitterballen bij!");
} else if (totalAmount > 50 && totalAmount < 100){
    console.log("Bedankt voor je bestelling! Je krijgt er gratis een portie nachos!");
} else if (totalAmount >= 100){
    console.log("Bedankt voor je bestelling! Je krijgt er gratis een flesje champagne bij!");
} 

var isFemale = true;
if (isFemale){
    console.log("Bedankt dame, loop maar door, fijne avond!");
} else {
    console.log("Helaas jongeman ik kan je niet binnenlaten, het is vanavond ladiesnight.");
} 

var driverStatus = "bob";
if (driverStatus == "bob"){
    console.log("Geen slokje alcohol, super! Zorg jij dat je vriendinnen veilig thuiskomen?");
} else {
    console.log("Je hebt teveel gedronken, je mag zo niet naar huis rijden. Zal ik een taxi voor je bellen?");
} 