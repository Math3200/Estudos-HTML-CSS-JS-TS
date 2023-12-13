//Classes e objetos

let matheus = {
    nome: 'Matheus Rodrigues',   //objetos = coleção chave valor
    idade: 18
};

console.log(matheus.nome);
console.log(matheus);

//Incremento de objeto

matheus.altura = 1.78;

console.log(matheus);

//Metodo = função dentro de um objeto

let matheus = {
    nome: 'Matheus Rodrigues',   //objetos = coleção chave valor
    idade: 18,

    descrever: function () {
        console.log(`Meu nome é ${this.nome}e minha idade é ${this.idade}`)
    }
};

matheus.descrever();





