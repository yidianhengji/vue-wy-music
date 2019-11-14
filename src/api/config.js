import axios from 'axios';

// const BASE = 'http://musicapi.leanapp.cn/'
const BASE = 'http://192.168.199.206:3000/'

export default function axja (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET') {
      promise = axios.get(BASE + url, { params: data })
    } else if (method === 'POST') {
      promise = axios.post(BASE + url, data)
    }
    promise.then(data => {
      if (data.data.code === 200) {
        resolve(data)
      } else {
        alert(data.data.msg)
      }
    }).catch(err => {
      alert(err.message)
    })
  })
}
