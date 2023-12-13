

let n1 = 9;
let n2 = 10;
let n3 = 10;

Me = (n1 + n2 + n3) / 3;
console.log(Me);

if (Me < 5) {
    console.log('Reprovado');
} else if (Me => 5 && Me <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}
