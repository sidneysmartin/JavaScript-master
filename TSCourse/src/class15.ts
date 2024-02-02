console.log("Curso TypeScript - #15 - Rest | Spread");

function sumValues(...value: number[]) {
  let result: number = 0;
  value.map((e) => {
    result += e;
  });
  return result
}
console.log(sumValues(10, 20, 30,40,50,60,70,80,90,100));
