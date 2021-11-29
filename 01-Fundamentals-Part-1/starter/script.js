var tip15 = 15;
var tip20 = 20;
var bill = 275;
var tip = bill > 50 && bill < 300 ? bill * tip15 / 100 : bill * tip20 / 100;

console.log (tip)