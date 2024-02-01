console.log("Curso TypeScript - #03 - Aprendendo sobre arquivos de configurações");

class Course{
  instructor = null
  course = null
  constructor(instructor:any, course:any){
    this.instructor = instructor
    this.course = course
  }
}

let c1 = new Course("Thomas C. ", "Estrutura de dados")