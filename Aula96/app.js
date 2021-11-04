////////////// AULA 1 ////////////////



// const {Pessoa} = require('./mod1');

// const p1 = new Pessoa("Pessoa");

// console.log(p1);

// const mod1 = require('./mod1');

// console.log(mod1);



///////////// AULA 2 ///////////////

// const mult = require('./mod1');

// console.log(mult(4,3));


///////////// AULA 3 ///////////////


const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    { nome: 'João' },
    { nome: 'Josias' },
    { nome: 'Jaca' },
    { nome: 'Jacaré' },
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo,json);


async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => {
        console.log(val.nome);
    });
}

lerArquivo(caminhoArquivo);

