class Libro {
  constructor(titulo, autor, traducciones) {
    // Inicializar las propiedades del libro con los valores recibidos como argumento
    // tu código aquí
    this.titulo = titulo
    this.autor = autor
    this.traducciones = traducciones
  }

  getTitulo() {
    // tu código aquí
    return this.titulo
  }

  getAutor() {
    // tu código aquí
    return this.autor
  }

  getTraducciones() {
    // Retornar un arreglo con los idiomas de las traducciones
    // tu código aquí
    return this.traducciones.map((e) => e.idioma)
  }

  addTraduccion(idioma, editorial) {
    // Agregar un objeto: { idioma: idioma, editorial: editorial }
    // al arreglo de traducciones del libro.
    // tu código aquí
    this.traducciones.push({ idioma, editorial })
  }
}
