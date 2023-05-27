const persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']

const persona2 = ['comer', 'dormir', 'futbol']

function actividadesEnComun(arr1 = [], arr2 = []) {
  const newArr = []
  for (const e of arr1) {
    if (arr2.includes(e)) {
      newArr.push(e)
    }
  }
  return newArr
}

console.log(actividadesEnComun(persona1, persona2))
