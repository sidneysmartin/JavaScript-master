console.log("Curso TypeScript - #13 - Type Assertion e Typecast");

function calculate(n1: number = 0, n2: number = 0): number {
  return Math.pow(n1, n2);
}
console.log(calculate(5));
console.log(calculate(5, 3));

const register = (user: string, password: string, name?: string): void => {
  // torna o name opcional
  // console.log(`Usuário...: ${user}.`);
  // console.log(`Senha.....: ${password}`);
  // console.log(`Nome......: ${name}`);
  let data = { user, password, name };
  console.log(data);
};

register("Seville", "@1234564");
