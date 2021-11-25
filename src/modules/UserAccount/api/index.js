import request from '@/utils/request'
// import request from 'utils/request'

function sleep (time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, time)
  })
}

export function login (params) {
  return sleep(1000)
}
