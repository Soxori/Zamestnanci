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
    console.log(summary(dtoOut));
    return dtoOut;
}
main(dtoIn);

// function for sorting employees by workload
function summary(listOfEmployees) {
  let amountOfEmployees = listOfEmployees.length;
  // get amount of employees with workload 10, 20, 30, 40
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

  // get average age of employees by substraction of their birthdate from current year 
  let averageAge = 0;
  for (let i = 0; i < amountOfEmployees; i++) {
    birthdate = new Date(listOfEmployees[i].birthdate);
    averageAge += new Date().getFullYear() - birthdate.getFullYear();
  }

  //get average workload of employees with gender female 
  let averageWomenWorkload = 0;
  let amountOfWomen = 0;
  for (let i = 0; i < amountOfEmployees; i++) {
      if(listOfEmployees[i].gender === "Female") {
      averageWomenWorkload += listOfEmployees[i].workload;
      amountOfWomen++;
    }
  }
  averageWomenWorkload = Math.floor(averageWomenWorkload / amountOfWomen);

  averageAge = Math.round((averageAge / amountOfEmployees) * 10) / 10;
  // get minimum and maximum age of employees
  let maxAge = new Date(listOfEmployees[0].birthdate);
  let minAge = new Date(listOfEmployees[0].birthdate);
  for (let i = 0; i < amountOfEmployees; i++) {
    birthdate = new Date(listOfEmployees[i].birthdate);
    if (birthdate.getFullYear() < maxAge.getFullYear()) {
      maxAge = birthdate;
    } else if (birthdate.getFullYear() > minAge.getFullYear()) {
      minAge = birthdate;
    }
  }
  maxAge = new Date().getFullYear() - maxAge.getFullYear();
  minAge = new Date().getFullYear() - minAge.getFullYear();

  //get median age of employees
  let medianAge = 0;
  let sortedBirthdate = listOfEmployees.sort((a, b) => new Date(a.birthdate) - new Date(b.birthdate));
  if (amountOfEmployees % 2 === 0) {
    let firstMiddle = new Date(sortedBirthdate[amountOfEmployees / 2 - 1].birthdate);
    let secondMiddle = new Date(sortedBirthdate[amountOfEmployees / 2].birthdate);
    medianAge = Math.round((firstMiddle.getFullYear() + secondMiddle.getFullYear()) / 2);
  } else {
    medianAge = new Date(sortedBirthdate[Math.floor(amountOfEmployees / 2)].birthdate).getFullYear();
  }
  medianAge = new Date().getFullYear() - medianAge;

  // get median workload of employees
  let medianWorkload = 0;
  let sortedWorkload = listOfEmployees.sort((a, b) => a.workload - b.workload);
  if (amountOfEmployees % 2 === 0) {
    let firstMiddle = sortedWorkload[amountOfEmployees / 2 - 1].workload;
    let secondMiddle = sortedWorkload[amountOfEmployees / 2].workload;
    medianWorkload = Math.round((firstMiddle + secondMiddle) / 2);
  } else {
    medianWorkload = sortedWorkload[Math.floor(amountOfEmployees / 2)].workload;
  }

  const summaryArray = [];
  summaryArray.push({
    total: amountOfEmployees,
    workload10: workload10,
    workload20: workload20,
    workload30: workload30,
    workload40: workload40,
    averageAge: averageAge,
    minAge: minAge,
    maxAge: maxAge,
    medianAge: medianAge,
    medianWorkload: medianWorkload,
    averageWomenWorkload: averageWomenWorkload,
  }, sortedWorkload);
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