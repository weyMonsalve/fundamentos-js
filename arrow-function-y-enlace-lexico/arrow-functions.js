const greeting = function(name) {
    return `hi, ${name}`
}


// Arrow function - explicit return 

const newGreeting = (name) => {
    return `hi, ${name}`
}

// Arrow function - implicit return 

const newGreetingImplicit = name => `Hi, ${name}` // se realiza asi en una solo linea ya que solo tiene un parametro

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`


// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')


const esMayorDeEdad = (edad) => edad >= 18;

// Ejemplos de uso:
console.log(esMayorDeEdad(20)); // Output: true
console.log(esMayorDeEdad(15)); // Output: false
console.log(esMayorDeEdad(18)); // Output: true