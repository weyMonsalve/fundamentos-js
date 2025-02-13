function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("wbeimar", "monsalve", 41);

console.log(persona1);

const Persona2 = new Persona("matias", "cadavid", 12);

console.log(Persona2);

Persona.prototype.telefono = "555-555-5555";

persona1.nacionalidad = "colombiana";

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar();
Persona2.saludar();