function ingredienteEnMalEstado(menu, comida, ingrediente) {
  //verificar si
  let valorBooleano = false

  for (const e of menu[comida]) {
    if (e === ingrediente) {
      valorBooleano = true
    }
  }
  if (valorBooleano === false) {
    return 'El menú esta perfecto'
  }
  //   if (!menu[comida].includes(ingrediente)) {
  //     return 'El menú esta perfecto'
  //   }
  const index = menu[comida].indexOf(ingrediente)
  if (index > 0 && index < menu[comida].length - 1) {
    return [
      menu[comida][index - 1],
      menu[comida][index],
      menu[comida][index + 1],
    ]
  } else if (index === 0) {
    return [menu[comida][0], menu[comida][1]]
  } else if (index === menu[comida].length - 1) {
    return [menu[comida][index - 1], menu[comida][index]]
  }
}

let menuDelDia = {
  raviolesConSalsa: ['Harina', 'Sal', 'Huevos', 'Aceite', 'Peceto', 'Ricota'],
  bagnaCauda: ['Ajo', 'Anchoas', 'Aceite', 'Crema', 'Papas', 'Zanahorias'],
  tallarines: ['Harina', 'Pollo', 'Aceite', 'Huevos', 'Tomates', 'Cebolla'],
}

// console.log(ingredienteEnMalEstado(menuDelDia, 'raviolesConSalsa', 'Peceto'))
console.log(ingredienteEnMalEstado(menuDelDia, 'raviolesConSalsa', 'Harina'))
