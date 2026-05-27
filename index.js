// const nome = 'Iago';
// const sobrenome = 'Duarte';
// const idade = 25;
// const passatempos = ['musica', 'filmes'];
// const rua = 'Olavo Bilac';
// const cidade = 'BH';
// const estado = 'MG';

// const pessoa = {
//     nome: 'Iago',
//     sobrenome: 'Duarte',
//     passatempos: ['musicas', 'jogos'],
//     idade: 25,
//     endereco: {
//         rua: 'Olavo Bilac',
//         estado: 'MG',
//         cidade: 'Belo Horizonte'
//     }
// }



// console.log(pessoa.endereco); //exibe a propriedade endereço
// pessoa.email = 'iagorduarte18@gmail.com'; // adiciona uma propriedade
// console.log(pessoa); 

// // Cria um vetor de objetos.
// const tarefas = [
//     {
//         id: 1,
//         texto:'Tirar o lixo',
//         completo:false
//     },
//     {
//         id: 2,
//         texto: 'Varrer o chão',
//         completo: true
//     },
//     {
//         id:3,
//         texto:'Lavar o carro',
//         completo: false
//     }
// ];
// // Acessar uma propriedade de um elemento específico.
// console.log(tarefas[1].texto, tarefas[1].id); // vai exibir o indice 1 do array e o texto

// //Formata um objeto em JSON
// console.log(JSON.stringify(tarefas))

//Estruturas Condicionais

// const x = 30;
// const y = 50;

// if (x < y) {
//     console.log('X é menor que Y.');
// } else if (x > y) {
//     console.log('X é maior que Y.');
// } else {
//     console.log('X é igual a Y.');
// }


//ESCOLHA CASO
// const cor = 'vermelho';
// switch (cor) {
//     case 'vermelho': //Caso seja vermelho, vai printar a  msg abaixo.
//         console.log('A cor é vermelho');
//         break; // Finaliza se a condição for verdadeira.
//     case 'verde':
//         console.log('A cor é verde');
//         break;
//     case 'rosa':
//         console.log('A cor é rosa');
//         break;
//     default:
//         console.log('A cor é azul');
// }

// let cor = 'azul';
// if (cor == 'vermelho') {
//     cor = 10;
// } else {
//     cor = 20;
// }
// console.log(cor)


// let i = 0; //contador
// let n = 1; //Ordinais

// while (i <5 ){ //enquanto for menor que 15 repete
//     console.log(`${n}° Miau`);
//     i = i + 1
//     n = n + 1
// }


// for (let i = 0; i <= 10; i++){
//     console.log(`Número da repetição: ${i}`)
// }

// const tarefas = [
//     {
//        id: 1, tarefa: 'Limpar casa', completo: false,
//     },
//     {
//         id: 2, tarefa: 'Estudar Programação', completo: true,
//     },
//     {
//         id: 3, tarefa: 'Jogar CS2', completo: false,
//     }
// ]

// for (let i = 0; i < tarefas.length; i++) {
//     console.log(`Tarefa ${i+1}: ${tarefas[i].tarefa}`)
// }

// for (let x of tarefas){
//     console.log(x.tarefa);
// }

//Funções

// function dizer_ola(nome='Fulano') {
//     console.log(`Olá, ${nome}.`);
// }

// dizer_ola('Iago');
// dizer_ola('Neymar');
// dizer_ola('Messi');
// dizer_ola()

// function apresentar(nome,idade){
//     console.log(`Meu nome é ${nome} e minha idade é ${idade}.`);
// }

// apresentar('Iago', 25);

// function nome_completo (nome,sobrenome, sexo){
//     if (sexo == 'M') {
//         return `Sr ${nome} ${sobrenome}`;
//     }
//     else if (sexo == 'M'){
//         return `Sra. ${nome} ${sobrenome}`;
//     }
//     else {
//         `${nome} ${sobrenome}`
//     }
//     return `${nome} ${sobrenome}`;
// }

// const nomeCompleto = nome_completo('Iago', 'Rayner','M');
// console.log(nomeCompleto);

// const name = 'Iago';

// console.log(`Meu nome é ${name}`,name.length, name.toUpperCase().toLowerCase().substring(0,2));

// const cores = ['Azul', 'Amarelo', 'Vermelho', 'Verde']

// console.log(cores[1])
// console.log(cores[3])
// cores.unshift('Rosa')
// console.log(cores)
// cores.push('Preto')
// console.log(cores)
// cores.pop('cores')
// console.log(cores)
// cores.shift()
// console.log(cores)

// const person = [
    
//     {name:'Iago',
//     lastname:'Rayner',
//     age: 25},

//     {
//         address:
//             {city:'Ribeirão das Neves',
//             neighborhood:'Cruzeiro',
//             street:'Olavo Bilac',
//             number:97,}
//     },

//     {ocuppation:'Software Engenneer',}
// ];

// console.log(person[1].address.city)

// function say_hi(name, age){
//     console.log(`Hi ${name}, you are ${age}`);
// }

// say_hi('Iago', 25);
// say_hi('Adrielle', 21);
// say_hi('Romário', 57);

// function se_apresentar(nome, idade){
//     console.log(`Meu nome é ${nome} e tenho ${idade}.`)
// }

// se_apresentar('Maria', 25)
// se_apresentar('Iago');

// function criar_nome(nome,sobrenome,sexo){
//     sexo = sexo.toUpperCase();
//     if(sexo == 'M'){
//         return `Olá Sr. ${nome} ${sobrenome}.`;
//     } else {
//         return `Olá Sra. ${nome} ${sobrenome}.`;
//     }
// };

// const name = criar_nome('Adrielle', 'Duarte', 'f')
// const name2 = criar_nome('Iago', 'Duarte', 'm')
// console.log(name)
// console.log(name2)

// function multiplicacao(x,y) {
//     return x * y; //parte a ser executada quando a função for chamada
// }

// console.log(multiplicacao(5,5)); //vai multiplicar 5 * 5 = 25.


// const numeros = [1,2,3,4,5];

// numeros.forEach(function(numero){
//     console.log(numero);
// })

// const letras = ['A', 'B', 'C', 'D', 'E'];

// letras.forEach(function (letra, indice) {
//     console.log(`${indice}: ${letra}`);
// })



// tarefas.forEach(function (tarefa, indice, minhasTarefas) {
//     console.log(`${indice + 1}: ${tarefa.texto}`);
//     console.log(minhasTarefas);
// })

// tarefas.forEach(function(c, y, z){
//     console.log(`${y + 1}: ${c.id}`);
//     console.log(z);
// })

// const tarefas = [
//     {
//         id:1,
//         texto: 'Estudar',
//         completo: false,
//     },
//     {
//         id:2,
//         texto: 'Trabalhar',
//         completo: false,
//     },
//     {
//         id:3,
//         texto: 'Limpar a casa',
//         completo: true,
//     },
// ]

// const tarefa1 = tarefas.filter (function(tarefa){
//     return tarefa.id === 1 || tarefa.id === 3; 
// })

// console.log(tarefa1);

// const vetor = [1,2,3,4];
// const valorInicial = 0;

// const soma = vetor.reduce(function(acumulador, valorAtual){
//     return acumulador + valorAtual
// }, valorInicial);

// console.log(soma);
/*
const pessoaA = {
    name: 'Iago',
    lastname: 'Rayner',
    birth: new Date('22-12-2000'),
    obterNomeCompleto(){             //posso definir uma função dentro do meu objeto
        return `${this.name} ${this.lastname} ${this.birth}`; //this pega um elemento dentro do próprio objeto
    }
}
console.log(pessoaA.birth);
console.log(pessoaA.obterNomeCompleto())*/

function pessoa(nome,sobrenome,niver){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.niver = new Date(niver);
    this.amigos = []; //minuto 5:37 da aula até 5:58

    this.obterniver = function(){
        return this.niver.getFullYear();
    };
    
    this.adicionarAmigos = function (amigo){
        if(!this.amigos.includes(amigo)){
            this.amigos.push(amigo); //Adiciona pessoa2 na lista de amigos de pessoa1.
            amigo.amigos.push(this) //Agora adiciona pessoa1 na lista de amigos de pessoa2.
        }
    };

    this.selecionarAmigos = function (){
        return this.amigos.map (function(amigo){
            return amigo.obterNomeCompleto();
        })
    }
    
}
//Crio um protótipo para adicionar elementos.
pessoa.prototype.obterNomeCompleto = function (){
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new pessoa('Iago', 'Rayner', '2000-12-22');
const pessoa2 = new pessoa('Adrielle', 'Duarte', '2005-04-18');
const pessoa3 = new pessoa('Romário', 'Duarte','1967-06-15');


pessoa1.adicionarAmigos(pessoa2);
pessoa2.adicionarAmigos(pessoa1);
console.log(pessoa1.amigos);
console.log(pessoa2.obterNomeCompleto);
