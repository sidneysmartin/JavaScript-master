// "Curso TypeScript - #12 - Aprendendo sobre funções"

function login(user: string, password: string): void {
  console.log(`Usuário...: ${user}`);
  console.log(`Senha.....: ${password}`);
}
login("Zend", "@12Zend34");

function addition(n1: number, n2: number) {
  return n1 + n2;
}
const res: string = addition(9, 4).toString();
console.log(addition(8, 16));
console.log(res);
console.log(typeof res);
