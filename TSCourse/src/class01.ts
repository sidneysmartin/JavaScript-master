console.log("Curso TypeScript - #01 - Preparando o ambiente para programar");

// Declarando uma classe com um construtor e um método
class Person{
  // Declarando os atributos da classe com os tipos
  girl: string;
  age: number;
  // Declarando o construtor da classe com os parâmetros e os tipos
  constructor(girl: string, age: number){
     // Atribuindo os valores dos parâmetros aos atributos da classe
    this.girl = girl
    this.age = age;
  }
   // Declarando um método da classe com o tipo do retorno
  presentation(): string{
    return `Meu nome é ${this.girl} e eu tenho ${this.age} anos.`
  }
}
console.log("Exemplo simples de uma utilização de classes em TypeScript.");
// Retornando uma string com os dados da pessoa
const person = new Person ('Ana Clara', 10)
console.log(person.presentation());
