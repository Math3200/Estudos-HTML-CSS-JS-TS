//Funções function

// Exemplo simples
function teste(name) {
    console.log(name);
}

teste('matheus');

//Exemplo função quadrada
function quadrado(numero) {
    return numero * numero;
}

let x = quadrado(10);
console.log(x + x);

//Exemplo porcentagem
function juros(valor, percentual) {
    let acrescimo = (percentual / 100) * valor;
    return valor + acrescimo;
}

let y = juros(500, 50);
console.log(y);


//Codigo para o programa principal vai ser o Main.!!

function main(){

}

main(); //funções são como objetos e  JS

// criação e execução imediata, modelo
(function(){
    console.log('boas praticas')
})();
