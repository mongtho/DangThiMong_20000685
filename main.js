//Tuan1_2
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const markWeight1 = 78;
const markHeight1 = 1.69;

const JohnWeight1 = 92;
const JohnHeight1 = 1.95;

const markBMI1 = markWeight1 / (markHeight1 ** 2);
const JohnBMI1 = JohnWeight1 / (JohnHeight1 ** 2);

const markHigherBMI1 = markBMI1 > JohnBMI1

const markWeight2 = 95;
const markHeight2 = 1.88;

const JohnWeight2 = 85;
const JohnHeight2 = 1.76;

const markBMI2 = markWeight2 / (markHeight2 ** 2);
const JohnBMI2 = JohnWeight12 / (JohnHeight2 ** 2);

const markHigherBMI2 = markBMI2 > JohnBMI2

console.log(" Data 1 - Mark has a higher BMI :", markHigherBMI1);

console.log(" Data 1 - Mark has a higher BMI :", markHigherBMI2);

// Coding Challenge #2


if (markBMI1 > JohnBMI1) {
    console.log(" data 1 - mark's BMI (${markBMI1.toFixed(1)}) is higher than jons's (${JohnBMI1.toFixed(1)})!");
} else if (markBMI1 > JohnBMI1) {
    console.log(" data 1 - john's BMI (${johnkBMI1.toFixed(1)}) is higher than jons's (${markBMI1.toFixed(1)})!");
} else {
    console.log("Data 1 - Mark and john have the same BMI");
}
if (markBMI2 > JohnBMI2) {
    console.log(" data 2 - mark's BMI (${markBMI2.toFixed(1)}) is higher than jons's (${JohnBMI2.toFixed(1)})!");
} else if (markBMI2 > JohnBMI2) {
    console.log(" data 2 - john's BMI (${johnkBMI2.toFixed(1)}) is higher than jons's (${markBMI2.toFixed(1)})!");
} else {
    console.log("Data 2 - Mark and john have the same BMI");
}
// Coding Challenge #3

function calculateAverage(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
  }
  
  // Function to determine the winner based on average scores and minimum score requirement
  function determineWinner(dolphinsScores, koalasScores, minimumScore) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);
  
    if (dolphinsAverage >= minimumScore && dolphinsAverage > koalasAverage) {
      console.log("Dolphins win!");
    } else if (koalasAverage >= minimumScore && koalasAverage > dolphinsAverage) {
      console.log("Koalas win!");
    } else if (dolphinsAverage >= minimumScore && koalasAverage >= minimumScore && dolphinsAverage === koalasAverage) {
      console.log("It's a draw!");
    } else {
      console.log("No team wins the trophy.");
    }
  }
  
  // Test Data 1
  const dolphinsScores1 = [96, 108, 89];
  const koalasScores1 = [88, 91, 110];
  const minimumScore1 = 100;
  determineWinner(dolphinsScores1, koalasScores1, minimumScore1);
  
  // Test Data Bonus 1
  const dolphinsScores2 = [97, 112, 101];
  const koalasScores2 = [109, 95, 123];
  const minimumScore2 = 100;
  determineWinner(dolphinsScores2, koalasScores2, minimumScore2);
  
  // Test Data Bonus 2
  const dolphinsScores3 = [97, 112, 101];
  const koalasScores3 = [109, 95, 106];
  const minimumScore3 = 100;
  determineWinner(dolphinsScores3, koalasScores3, minimumScore3);
//   Coding Challenge #4

const billValues = [275, 40, 430];

// Calculate the tip using a ternary operator
const tips = billValues.map(bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2);

// Calculate the total bill including the tip
const totalValues = billValues.map((bill, index) => bill + tips[index]);

// Print the results
totalValues.forEach((total, index) => {
  const tip = tips[index];
  const bill = billValues[index];
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
});
// Coding Challenge #5

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Create a function to check the winner and log the result
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
  } else {
    console.log("No team wins!");
  }
}

// Test Data 1
const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);
checkWinner(dolphinsAverage1, koalasAverage1);

// Test Data 2
const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);
checkWinner(dolphinsAverage2, koalasAverage2);

// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// Create objects for Mark and John
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    // Create a method to calculate and return the BMI
    calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    },
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // Create a method to calculate and return the BMI
    calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    },
  };
  
  // Calculate the BMIs
  mark.calcBMI();
  john.calcBMI();
  
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
  }
  // A Closer Look at Functions
  // Coding Challenge #1
  const poll = {
    question: 'What is your favorite programming language?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    answers: new Array(4).fill(0), // Initialize answers array with zeros
  
    registerNewAnswer() {
      const userInput = prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      );
  
      const answer = parseInt(userInput);
  
      if (!isNaN(answer) && answer >= 0 && answer < this.options.length) {
        this.answers[answer]++;
      } else {
        alert('Invalid input. Please enter a valid option number.');
      }
  
      this.displayResults();
    },
  
    displayResults(type = 'array') {
      if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
      } else {
        console.log(this.answers);
      }
    },
  };
  
  // Test the poll app with bonus data
  const bonusData1 = [5, 2, 3];
  const bonusData2 = [1, 5, 3, 9, 6, 1];
  
  poll.displayResults('array'); // Display initial results as an array
  poll.displayResults('string'); // Display initial results as a string
  
  // Register new answers for bonus data
  poll.answers = bonusData1;
  poll.registerNewAnswer();
  poll.answers = bonusData2;
  poll.registerNewAnswer();

  // Coding Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// Working With Arrays
// Coding Challenge #1
const checkDogs = function (dogsJulia, dogsKate) {
  // Create a shallow copy of Julia's data and remove cat ages
  const correctedJulia = [...dogsJulia];
  correctedJulia.splice(0, 1); // Remove the age of the first cat
  correctedJulia.splice(-2);   // Remove the ages of the last two cats

  // Create an array with both Julia's corrected data and Kate's data
  const allDogs = [...correctedJulia, ...dogsKate];

  // Log whether each dog is an adult or a puppy
  allDogs.forEach(function (age, i) {
    const dogType = age >= 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${i + 1} is an ${dogType}, and is ${age} years old.`);
  });
};

// Test data
const data1Julia = [3, 5, 2, 12, 7];
const data1Kate = [4, 1, 15, 8, 3];

const data2Julia = [9, 16, 6, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log('--- Data 1 ---');
checkDogs(data1Julia, data1Kate);

console.log('--- Data 2 ---');
checkDogs(data2Julia, data2Kate);

// Coding Challenge #2
const calcAverageHumanAge = function (ages) {
  // Calculate dog age in human years and filter dogs >= 18 human years old
  const humanAges = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18);

  // Calculate the average human age of all adult dogs
  const sumHumanAges = humanAges.reduce((acc, age) => acc + age, 0);
  const averageHumanAge = sumHumanAges / humanAges.length;

  return averageHumanAge;
};

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Calculate and display the average human age for both datasets
const averageAge1 = calcAverageHumanAge(data1);
const averageAge2 = calcAverageHumanAge(data2);

console.log('Average Human Age for Data 1: ${averageAge1.toFixed(2)} years');
console.log('Average Human Age for Data 2: ${averageAge2.toFixed(2)} years');

// Coding Challenge #3
// Coding Challenge #4
// Test data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Bob', 'Alice'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Step 1: Calculate recommended food portion and add it to each dog object
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Step 2: Find Sarah's dog and log whether it's eating too much or too little
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'too much' : 'too little'
  }`
);

// Step 3: Create arrays for owners of dogs who eat too much or too little
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

// Step 4: Log strings for owners of dogs who eat too much or too little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Step 5: Check if any dog is eating exactly the recommended amount
const anyDogEatingRecommendedAmount = dogs.some(
  dog => dog.curFood === dog.recommendedFood
);
console.log(
  `Any dog eating exactly the recommended amount: ${anyDogEatingRecommendedAmount}`
);

// Step 6: Check if any dog is eating an okay amount (between 90% and 110%)
const anyDogEatingOkayAmount = dogs.some(
  dog =>
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
);
console.log(`Any dog eating an okay amount: ${anyDogEatingOkayAmount}`);

// Step 7: Create an array of dogs eating an okay amount
const dogsEatingOkayAmount = dogs.filter(
  dog =>
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
);

// Step 8: Create a shallow copy of 'dogs' and sort it by recommended food portion
const dogsSortedByRecommendedFood = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);

console.log(dogsSortedByRecommendedFood);

// Object Oriented Programming (OOP)
// Coding Challenge #1
// 1. Create a 'Car' constructor function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2. Implement the 'accelerate' method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
};

// 3. Implement the 'brake' method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
};

// 4. Create 2 'Car' objects and experiment with 'accelerate' and 'brake'
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(`Car 1: ${car1.make} is going at ${car1.speed} km/h`);
console.log(`Car 2: ${car2.make} is going at ${car2.speed} km/h`);

car1.accelerate(); // Accelerate car1
car1.accelerate(); // Accelerate car1 again
car1.brake();      // Brake car1

car2.accelerate(); // Accelerate car2
car2.brake();      // Brake car2

// Coding Challenge #2
// Coding Challenge #3

// Parent class Car
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
};

// Child class EV (Electric Car)
function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

// Inherit methods from Car
EV.prototype = Object.create(Car.prototype);

// Implement the chargeBattery method for EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} battery charged to ${this.charge}%`);
};

// Override the accelerate method for EV
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Create an electric car object
const evCar = new EV('Tesla', 120, 23);

console.log(`Car 1: ${evCar.make} going at ${evCar.speed} km/h, with a charge of ${evCar.charge}%`);

// Experiment with calling methods
evCar.accelerate(); // Accelerate EV
evCar.brake();      // Brake EV
evCar.chargeBattery(90); // Charge the battery to 90%
// Coding Challenge #4
// ASYNCHRONOUS JAVASCRIPT
// Coding Challenge #1
// PART 1:

async function whereAmI(lat, lng) {
  try {
    const response = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!response.ok) throw new Error('Problem getting location data.');

    const data = await response.json();
    console.log(`You are in ${data.city}, ${data.country}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Test with coordinates
whereAmI(52.508, 13.381); // Berlin, Germany
whereAmI(19.037, 72.873); // Mumbai, India
whereAmI(-33.933, 18.474); // Cape Town, South Africa


// PART 2:

async function whereAmI(lat, lng) {
  try {
    const response = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!response.ok) throw new Error('Problem getting location data.');

    const data = await response.json();
    console.log(`You are in ${data.city}, ${data.country}`);

    const country = data.country;
    const countryResponse = await fetch(`https://restcountries.com/v3/name/${country}`);
    if (!countryResponse.ok) throw new Error('Problem getting country data.');

    const countryData = await countryResponse.json();
    console.log(`Country: ${countryData[0].name.common}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Test with coordinates
whereAmI(52.508, 13.381); // Berlin, Germany
whereAmI(19.037, 72.873); // Mumbai, India
whereAmI(-33.933, 18.474); // Cape Town, South Africa

//
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      document.querySelector('.images').appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error(`Image not found: ${imgPath}`)));
  });
}

async function loadNPause(imgPath) {
  try {
    const img = await createImage(imgPath);
    await wait(2000);
    img.style.display = 'none';

    const nextImgPath = 'img/img-2.jpg'; // Replace with the next image path
    const nextImg = await createImage(nextImgPath);
    await wait(2000);
    nextImg.style.display = 'none';
  } catch (error) {
    console.error(error.message);
  }
}

// Test with image paths
loadNPause('img/img-1.jpg');

async function loadAll(imgArr) {
  try {
    const promises = imgArr.map(imgPath => createImage(imgPath));
    const imgs = await Promise.all(promises);
    imgs.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error.message);
  }
}
// Test with an array of image paths
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
loadAll(imgArr);




