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
