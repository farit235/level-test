document.addEventListener("DOMContentLoaded", () => {
  let timer;
  let x = 1800000; // 30 mins in miliseconds
  let seconds = x / 1000;
  let mins = seconds / 60;
  let showSec = 59;
  let flag = 0;
  countdown();
  function countdown() {
    document.querySelector(".time-count-minutes .time-count-val").innerHTML =
      mins;
    document.querySelector(".time-count-seconds .time-count-val").innerHTML =
      showSec;

    seconds--;

    if (seconds < 0) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(countdown, 1000);
      flag++;
      showSec--;
    }

    if (flag == 60) {
      mins--;
      flag = 0;
      showSec = 59;
    }
  }
});
