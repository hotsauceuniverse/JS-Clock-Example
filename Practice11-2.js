//현재 시간을 출력
let clockTarget = document.getElementById("clock");
function clock() {
  let date = new Date();
  let hours = date.getHours(); 
  let minutes = date.getMinutes(); 
  let seconds = date.getSeconds(); 
  clockTarget.innerText = `${hours}:${minutes}:${seconds}`;
  }

// 중지를 위해 ID 보관 
  let timerId = null;
  
// 시계 시작   
  function start() {   
    clock();   
    timerId = setInterval(clock, 1000);   
  } 
  
// 시계 중지  
  function stop() {
    if(timerId != null) {
      clearInterval(timerId);
    }
  }