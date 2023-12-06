// Resolução básica
let gasolina = 5.79;
let alcool = 3.49;

let combustivel = 'alcool'; //escolha de combustivel

if (combustivel === 'alcool') {
    combustivel = alcool;
} else{
    combustivel = gasolina;
}

let consumo = 12;
let distancia = 384;

Custo_Deslocamento = (distancia / consumo) * combustivel;

console.log(Custo_Deslocamento.toFixed(3));

//Resolução com input