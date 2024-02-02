console.log("Curso TypeScript - #11 - Type Assertion e Typecast");
let nValue: number;
let sValue: string;
let uValue: unknown;

uValue = 10;
sValue = "20";
nValue = Number.parseInt(sValue);
nValue = <number>uValue;
sValue = <string>uValue;
sValue += 10;
console.log(typeof uValue);
console.log(uValue);
console.log(typeof nValue);
console.log(nValue);
console.log(typeof sValue);
console.log(sValue);
