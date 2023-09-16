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
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

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