// Explicit type Casting

const string = '42'
const integer = parseInt(string)

//console.log(integer)
//console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)

//console.log(float)
//console.log(typeof float)


const binary = '1010'
const decimal = parseInt(binary, 2)

//console.log(decimal)
//console.log(typeof decimal)


// Implicit type Casting

const sum = '5' + 3
    //console.log(sum)

const sumWithBoolean = '3' + true
    //console.log(sumWithBoolean)

const sumWihtNumber = 2 + true
    //console.log(sumWihtNumber)
    //console.log()

const stringvalue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringvalue + stringvalue) // CONCATENA
console.log(stringvalue + numberValue) // CONCATENA
console.log(stringvalue + booleanValue) // CONCATENA
console.log(numberValue + stringvalue) // CONCATENA
console.log(numberValue + numberValue) // SUMA
console.log(numberValue + booleanValue) // SUMA
console.log(booleanValue + stringvalue) // CONCATENA
console.log(booleanValue + numberValue) // SUMA
console.log(booleanValue + booleanValue) // SUMA


const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero)
console.log(typeof numeroConvertido)