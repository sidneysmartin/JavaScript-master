// "Curso TypeScript - #30-a-31 - Aprendendo sobre Módulos"
import Pessoa, { Treino, aparelhos } from "./Classes";
// import Pessoa from "./Classes";
// import {Treino, aparelhos} from "./Classes.ts"
// import {aparelhos} from "./Classes.ts"
// import {aparelhos} from "./Classes.ts"

const p1 = new Pessoa("Carlos", 1.85);
const o1 = new Treino("Corrida");
console.log(p1.name);
console.log(p1.height);
console.log(o1.name);
const ap = aparelhos.map((e) => {
  console.log(e);
});
