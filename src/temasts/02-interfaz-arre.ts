
interface Alumno{
    matricula:number,
    nombre:string,
    email:string
}

const alumno:Alumno={
    nombre:'Christian',
    matricula:20001394,
    email:'naruxdev@gmail.com'
}

let mascotas=['perro','gato','perico']
mascotas[1]='sshhh'
mascotas.push('sssss')

let tem:(number|string)[]=[]

tem.push('nombre')
tem.push(224)

console.log(mascotas)
console.table(alumno)