/**
 * @description paese url
 * @param {String} url
 * @returns {Object}
 */
function parseQueryString(url) {
  let params = url.split('?')[1]
  let reslut = {}
  let temp = params.split('&')
  let tem2 = ''
  for (let i = 0; i < temp.length; i++) {
    temp2 = temp[i].split('=')
    reslut[temp2[0]] = temp2[1]
  }
  return reslut
}
console.log(
  JSON.stringify(
    parseQueryString(
      'https://music.163.com/#/song?id=32835565&ke1=1234&key2=345'
    )
  )
) //{"id":"32835565","ke1":"1234","key2":"345"}
