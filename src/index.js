const str = 'ES6'
console.log(`Hello ${str}`)

//const Dog = require('./dog')
import Dog from './dog'
const toby = new Dog('Toby')
console.log(toby.bark())