let names = ["Jana", "Petr", "Pavel", "Jaroslav", "Jan", "Jiří", "Eva", "Marie", "Hana", "Miroslav"];
let surnames = ["Novák", "Novotný", "Svoboda", "Svobodová", "Nováková", "Dvořáková", "Kovář", "Kovářová", "Novotná", "Svobodová"];

// input data for generator
const dtoIn = {
    count: 5,
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
            workload: randomWorkload(),
        });
    }
    console.log("Check");
    console.log(summary(dtoOut));
    return dtoOut;
}
console.log(main(dtoIn));

// function for sorting employees by workload
function summary(listOfEmployees) {
  // get amount of employees in dToOut array
  let amountOfEmployees = listOfEmployees.length;
  // get amount of employees with workload 10, 20, 30, 40 in one cycle
  let workload10 = 0;
  let workload20 = 0;
  let workload30 = 0;
  let workload40 = 0;
  for (let i = 0; i < amountOfEmployees; i++) {
    if (listOfEmployees[i].workload === 10) {
      workload10++;
    } else if (listOfEmployees[i].workload === 20) {
      workload20++;
    } else if (listOfEmployees[i].workload === 30) {
      workload30++;
    } else if (listOfEmployees[i].workload === 40) {
      workload40++;
    }
  }
  
  const summaryArray = [];
  summaryArray.push({
    total: amountOfEmployees,
    workload10: workload10,
    workload20: workload20,
    workload30: workload30,
    workload40: workload40,
  });
  return summaryArray;
}

// functions for generating random names, surnames, ages, workloads and gender of employees
function randomName() {
  return names[Math.floor(Math.random() * names.length)];
}
function randomSurname() {
  return surnames[Math.floor(Math.random() * surnames.length)];
}
function randomBirthdate() {
  let age = Math.floor(Math.random() * (dtoIn.age.max - dtoIn.age.min + 1)) + dtoIn.age.min;
  return new Date(new Date().setFullYear(new Date().getFullYear() - age, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28))).toISOString();
}
function randomWorkload() {
  return Math.round(Math.random() * 3 + 1) * 10;
}
function randomGender() {
  return Math.random() < 0.5 ? "Male" : "Female"; //50% chance
}