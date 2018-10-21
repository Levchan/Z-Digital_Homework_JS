'use strict'

let side1 = 4, side2 = 4, side3 = 9;

if(side1+side2 > side3 && side2+side3 > side1 && side1+side3 > side2)
  console.log("Triangle exists");
else
    console.log("Triangle doesn't exist");
