// "Curso TypeScript - #10 - Diferenças entre NULL,UNDEFINED e UNKNOWN em Typescript"

//NULL - tipo nulo
let vName:string|null;
// vName="Typescript"
vName=null
console.log(vName);

//UNDEFINED - tipo indefinido
let vUse:any;
console.log(vUse);

//UNKNOWN só pode ser atribuído do tipo unknown ou any
let limited:unknown=10
console.log(limited);
console.log(typeof(limited));