let currentDate = new Date();
// document.write(currentDate + "<br><br>");
// let userAge = +prompt("Enter your age");
// // let calculateAge = currentDate.getFullYear() - Number(userAge);
// let calculateAge = currentDate.getFullYear() - Number(userAge);
// document.write("Your age is: " + userAge + "<br>");
// document.write("Your birth year is: " + calculateAge + "<br><br>");

// let Dob = +prompt("Enter your Date Of Birth");
// console.log(Dob);
let YOB = +prompt("What is your Year of Birth?");

if (YOB === 0) {
  alert("Please enter a Year of Birth");
}
// console.log(YOB.trim());
// if (YOB.trim() === "") {
//   alert("You didn't enter anything!");
// }
// console.log(YOB);
// if (YOB === null) {
//   alert("Please enter a Year of Birth");
// }
const currentYear = currentDate.getFullYear() - YOB;
document.write("Your age is: " + YOB + "<br>");
document.write("Your birth year is: " + currentYear);
// alert(`You are ＄{currentYear - YOB} years old!`); // You are 100 years old!
