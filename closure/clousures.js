/*
CLOUSURE: funcion que tiene acceso a variables de un ambito externo, incluso despues
de que esa funcion haya terminado de ejecutarse.

Ambito lexico: cada vez que se declara una funcion , crea su propio ambito lexico, y puede
acceder a las variables dentro de ese ambito y las variables en ambitos superiores.
*/


function outerFunction() {
    let outerVariable = "I am from outer function"

    function innterFunction() {
        console.log(outerVariable)
    }
    return innterFunction
}

const clousureExample = outerFunction()
clousureExample()

function createCounter() {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer() {
    let message = "Hello, "

    function inner(name) {
        console.log(message + name)
    }
    return inner
}

const clousureA = outer()
const clousureB = outer()

clousureA("Wbeimar")
clousureA("Matias")