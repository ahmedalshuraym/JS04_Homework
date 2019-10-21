//Assignment 2: Random Address Generator

//array
let streetNumber = ['443', '442', '441', '445']

let streetName = ['King Abdelaziz Road', 'King Fahad Road', 'King Abdullah Road', 'King Salman Road']

let cityName = ['Riyadh', 'Jeddah', 'Dammam', 'Tabuk',]

let stateName = ['East State', 'West State' , 'Soth State', 'North State' ]

let zipCode = ['123', '345', '678', '012']


// random 
var random1 = streetNumber  [Math.floor(Math.random() * streetNumber.length)];
var random2= streetName   [Math.floor(Math.random() * streetName.length)];
var random3 = cityName   [Math.floor(Math.random() * cityName.length)];
var random4= stateName   [Math.floor(Math.random() * stateName.length)];
var random5 = zipCode   [Math.floor(Math.random() * zipCode.length)];

//console

console.log(random1 + ' --- ' + random2 + ' --- ' + random3 + ' --- ' + random4 + ' --- ' + random5)


//Ahmed Alshuraym
