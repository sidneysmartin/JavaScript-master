// "Curso TypeScript - #08 - Aprendendo sobre OBJECT em Typescript"

let dados={
  name:"Zend",
  age:150,
  status:"Arch Mage",
  attack:()=>{console.log("Destruição Astral")},
  info:(p:string)=>{console.log(p);}
}
console.log(typeof(dados));
console.log(dados.name);
dados.attack()
dados.info("Venha Guardião Astral")