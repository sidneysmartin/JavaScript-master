console.log("Curso TypeScript - #06 - Aprendendo mais sobre Array e Readonly Array em Typescript");

// let numbers:number[] = [20,30,40]
let numbers:Array<number> = [20,30,40]
// formas de declarar um array

console.log(numbers);

numbers.unshift(10)
numbers.push(50)
console.log(numbers);

//Array apenas para leitura, não é possível alterar
let numbers_ro:ReadonlyArray<number>=[100,200,300]
let texts:ReadonlyArray<string>=["tester"]
