// "Curso TypeScript - #13 - Arrow Function"
const information = (txt: string = "..."): void => {
  console.log(txt);
};
const sum = (n: number[]): number => {
  let s: number = 0;
  n.forEach((e) => {
    s += e;
  });
  return s;
};
information("Javascript");
information("Typescript");
information("NodeJS");

let aNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(aNumbers));
