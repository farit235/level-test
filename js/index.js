document.addEventListener("DOMContentLoaded", () => {
  let timer; // пока пустая переменная
  let x = 1800000; // стартовое значение обратного отсчета
  let seconds = x / 1000;
  let mins = seconds / 60;
  let showSec = 59;
  let flag = 0;
  countdown(); // вызов функции
  function countdown() {
    // // функция обратного отсчета
    document.querySelector(".time-count-minutes .time-count-val").innerHTML =
      mins;
    document.querySelector(".time-count-seconds .time-count-val").innerHTML =
      showSec;

    seconds--; // уменьшаем число на единицу

    if (seconds < 0) {
      clearTimeout(timer); // таймер остановится на нуле
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
    console.log(seconds);
    console.log(mins);
  }
});
