//Desestrucuturacion de objetos y arreglosS

interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}


const alumno2:Alumno1 = {
    matricula1: 12345,
    nombre: 'Mario',
    edad: 23,
    correo: 'mario@gmail.com',
    grupo: {
        grupo: 'idgs',
        year: 2023
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)

const{matricula1, nombre:nom, grupo:xx}=alumno2;
const{grupo, year:anio}=xx;

console.log(`La matricula es: ${matricula1}`)
console.log(`El nombre es: ${nom}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El año del grupo es: ${anio}`)

//Desestructuracion de arreglos
const gps:string[]=['IDGS', 'IEVN', 'REDES'];

console.log(`Grupo1: ${gps[0]}`)
console.log(`Grupo2: ${gps[1]}`)
console.log(`Grupo3: ${gps[2]}`)

const[a,,b]=gps;

console.log(`Grupo1: ${a}`)
console.log(`Grupo3: ${b}`)