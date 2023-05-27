function partir(arreglo = [], cantidad = 0) {
  // tu código aquí
  //early return

  if (cantidad > arreglo.length) {
    return [arreglo]
  }

  const newArr = []
  let subArr = []
  while (arreglo.length > 0) {
    let current = arreglo.shift()
    if (subArr.length < cantidad) {
      subArr.push(current)
      //   console.log(subArr)
    } else if (subArr.length === cantidad) {
      newArr.push(subArr)
      subArr = [current]
      if (arreglo.length === 0) {
        newArr.push(subArr)
      }
    }
  }
  return newArr
}

// console.log(partir([1, 2, 3, 4, 5], 2))
console.log(partir([1, 2], 4))
