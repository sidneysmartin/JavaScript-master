//"Curso TypeScript - #16 #17 - POO Class - Método Construtor, Modificadores de acesso"
//Classe
// modicadores podem ser: public, private, protected
class Computador {
  private id: number;
  public model: string = "";
  private ram: number = 0;
  private cpu: number = 0;
  protected start: boolean = false;

  constructor(model: string, ram: number, cpu: number) {
    this.model = model;
    this.ram = ram;
    this.cpu = cpu;
    this.start = false;
    this.id = 0;
  }
  info(): void {
    console.log(`Modelo.....: ${this.model}`);
    console.log(`Ram........: ${this.ram}`);
    console.log(`CPU........: ${this.cpu}`);
    console.log(`Ligado.....: ${this.start ? "sim" : "não"}`);
    console.log(`*****************************`);
  }
  onPC(): void {
    this.start = true;
  }
  offPC(): void {
    this.start = false;
  }
  upRam(newRam: number): void {
    if (newRam >= 0 && newRam <= 1024) {
      this.ram = newRam;
    } else {
      console.log(
        `Quantidade ${newRam} para o computador ${this.model} não é suportada.`
      );
    }
  }
}

// Instanciar Classe
const pc1 = new Computador("Servidor", 64, 16);
const pc2 = new Computador("Desktop", 32, 12);
const pc3 = new Computador("Laptop", 16, 8);

// console.log(`Modelo: ${pc1.model} | Memória: ${pc1.ram}| Núcleos: ${pc1.cpu}`);
// console.log(`Modelo: ${pc2.model} | Memória: ${pc2.ram}| Núcleos: ${pc2.cpu}`);
// console.log(`Modelo: ${pc3.model} | Memória: ${pc3.ram}| Núcleos: ${pc3.cpu}`);
pc3.upRam(512);
pc1.model = "Cloud";
pc1.onPC();
pc3.onPC();

pc1.info();
pc2.info();
pc3.info();
