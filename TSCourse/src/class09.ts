console.log("Curso TypeScript - #08 - Aprendendo sobre ENUM em Typescript");
enum days{
  domingo=0,
  segunda=1,
  terça=2,
  quarta=3,
  quinta=4,
  sexta=5,
  sábado=6
}
console.log(days.domingo);
console.log(days[1]);
console.log(days['domingo']);

const d=new Date()
console.log(d.getDate());
console.log(d.getDay());
console.log(days[d.getDay()]);

// enum colors{
//   branco="#fff",
//   preto="#000",
//   vermelho="#f00",
//   verde="#0f0",
//   azul="#00f"
// }
// console.log(typeof(colors));
// console.log(colors.branco);
// console.log(colors['branco']);

enum userType{
    USER=10,
    ADMIN=100,
    SUPER=1000
}
console.log(userType.SUPER);
const uType:userType=userType.ADMIN;
console.log(uType);