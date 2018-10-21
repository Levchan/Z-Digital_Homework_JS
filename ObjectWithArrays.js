'use strict'

let englishCities = ["London", "Liverpool", "York"];
let germanianCities = ["Essen", "Berlin"];
let spainishCities = ["Madrid" , "Barcelona", "Sevillia"];

let arrayOfCities = {
  England : englishCities,
  Germany : germanianCities,
  Spain : spainishCities
}

let i;
for(i = spainishCities.length; i>=0; i--)
{
  console.log(arrayOfCities.Spain[i]);
}
