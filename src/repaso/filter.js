const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arr.filter((e) => e !== 2))

const newArr = []

for (let e of arr) {
  if (e !== 2) {
    newArr.push(e)
  }
}

console.log(newArr)
