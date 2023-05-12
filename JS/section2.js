//--------------strict mode---------------
"use strict";
//--------------strict mode---------------

// functions

// function logger(name) {
//   console.log(`My name is ${name}.`);
// }
//calling, running, invoking
// logger("dr.zola");

// function ageCalculator(birthYear) {
//   const date = new Date();
//   let year = date.getFullYear();

//   return year - birthYear;
// }

// const age1 = ageCalculator(1992);

// console.log(age1);

// arrow function
// const calcAge = (birthYear) => 2039 - birthYear;

// console.log(calcAge(2004));

// //---------------

// const ageCalc = (birthYear) => {
//   const date = new Date();
//   let year = date.getFullYear();

//   return `You are ${year - birthYear} old.`;
// };

// console.log(ageCalc(1995));

//-------------codling challenge 1 ----------------------

const checkWinner = (dolphin, koala) => {
  if (dolphin >= koala * 2) {
    return console.log(`Dolphins win (${dolphin} vs. ${koala})`);
  } else if (koala >= dolphin * 2) {
    return console.log(`Koalas win (${koala} vs. ${dolphin})`);
  } else {
    return console.log(`Nobody wins!`);
  }
};

const avg = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

checkWinner(avg(44, 23, 71), avg(65, 54, 49));
checkWinner(avg(41, 54, 85), avg(23, 34, 27));

//------------coding challenge 1 -----------------------------

// Arrays

const ageCalc = (birthYear) => {
  const date = new Date();
  let year = date.getFullYear();

  return `You are ${year - birthYear} old.`;
};

console.log(ageCalc(1995));

const years = [1990, 1967, 1965, 2000, 2011, 1988];

years.push(1999);

console.log(years);

years.unshift(1899);

console.log(years);

//-----------------------coding challenge------------------------------

let bill = 430;

let tip;

bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }, and the total value ${bill + tip}`
);

//------------------------objects-----------------------------------------

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas.friends[1]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }


// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

//-------------------------------

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    },
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
  

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

//--------coding challenge-------------

// function calcBMI(height, weight) {
//     return (weight / (height ** 2));
// };

const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.65,
    weight: 92,
    calcBMI: function () {
        this.bmi = (this.weight / (this.height ** 2));
        return this.bmi;
    }
};

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.bmi = (this.weight / (this.height ** 2));
        return this.bmi
    }
};

function compareBMI(johnBmi, markBmi) {
    if (johnBmi > markBmi) {
        return (console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`));
    } else if (markBmi > johnBmi) {
        return (console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`));
    } else {
        return (console.log(`${john.firstName} and ${mark.firstName} have the same BMI!`));
    }
}

// console.log(calcBMI(1.65, 92));

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI()
console.log(john.bmi);

compareBMI(john.bmi, mark.bmi);

//---------------------------------

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
    23
];
  

const dataType = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    dataType.push(typeof jonasArray[i]);
}

console.log(dataType);


//=================================================

// let binary = [];

// function textToNumberBinary(str) {
// 	//"Zero one zero ONE zero one zero one"
// 	//work flow, create an array from the strings, check the then items, and print, 
// 	let binary = [];
//   const array = str.split(" ");
	
// 	for (let i=0; i<array.length; i++) {
// 		if (array[i].toLowerCase() === 'one') { //used toLowerCase() to avaoid the case sensitive issue.
// 			binary.push(1);
// 		} else if (array[i].toLowerCase() === 'zero'){
// 			binary.push(0)
//     } else {
//       continue;
//     }
//   }
  
//   if (binary.length % 8 == 0) {
//     return(binary.join(""));
//   } else if (binary.length % 8 > 0){
//     return(binary.slice(0, 8).join(""));
//   } else {
//     return (``);
//   }
// }

// let string = "zero one zero one zero one zero three"
// textToNumberBinary(string);

// if (binary.length)


// // textToNumberBinary("zero one zero one zero one zero one") 

// // textToNumberBinary("Zero one zero ONE zero one zero one") 

// // textToNumberBinary("zero one zero one zero one zero one one two") 

// // textToNumberBinary("zero one zero one zero one zero three")

// // textToNumberBinary("one one")

// function textToNumberBinary(str) {
// 	//"Zero one zero ONE zero one zero one"
// 	//work flow, create an array from the strings, check the then items, and print, 
// 	let binary = [];
//   const array = str.split(" ");
	
// 	for (let i=0; i<array.length; i++) {
// 		if (array[i].toLowerCase() === 'one') { //used toLowerCase() to avaoid the case sensitive issue.
// 			binary.push(1);
// 		} else if (array[i].toLowerCase() === 'zero'){
// 			binary.push(0)
//     } else {
//       continue;
//     }
//   }
  
// //  if (binary.length >= 8) {
// //    return(binary.slice(0, 8).join(""));
// //  } else {
// //    return(``)
// //  }
	
// 	let end = binary.length % 8;
	
// 	  if (end === 0) {
//     return(binary.join(""));
//   } else if (binary.length > 8){
// 		limit = binary.length - end;
//     return(binary.slice(0, limit).join(""));
//   } else {
//     return (``);
//   }
// }

