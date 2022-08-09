// Atividade 11
// Adicione a resposta na linha abaixo de cada exercício

// Utilize a tabela do link para auxiliar no exercício 1 e 2:
// http://www.prosangue.sp.gov.br/artigos/quem_doa_pra_quem.html

// 1 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com if para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `A+`, `A-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
// Exemplo se receber A+: "A+ doa para A+ e B+".


tipoSanguineo = 'AB-';

if (tipoSanguineo == 'A+') {
    console.log('O seu tipo sanguíneo doa para A+ e AB+');
}
else if (tipoSanguineo == 'A-') {
    console.log('O seu tipo sanguíneo doa para A+, A-, AB+ e AB-');
}
else {
    console.log('O seu tipo sanguineo não está cadastrado em nosso sistema.');
}


// 2 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com switch para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `B+`, `B-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.


tipoSanguineo2 = 'B-';

switch (tipoSanguineo2) {
    case 'B+':
        console.log('Seu tipo sanguíneo doa para B+ e AB+');
    break;

    case 'B-':
        console.log('Seu tipo sanguíneo doa para B+, B-, AB+ e AB-');
    break;

    default:
        console.log('Tipo sanguíneo não cadastrado')
}

// 3 - Crie uma laço de repetição com for que se inicia com 5 e incrementa de um em um até chegar em 15.

for(let cronometro = 5; cronometro < 15; cronometro++) {
    console.log(cronometro);
}