// "Curso TypeScript - #20 a 26 - Aprendendo sobre POO"

//PUBLIC - Acessado de qualquer lugar
//PRIVATE - Acessado somente na própria classe
//PROTECTED - Acessado somente na própria classe e na classe filho
// MÉTODO GET - obtêm algo da classe
// MÉTODO SET - modifica algo na classe
// CLASSE ABSTRATA = São classes que não podem ser instanciadas somente herdadas
abstract class Account {
  private readonly numberAccount: number;
  protected holder: string;
  private balance: number;
  constructor(holder: string) {
    this.numberAccount = this.createNumberAccount();
    this.holder = holder;
    this.balance = 0;
  }
  private createNumberAccount(): number {
    return Math.floor(Math.random() * 100000) * 10;
  }
  protected info() {
    console.log(`Titular: ${this.holder}`);
    console.log(`Conta..: ${this.numberAccount}`);
  }
  public get balanceAccount(): number {
    //Getter
    return this.balance;
  }
  private set balanceAccount(balance: number) {
    //Setter
    this.balance = balance;
  }
  protected deposit(value: number) {
    if (value < 0) {
      console.log("Valor inválido");
      return;
    }
    this.balance += value;
  }
  protected withdraw(value: number) {
    if (value < 0) {
      console.log("Valor inválido");
      return;
    }
    value >= this.balance
      ? (this.balance -= value)
      : console.log("Saldo insuficiente");
  }
}

interface Tax {
  baseCalc: number;
  CalculateTax(valTax: number): number;
}

class businessAccount extends Account implements Tax {
  CNPJ: number;
  baseCalc: number = 12;

  constructor(CNPJ: number, holder: string) {
    super(holder);
    this.CNPJ = CNPJ;
  }
  CalculateTax(valTax: number): number {
    return valTax * this.baseCalc;
  }
  info() {
    console.log("Conta..: PJ");
    super.info();
    console.log(`CNPJ...: ${this.CNPJ}`);
    console.log("-------------------------");
  }
  deposit(value: number) {
    if (value > 10000) {
      console.log(
        "Valor de depósito superior ao permitido para esse tipo de conta."
      );
    } else {
      super.deposit(value);
    }
  }
  public withdraw(value: number): void {
    if (value > 10000) {
      console.log(
        "Valor de depósito superior ao permitido para esse tipo de conta."
      );
    } else {
      super.withdraw(value);
    }
  }
}
class personalAccount extends Account {
  CPF: number;
  constructor(CPF: number, holder: string) {
    super(holder);
    this.CPF = CPF;
  }
  info() {
    console.log("Conta..: PF");
    super.info();
    console.log(`CPF....: ${this.CPF}`);
    console.log("-------------------------");
  }
  public deposit(value: number) {
    if (value > 1000) {
      console.log(
        "Valor de depósito superior ao permitido para esse tipo de conta."
      );
    } else {
      super.deposit(value);
    }
  }
  public withdraw(value: number): void {
    if (value > 1000) {
      console.log(
        "Valor de depósito superior ao permitido para esse tipo de conta."
      );
    } else {
      super.withdraw(value);
    }
  }
}

const account1 = new personalAccount(1245, "Sidney");
const account2 = new businessAccount(15431000, "Dreams in Tech");

account1.deposit(100);
account1.deposit(900);
account2.deposit(9000);
console.log(account1.balanceAccount);
