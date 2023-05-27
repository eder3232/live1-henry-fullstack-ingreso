const obj = {
  nombre: 'eder',
  apellido: 'sucapuca',
  invitado: true,
} // caso 1

const obj2 = {
  apellido: 'sucapuca',
  invitado: true,
} // caso 2

const obj3 = {
  nombre: 'eder',
  invitado: true,
} // caso 3

const obj4 = {
  nombre: 'eder',
  invitado: false,
} // caso 4a

const obj5 = {
  nombre: 'eder',
} // caso 4a

function bienvenidoSr(persona) {
  //Tu código aquí
  if (!('invitado' in persona)) {
    return 'Disculpe señor, no está invitado a la fiesta'
  }

  if (persona.invitado === false) {
    return 'Disculpe señor, no está invitado a la fiesta'
  }

  if ('nombre' in persona && 'apellido' in persona) {
    return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido`
  }

  if ('nombre' in persona) {
    return `Hola ${persona.nombre}, tu mesa está lista`
  }
  return `Bienvenido Sr. ${persona.apellido}`
}

console.log(bienvenidoSr(obj3))
