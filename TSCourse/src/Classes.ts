// "Curso TypeScript - #30 - Aprendendo sobre Módulos"

const aparelhos = ["Leg press", "Extensor", "Abdutor", "Stiff"];

class Pessoa {
  name: string;
  height: number;
  constructor(name: string, height: number) {
    this.name = name;
    this.height = height;
  }
}
class Treino {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
export default Pessoa;
export { Treino, aparelhos };
