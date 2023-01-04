export let name:string= 'Mario Eduardo'
export const age:number = 35
export const isValid:boolean = true

name = 'Melissa' // NO SE PUEDEN ASIGNAR VALORES DE OTRO TIPO

export const templateString = `Esto es un string multilinea
que puede tener 
"dobles 
'simlres
inyectar vaklores ${name}
expresiones ${1+1}
numeros: ${age}
booleanos ${isValid}`
console.log('hola')
console.log(templateString)