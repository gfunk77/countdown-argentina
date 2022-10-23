"use strict";
// create an array with the months of the year
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
// create an array with the days of the week
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// select elements - calendar date, container of countdown, the individual numbers for the countdown (h4)

const calendar = document.querySelector(".calendar-date");
const countdown = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-format h4");

// store countdown end date in a variable
// year, month, date, hour, minute, seconds
let futureDate = new Date(2023, 7, 11, 12, 47, 0);

// store each of those individual values into variables

// weekday returns a number, requires array to get name
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
// months returns a number. Use array to get the name
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

// store future date in milliseconds
const futureTime = futureDate.getTime();

// create a function which will calculate the the remaining time
function getRemainingTime() {
  // store current time in a variable
  const today = new Date().getTime();
  //   store difference in a variable
  const x = futureTime - today;
  //   convert days, hours, minutes into milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //  calculate the difference for each, store in a variable
  let days = x / oneDay;
  // use Math.floor to get integers for each
  days = Math.floor(days);
  // for the rest, use modulus operator then divide
  let hours = Math.floor((x % oneDay) / oneHour);
  let minutes = Math.floor((x % oneHour) / oneMinute);
  let seconds = Math.floor((x % oneMinute) / 1000);

  //   create a values array with the calculations
  const values = [days, hours, minutes, seconds];
  //   create a function to format the display if the value is less than ten
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  //   loop over the items element from the beginning and set item.innerHTML = format(values[index])
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  //   write conditional for when countdown expires
  if (x < 0) {
    // use clearInterval()
    clearInterval(counter);
    // replace counter with a message
    countdown.innerHTML = `<h4 class="expired">adios amigos!</h4>`;
  }
}
// use setInterval() to make counter run smoothly by the second
let counter = setInterval(getRemainingTime, 1000);
// invoke function
getRemainingTime();
