const alunomodel = require("../models/aluno.models");

let alunos = [
  {
    id: 0,
    nome: "ernesto",
    matricula: 541803,
    curso: "CC",
  },
  {
    id: 1,
    nome: "Lucas",
    matricula: 541855,
    curso: "CC",
  },
];

let id = 2;

class Alunoservice {
  //listando os usuarios
  static list() {
    return alunos;
  }
  // registrando usuarios
  static register(data) {
    let aluno = new alunomodel(id++, data.nome, data.curso, data.matricula);
    alunos.push(aluno);
    return aluno;
  }

  //atualizando
  static update(id, data) {
    let aluno = alunos.find((aluno) => aluno.id == id);
    if (aluno) {
      aluno.nome = data.nome;
      aluno.matricula = data.matricula;
      aluno.curso = data.curso;
      return aluno;
    } else {
      throw new Error("aluno não encontrado");
    }
  }

  static delete(id) {
    const index = alunos.findIndex((aluno) => aluno.id == id);
    if (index) {
      alunos.splice(index, 1);
      return true;
    }
    return false;
  }

  // recuperando
  static retrieve(id) {
    const aluno = alunos.find((aluno) => aluno.id == id);
    if (aluno) {
      return aluno;
    }
    return {};
  }
}

module.exports = Alunoservice;
