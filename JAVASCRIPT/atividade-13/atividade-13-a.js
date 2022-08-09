/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/

/*
1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
Imprima o tamanho desse array.
*/
const cidadesBaianas = ['Ilhéus', 'Itabuna', 'Vitória da Conquista', 'Salvador', 'Jequié'];

console.log(cidadesBaianas.length);

/*
2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
Adicione um país no começo do array.
Adicione um país no fim do array.
Imprima esse array.
*/

let paisesAmericaLatina = ['Brasil', 'Colômbia', 'El Salvador', 'Uruguai', 'Argentina'];

paisesAmericaLatina.unshift('México');
console.log(paisesAmericaLatina);

paisesAmericaLatina.push('Paraguai');
console.log(paisesAmericaLatina);

/*
3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
Remova um item no começo do array.
Remova um item no fim do array.
Imprima esse array.
*/

let livrosLidos = ['O caçador de pipas', 'The perks of being a wallflower', 'Seamos una familia', 'Fruta verde', 'O sonho de um homem rídiculo'];

livrosLidos.shift();
console.log(livrosLidos);

livrosLidos.pop();
console.log(livrosLidos);

/*
4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
Coloque em um novo array 3 desses números.
Imprima esse novo array.
*/

const numerosPreferidos = [70, 40, 60, 82, 73];
let numerosSelecionados = numerosPreferidos.slice(2);
console.log(numerosSelecionados);

/* 
5 - Declare uma variável que contenha um array com 5 vogais em strings.
Coloque esse array ao contrário e una todas essas letras em uma string.
Imprima em um console.log.
*/

let vogais = ['A', 'E', 'I', 'O', 'U'];
vogais.reverse();
console.log(vogais);

let arrayViraString = vogais.join('');
console.log(arrayViraString);