'use strict';

const countDays = document.querySelector('.countdown-days');
const countHours = document.querySelector('.countdown-hours');
const countMinutes = document.querySelector('.countdown-minutes');
const countSeconds = document.querySelector('.countdown-seconds');

const addZero = function (num) {
  return num < 10 ? `0${num}` : num;
};

const countdown = function () {
  // Get the future and present timestamp
  const future = new Date('2022 12 25 00:00:00').getTime();
  const today = new Date().getTime();

  // Substratc the timestamps to get the gap
  const gap = future - today;

  // Get time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Get the time remaining till christmass
  if (gap > 0) {
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Update the counter and display to the UI
    countDays.textContent = addZero(days);
    countHours.textContent = addZero(hours);
    countMinutes.textContent = addZero(minutes);
    countSeconds.textContent = addZero(seconds);

    const counter = `${addZero(days)} : ${addZero(hours)} : ${addZero(
      minutes
    )} : ${addZero(seconds)}`;

    console.log(counter);
  } else {
    // Counter has expired
    alert('Counter has expired/merry christmass');
  }
};

// Call the counter function every second
setInterval(countdown, 1000);
