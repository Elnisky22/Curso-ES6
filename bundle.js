"use strict";

/* MÓDULO 1 */

/* EXERCÍCIO 1 */

/*class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true */

/* EXERCÍCIO 2 */

/*const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

const filter = usuarios.filter(function (user) {
    return user.idade > 17 && user.empresa === 'Rocketseat';
});
console.log(filter);

const finder = usuarios.find(function (user) {
    return user.empresa === 'Google';
});
console.log(finder);

const uniao = usuarios
    .map(user => ({ ...user, idade: user.idade * 2}))
    .filter(user => user.idade <= 50)
;
console.log(uniao);*/

/* EXERCÍCIO 3 */

/*//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr);

//3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

//3.3
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({
    nome,
    idade
});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//3.4
const promise = () => new Promise((resolve, reject) => resolve());*/

/* EXERCÍCIO 4 */
//4.1

/*const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {
    nome,
    endereco: {cidade, estado}
} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));*/

/* EXERCÍCIO 5 */

/*//5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((a, b) => a + b);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
console.log(usuario2);
console.log(usuario3);*/

/* EXERCÍCIO 6 */

/*const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);*/

/* EXERCICIO 7 */
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(usuario);
