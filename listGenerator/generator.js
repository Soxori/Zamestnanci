let names = ["Jana", "Petr", "Pavel", "Jaroslav", "Jan", "Jiří", "Eva", "Marie", "Hana", "Miroslav"];
let surnames = ["Novák", "Novotný", "Svoboda", "Svobodová", "Nováková", "Dvořáková", "Kovář", "Kovářová", "Novotná", "Svobodová"];

// input data for generator
const dtoIn = {
    count: 50,
    age: {
      min: 19,
      max: 35
    }
}

// function for generating list of employees with random properties
function main(dataInput) {
    const dtoOut = [];
    for (let i = 0; i < dataInput.count; i++) {
        dtoOut.push({
            gender: randomGender(),
            birthdate: randomBirthdate(),
            name: randomName(),
            surname: randomSurname(),
            workload: randomWorkload()
        });
    }
    return dtoOut;
}
console.log(main(dtoIn));

// functions for generating random names, surnames, ages, workloads and gender of employees
function randomName() {
  return names[Math.floor(Math.random() * names.length)];
}
function randomSurname() {
  return surnames[Math.floor(Math.random() * surnames.length)];
}
function randomBirthdate() {
  let age = Math.floor(Math.random() * (dtoIn.age.max - dtoIn.age.min + 1)) + dtoIn.age.min;
  return new Date(new Date().setFullYear(new Date().getFullYear() - age)).toISOString();
}
function randomWorkload() {
  return Math.round(Math.random() * 3 + 1) * 10;
}
function randomGender() {
  return Math.random() < 0.5 ? "Male" : "Female"; //50% chance
}