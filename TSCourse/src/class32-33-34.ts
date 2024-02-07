// "Curso TypeScript - #32-a-34 - Aprendendo sobre Namespace"
namespace Vehicle {
  enum Colors {
    "Preto",
    "Grafiti",
    "Prata",
    "Branco",
    "Vermelho",
  }
  abstract class Car {
    private model: string;
    private engine: Engines.Engine;
    private color: String;
    constructor(modelo: string, engine: Engines.Engine, color: Colors) {
      this.model = modelo;
      this.engine = engine;
      this.color = Colors[color];
    }
    public startup() {
      this.engine.startup = true;
    }
    public turnOff() {
      this.engine.startup = false;
    }
    get myColor() {
      return this.color;
    }
    get myModel() {
      return this.model;
    }

    get turnOn() {
      return this.engine.startup ? "Sim" : "Não";
    }
    get myPower() {
      return this.engine.powerTurbo;
    }
  }

  export class SportCar extends Car {
    constructor(model: string, color: Colors) {
      super(model, new Engines.Engine(400, 8, new Engines.Turbo(220)), 3);
    }
  }
  export class SedanCar extends Car {
    constructor(model: string, color: Colors) {
      super(model, new Engines.Engine(300, 4), 2);
    }
  }
}

namespace Engines {
  export class Turbo {
    private powerTurbo: number;
    constructor(powerTurbo: number) {
      this.powerTurbo = powerTurbo;
    }
    get PowerTurbo() {
      return this.powerTurbo;
    }
  }
  export class Engine {
    private start: boolean;
    private cylinder: number;
    private power: number;
    constructor(power: number, cylinder: number, turbo?: Turbo) {
      this.start = false;
      this.power = power + (turbo ? turbo.PowerTurbo : 0);
      this.cylinder = cylinder;
    }
    set startup(start: boolean) {
      this.start = start;
    }
    get startup() {
      return this.start;
    }
    get powerTurbo() {
      return this.power;
    }
    get myCylinder() {
      return this.cylinder;
    }
  }
}
const car1 = new Vehicle.SedanCar("Sedan bichão", 2);
const car2 = new Vehicle.SportCar("Uno c/ Escada", 0);

console.log(`Modelo.....: ${car1.myModel}`);
console.log(`Cor........: ${car1.myColor}`);
console.log(`Potencia...: ${car1.myPower}cc`);
console.log(`Ligado.....: ${car1.turnOn}`);
console.log("-----------------------------");
console.log(`Modelo.....: ${car2.myModel}`);
console.log(`Cor........: ${car2.myColor}`);
console.log(`Potencia...: ${car2.myPower}cc`);
console.log(`Ligado.....: ${car2.turnOn}`);
console.log("-----------------------------");
