// OPERADORES LOGICOS 


// && SI ESTE VALOR Y ESTE VALOR HACEN ESTO (osea se cumplen ambas funciones)
// || SI ESTE VALOR O ESTE VALOR( osea si uno de los dos cimplen la funcion)
// ! NO VALOR DE NEGACION( osea este valor no es esto)


const a = 10;
const b = 20;
const c = "10";

const resultado = a == b && a === c;
//console.log(resultado);

const resultado1 = a != b || a === c;
//console.log(resultado1);

const resultado2 = !(a === c);
console.log(resultado2);