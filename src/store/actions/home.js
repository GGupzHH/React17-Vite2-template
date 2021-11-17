
export function setHomeInfo (homeInfo) {

  console.log('homeInfo')

  return {
    type: 'HOMEINFO',
    homeInfo
  }
}
