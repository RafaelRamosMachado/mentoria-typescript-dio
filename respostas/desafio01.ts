// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

// Priemira Forma
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Segunda Forma
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Terceira e Quarta Forma
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}