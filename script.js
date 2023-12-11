'use strict';

const countDays = document.querySelector('.countdown-days');
const countHours = document.querySelector('.countdown-hours');
const countMinutes = document.querySelector('.countdown-minutes');
const countSeconds = document.querySelector('.countdown-seconds');
const countdownCard = document.querySelector('.countdown-card');
const countdownTitle = document.querySelector('.countdown-title');

const addZero = function (num) {
  return num < 10 ? `0${num}` : num;
};

const year = new Date().getFullYear();

const countdown = function () {
  // Get the future and present timestamp
  const future = new Date(`${year} 12 25 00:00:00`).getTime();
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
  } else {
    countdownCard.innerHTML = '';
    // Counter has expired
    const html = `<h2 class="count-expired">Merry christmas</h2>`;
    countdownCard.insertAdjacentHTML('beforeend', html);

    countdownTitle.textContent = 'Happy holidays';
  }
};

// Call the counter function every second
setInterval(countdown, 1000);
