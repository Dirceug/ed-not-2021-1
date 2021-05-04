import { Queue } from './lib/Queue2.mjs'

let fila = new Queue()
console.log(fila.print())

fila.enqueue("Creusdete")   //Acrescenta um valor na fila
console.log(fila.print())

fila.enqueue("Jubinaldo")   //Acrescenta um valor na fila
console.log(fila.print())

fila.enqueue("Neurivânia")   //Acrescenta um valor na fila
console.log(fila.print())

let proximo = fila.peek()   //Espiar quem é o próximo a ser atendido
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()//Algupem é atendido
console.log({atendido})
console.log(fila.print())

fila.enqueue("Leniwander")     //Acrescenta um valor na fila
console.log(fila.print())