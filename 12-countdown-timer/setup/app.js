const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2022,5,27,11,30,0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in ms

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
}
getRemainingTime();


let person = {
  name: 'king',
  age: 35,
  country: 'dubai'
}
 
// const logData = () => {
//   let me = `${person.name} is ${person.age} years old and lives in ${person.country}`;
//   console.log(me);
// }

// logData();

let hands = ['rock', 'paper', 'scissor']
let me = [];

const getFirst = (arr) => {
  return arr[0];
}

console.log(getFirst(hands));
// const getHand = () => {
//   let randomIndex = Math.floor(Math.random() * hands.length) 
//   return hands[randomIndex];
  
// }
// console.log(getHand())

