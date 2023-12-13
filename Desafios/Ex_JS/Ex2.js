let peso = 160.00;
let altura = 1.78;

IMC = peso / (altura * altura);
console.log(IMC);
if (IMC < 18.5) {
    console.log('Magreza')
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log('Normal')
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log('Sobrepeso')
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log('Obesidade grau I')
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log('Obesidade grau II')
} else {
    console.log('Obesidade grau III')
}




// Usando function

function calculo(peso, altura) {
    return peso/(altura*altura);
}
function Classificacao(IMC) {
    if (IMC < 18.5) {
        return'Magreza'
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return'Normal'
    } else if (IMC >= 25 && IMC <= 29.9) {
        return'Sobrepeso'
    } else if (IMC >= 30 && IMC <= 34.9) {
        return'Obesidade grau I'
    } else if (IMC >= 35 && IMC <= 39.9) {
        return'Obesidade grau II'
    } else {
        return 'Obesidade grau III'
    }
}

function IMC() {  
    let peso = 100;
    let altura = 1.80;

    let IMC = calculo(peso, altura);
    console.log(Classificacao);
}

IMC();


