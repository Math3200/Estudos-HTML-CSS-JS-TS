// 1.

let gas = 5.70;

class carro{
    marca;
    cor;
    consumo;
    km;

    constructor(marca, cor, consumo, km){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
        this.km = km;
    }

    calcularGasto(){
        return gas* ( this.km/this.consumo );
    }
};

let ka = new carro ('Ford', 'Prata', 12, 250);

console.log(ka);
console.log(ka.calcularGasto());


// 2. 

class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso/(this.altura * this.altura));
    }
}

let Jose = new pessoa('Jose', 70, 1.70);

console.log(Jose);
console.log(Jose.calcularIMC());



