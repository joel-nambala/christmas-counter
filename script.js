'use strict';

const addZero = function (num) {
  return num < 10 ? `0${num}` : num;
};

const countdown = function () {
  const future = new Date('2022 12 25 00:00:00').getTime();
  const today = new Date().getTime();
  const gap = future - today;

  // Get time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap > 0) {
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
    const counter = `${addZero(days)}: ${addZero(hours)}: ${addZero(
      minutes
    )}: ${addZero(seconds)}`;

    document.querySelector('h1').textContent = counter;
  } else {
    alert('Counter has expired/merry christmass');
  }
};

// countdown();
setInterval(countdown, 1000);
