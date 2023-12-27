//Arrays e Estruturas de repetição

let alunos = ['mat', 'gab', 'Bela', 'arthur']; // [] colchete é usado em lista

alunos.push('Renan'); // adicionar elemento de forma dinamica
alunos[5] = 'Lucas'; //pop remove item e shift remove o primeiro item

console.log(alunos);

//estrutura FOR = percorre quantidade
for (let index = 0; index <=10; index++) {
    //const element = array[index];
    //3 partes: index é a variavel de controle
    //condição
    //condição para proxima variavel
    console.log(index);
}

//percorrendo letras de um nome
let nome = 'matheus rodrigues ferreira';

for (let index = 0; index < nome.length; index++) {
    const element = nome[index];
    console.log(nome[index]);
}

