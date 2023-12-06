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


