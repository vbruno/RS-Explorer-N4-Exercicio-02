/*

****Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

- [x] Criar uma lista de estudantes
- [x] Não deixar o usuário digitar o nome vazio;
- [x] Não deixar o usuário digitar notas menores que 0 ou maiores que 10;
- [x] Criar um objeto estudante;
- [x] Adicionar o objeto estudante dentro da lista de estudantes;

Depois de criada a lista:

- [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [x]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

*/

let estudantes = [
  {
    nome: "João Pedro",
    nota1: 5,
    nota2: 7,
  },
  {
    nome: "Luana Silva",
    nota1: 8,
    nota2: 9,
  },
  {
    nome: "Pedro Ferreira",
    nota1: 4,
    nota2: 2,
  },
  {
    nome: "Karine Costa",
    nota1: 7,
    nota2: 6,
  },
  {
    nome: "Ana Clara",
    nota1: 10,
    nota2: 9,
  },
];

/* ----------------------------------------------------------------------------------------- */

estudantes.push(inserirResultadoAluno());

calcularMediaEstudantes(estudantes);

/* ----------------------------------------------------------------------------------------- */

function inserirResultadoAluno() {
  let nome, nota1, nota2;

  do {
    nome = prompt("Digite o nome do estudante: ");
    if (nome == "" || nome == null) {
      alert("Nome inválido!");
    }
  } while (nome == "" || nome == null);

  do {
    nota1 = Number(prompt("Digite a primeira nota: "));
    if (nota1 < 0 || nota1 > 10) {
      alert("Nota inválida!");
    }
  } while (nota1 < 0 || nota1 > 10);

  do {
    nota2 = Number(prompt("Digite a primeira nota: "));
    if (nota2 < 0 || nota2 > 10) {
      alert("Nota inválida!");
    }
  } while (nota2 < 0 || nota2 > 10);

  alert("Estudante cadastrado com sucesso!");
  alert(`Nome: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);

  return { nome, nota1, nota2 };
}

function calcularMediaEstudantes(estudantes) {
  let media = 0;
  for (estudante of estudantes) {
    media = calcularMedia(estudante.nota1, estudante.nota2);
    if (media >= 7) {
      alert(
        `A média do(a) aluno(a) ${estudante.nome} é: ${media}\nParabéns, ${estudante.nome}! Você foi aprovado(a) no concurso!`
      );
    } else {
      alert(
        `A média do(a) aluno(a) ${estudante.nome} é: ${media}\nNão foi dessa vez, João! Tente novamente!`
      );
    }
  }
}

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}
