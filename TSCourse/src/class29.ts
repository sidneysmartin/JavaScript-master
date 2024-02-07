// "Curso TypeScript - #29 - Aprendendo GENERICS"

function fTeste<T, U>(v: T, r: U): U {
  return r;
}
console.log(fTeste<number, string>(10, "10"));
console.log(fTeste<string, number>("10", 10));
console.log(fTeste<boolean, boolean>(false, true));

class CTest<T> {
  public val: T;
  constructor(val: T) {
    this.val = val;
  }
}

const ct1 = new CTest<number>(10);
const ct2 = new CTest<string>("10");
console.log(ct1.val);
console.log(ct2.val);
