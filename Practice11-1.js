let clockTarget = document.getElementById("clock");
function clock() {
  let date = new Date();
  let hours = date.getHours(); //getHours() 메서드는 주어진 날짜의 현지 시간 기준 시를 반환합니다. (MDN출처)
  let minutes = date.getMinutes(); //getMinutes() 메서드는 Date 인스턴스의 분을 현지 시간 기준으로 반환합니다. (MDN출처)
  let seconds = date.getSeconds(); //getSeconds() 메서드는 Date 객체의 초 값을 현지 시간에 맞춰 반환합니다 (MDN출처)
  clockTarget.innerText = `${hours}:${minutes}:${seconds}`;
  }

function time() {
  clock();
  setInterval(clock, 1000);
  }

time();
