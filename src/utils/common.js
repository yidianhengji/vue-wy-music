//
export function countNum(num) {
  if (num >= 100000000) {
    num = Math.round(num / 10000000) / 10 + "亿"
  } else if (num >= 10000) {
    num = Math.round(num / 1000) / 10 + "万"
  } else if (num >= 1000) {
    num = Math.round(num / 100) / 10 + "千"
  }
  return num
}


// 
export function secondTime(time) {
  let minute = time / 60;
  let minutes = parseInt(minute);
  let second = time % 60;
  let seconds = Math.round(second);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + '.' + seconds
}