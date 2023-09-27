/* Declaracion 1-4 */

let Coche = {
    marca: "", 
    modelo: "",
    matricula: ""
};

let Casa = {
    codPostal: "",
    calle: "",
    portal: "",
    piso: "",
};

let FullStackDeveloper = {
    lenguajes:[" "],
    proyectos: [" "],
};

let Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function() {
        console.log("Guau, guau");
    },
    popo: function() {
        return Math.random() * 3;
    }
};

/* Lectura propiedades 5-8 */

let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos = Concierto["grupos"];
let RGB = [Led.rojo, Led.azul, Led.verde];

/* Modificacion propiedades 9-12 */

Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = [Impresora.nombreArchivo, Impresora.copias, Impresora.numPaginas];

/* Declaracion 13-17 */

let Noticia = {
    titular: "",
    cuerpo: "",
};

let Persona = {
    nombre: "",
    apellidos: "",
    edad: "",
}

let Avion = {
    numPasajeros: "",
    despegar: function() {
        console.log("despegando");
    },
    volar: function() {
        console.log("llegando al destino");
    },
    aterrizar: function() {
        console.log("aterrizando");
    }
};

let Paquete = {
    contenido: [""],
}

let Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: "",
}

/* Lectura Propiedades 18-22 */

let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil["especificaciones"];

/* Modificacion Propiedades 22-26 */

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !Led.encendido;
Movil.temperatura = "20º";