function fakeBinary(size) {
  // tu código aquí
  if (size <= 0) {
    return ''
  }
  let str = '1'
  for (let i = 0; i < size - 1; i++) {
    if (i % 2 !== 0) {
      str += '1'
    } else {
      str += '0'
    }
  }
  return str
}

console.log(fakeBinary(5))
