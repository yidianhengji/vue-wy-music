export function countNum (num) {
  if (num >= 100000000) {
    num = Math.round(num / 10000000) / 10 + "亿"
  } else if (num >= 10000) {
    num = Math.round(num / 1000) / 10 + "万"
  } else if (num >= 1000) {
    num = Math.round(num / 100) / 10 + "千"
  }
  return num
}