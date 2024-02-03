// "Curso TypeScript - #20 - Aprendendo sobre POO - Herança"
class Account {
  numberAccount: number;
  holder: string;
  constructor(numberAccount: number, holder: string) {
    this.numberAccount = numberAccount;
    this.holder = holder;
  }
}

class businessAccount extends Account {}
class personalAccount extends Account {}

const account1 = new businessAccount(159753, "Sidney");
const account2 = new businessAccount(753852, "Dreams in Tech");

console.log(account1.holder);
console.log(account2.holder);