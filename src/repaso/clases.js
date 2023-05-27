class Carro {
  constructor(motor, color) {
    this.motor = motor
    this.color = color
  }

  acelerar() {
    console.log(`run run run runnnnnnn! soy de color: ${this.color}`)
  }
}

const carro1 = {
  motor: 1400,
  color: 'rosa',
}

const carro2 = new Carro(1300, 'verde')

console.log(carro2.color)
carro2.acelerar()
