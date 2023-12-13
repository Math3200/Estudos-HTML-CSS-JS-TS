//Criando classes para dinamizar projeto

class pessoa{
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }        
}

//criando Pessoa
let matheus = new pessoa();
matheus.nome = 'Matheus R Ferreira';
matheus.idade = 18;

console.log(matheus);
matheus.descrever();

//usando construtor

let lucas = new pessoa('Lucas F', 25);
console.log(lucas);
lucas.descrever();

//função para comparar pessoas
function compararPessoas (p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho`)
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const vitor = new pessoa('Vitor Hugo', 25);
const renan = new pessoa('Renan Lopez', 25);

compararPessoas(vitor, renan);