// "Curso TypeScript - #27 a 28 - Aprendendo sobre Interface"
interface Curso {
  titulo: string;
  des: string;

  iniciarCurso?(teste: string): void;
}

interface CursoProg extends Curso {
  aula: number;
  maxAlunos?: number;
}
interface CursoAdm extends Curso {
  aula: number;
  maxAlunos?: number;
}

let curso1: CursoProg;
let curso2: CursoProg;
let curso3: CursoAdm;

curso1 = {
  titulo: "Typescript",
  des: "Curso de Typescript",
  aula: 37,
  maxAlunos: 50,
  iniciarCurso(t: string) {},
};
curso2 = {
  titulo: "Javascript",
  des: "Curso de Javascript",
  aula: 250,
  maxAlunos: 100,
};
curso3 = {
  titulo: "NodeJS",
  des: "Curso de NodeJS",
  aula: 250,
};

console.log(curso1);
console.log(curso2);
console.log(curso3);
