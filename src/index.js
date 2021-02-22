const converterMap = {
  2: '万',
  3: '亿',
  4: '万亿', // 兆
  5: '亿亿',
  // ...
}
const converter = function (val) {
  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  const numList = val.toString().split('.')
  let numStr = numList[0]
  /**
   * 1 0000 - 1 万
   * 1000 0000 - 1000 万
   * 1000 0000 0000 - 1000 亿
   * 1 0000 0000 0000 - 1 万亿
   * */
  if (numStr.length < 6) {
    return val;
  } else {
    const remain = numStr.length % 4
    if (remain > 0) {
      numStr = numStr.padStart(numStr.length + (4 - remain), 0)
    }
    const reg = /.{4}/g
    const numMatch = numStr.match(reg)
    const decimalLen = numStr.length - (numMatch.length - 1) * 4
    // 四舍五入
    let decimal = +`0.${numStr.substring(decimalLen, decimalLen + 3)}`;
    decimal = decimal.toFixed(2) * 100
    decimal = decimal > 0 ? `.${decimal}` : ''

    return `${+numMatch[0]}${decimal} ${converterMap[numMatch.length]}`
  }
}

export default converter
