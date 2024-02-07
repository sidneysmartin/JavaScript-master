// "Curso TypeScript - #35 e 36 - Aprendendo sobre Desestruturação"
let [aa, bb, cc, dd] = ["Ciano", "Magenta", "Amarelo", "Preto"];
// let [aa, bb, cc, dd] = ["Ciano", "Magenta", "Amarelo", "Preto"];
// console.log(aa);
// console.log(bb);
// console.log(cc);
// console.log(dd);
const obj = {
  cor1: "Ciano",
  cor2: "Magenta",
  cor3: "Amarelo",
  cor4: "Preto",
};

// console.log(obj.cor1);
// console.log(obj.cor2);
// console.log(obj.cor3);
// console.log(obj.cor4);

let { cor1, cor2, cor3, cor4 } = obj;
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
let [n1 = 0, n2 = 0, ...n3] = [2, 3, 5, 7, 11, 13, 17, 19, 23];
console.log(n1);
console.log(n2);
console.log(n3);

const times = () => {
  return ["Galo", "Colorado", "Flu", "Timão", "Verdão"];
};

let [t1, t2, t3, ...t4] = times();

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);

let text = "Curso de Typescript";
let [...t] = text.split(" ");
let [p1,p2,p3] = text.split(" ");
console.log(t);
console.log(p1);
console.log(p2);
console.log(p3);
