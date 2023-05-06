export class Persona {
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  img: string;
  banner: string;

  constructor(
    nombre: string,
    apellido: string,
    descripcion: string,
    img: string,
    banner: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
    this.img = img;
    this.banner = banner;
  }
}
