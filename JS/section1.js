const totalHours = 69;
const speed = 1.4;

const estimatedTime = 69 / 1.4;

console.log(estimatedTime);

const hourPerDay = 8;

const estimatedDaysToFinish = estimatedTime / hourPerDay;

console.log(
  "Estimated days to finish the whole javascript tuts is: " +
    estimatedDaysToFinish +
    " days"
);

//----------Coding Challenge: 1------------------

// const BMI = (mass, height) => {
//     let bmi = mass / (height ** 2);

//     return bmi;
// }

// const markHeight = Number(prompt("What is the height of Mark?"));
// const markWeight = Number(prompt("What is the weight of Mark?"));

// const markBMI = BMI(markWeight, markHeight);

// const johnHeight = 1.95;
// const johnWeight = 92;

// const johnBMI = BMI(johnWeight, johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// console.log(`Mark is ${markHeight}m tall and he weighs about ${markWeight}kg.`)
// console.log("Mark's BMI is: " + markBMI);
// console.log("John's BMI is: " + johnBMI);

// if (markHigherBMI) {
//     console.log("Mark has a higher BMI than John.");
// } else {
//     console.log("John has a higher BMI than Mark");
// }

// //template literals

// const statement = `John's BMI is ${johnBMI}, and Mark's BMI is ${markBMI}. John has ${markBMI - johnBMI} BMI less than Mark.`

// console.log(statement);

//-----------end of coding challenge 1--------------

const Ibrahim = 5.5;

const isOldEnough = Ibrahim >= 6;

if (isOldEnough) {
  console.log(`Ibrahim is old enough for BF-2 Milk.`);
} else {
  console.log(
    `Ibrahim is ${6 - Ibrahim} month away from starting the BF-2 Milk.`
  );
}

//---------------------Coding challenge 3----------------------

// const avg = (num1, num2, num3) => {
//     return ((num1 + num2 + num3) / 3);
// }

// const hasHundred = (num1, num2, num3) => {
//     if (num1 >= 100) {
//         return true;
//     } else if (num2 >= 100) {
//         return true;
//     } else if (num3 >= 100) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const d1 = 96, d2 = 108, d3 = 89;

// const k1 = 88, k2 = 91, k3 = 110;

// const dolphinAvg = avg(d1, d2, d3);
// const koalaAvg = avg(k1, k2, k3);

// console.log(`Dolphin: ${dolphinAvg} and Koala: ${koalaAvg}`);

// const dolphinHasHundred = hasHundred(d1, d2, d3);
// const koalaHasHundred = hasHundred(k1, k2, k3);

// console.log(
//     `
//     Dolphin has hundred: ${dolphinHasHundred}
//     Koala has hundred: ${koalaHasHundred}
//     `
// )

// if (dolphinAvg > koalaAvg && dolphinHasHundred) {
//     console.log(`The dolphins are the winner!`)
// } else if (dolphinAvg === koalaAvg && dolphinHasHundred && koalaHasHundred) {
//     console.log(`The game is a draw as the both team has same score.`)
// } else if (koalaAvg > dolphinAvg && koalaHasHundred) {
//     console.log(`The koalas are the winner!`)
// } else if (!dolphinHasHundred && !koalaHasHundred) {
//     console.log(`No team has won the trophy.`)
// }

//-----------------coding challenge 3-------------------------------

const date = new Date();

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

let today = weekdays[date.getDay()];
 
switch (today) {
  case "Monday":
    console.log(`Work on your coding skills and code for at least 8 hours.`);
    break;
  case "Tuesday":
    console.log(`Check your emails for new interviews.`);
    break;
  case "Wednesday":
    console.log(`Search new jobs opening in Linkedin.`);
    break;
  case "Thursday":
    console.log(`Go to market for the stacks.`);
    break;
  case "Friday":
    console.log(`Tanzeela's holiday. Spend time wiht her.`);
    console.log(`Go and pray the Jummah prayer.`);
    break;
  case "Saturday":
    console.log(`Take Tanzeela out today. She is home today.`);
    break;
  case "Sunday":
    console.log(`Enjoy the weekend. Check if Ridwan is available or not.`);
    break;
  default:
    console.log(
      `Please, give the correct day. Most probably, you missplled the day.`
    );
}

//----------------------------------------------------

NAA3QNYV2BKMWTKQ

NAA3Q2B5YCY5PRYW








const age = 16;

age >= 14 ? console.log(`You are allowed to drive in USA.`) : console.log(`You are not allowed to drive in USA.`);

const drink = age >= 18 ? 'wine' : 'water'; 

console.log(`You will only get to drink ${drink}.`);

console.log(`I would like a glass of ${age >= 18 ? 'wine' : 'water'}.`);


//-----------coding challenge 4------------------------

let bill = 430; 

(bill >= 50 && bill <= 300) ? tip = bill * .15 : tip = bill * .20;

console.log(`The bill was ${bill}, the tip was ${(bill >= 50 && bill <= 300) ? bill * .15 : bill * .20}, and the total value ${bill + tip}`);
