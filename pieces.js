// Parts Registration System

let weight = 99.5;

// Check if the weight is greater than 100

if (weight >= 100) {
    console.log("The piece has an adequate weight, it can be registered!")
} else {
    console.log("The piece cannot be registered, it does not have the minimum weight!")
}

// List of pieces

let listParts = ["Brake Disc", "Shock", "Crankshaft", "Sail", "Battery", "Radiator", "Belt", "Carter", "Ignition", "Clutch"]

let numberPieces = listParts.length;

if (numberPieces < 10) {
    console.log("The list still has room for more pieces!")
} else {
    console.log("There is no space available in the list, the maximum capacity has been reached!")
} 

// Character verification

let namePiece = "Thread" /*Space is contact as a character*/

if(namePiece.length > 3) {
    console.log("Part name is valid, can follow with registration");
} else {
    console.log("Invalid part name, name must be more than 3 characters")
}