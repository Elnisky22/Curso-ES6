/* MÓDULO 2 */
/*import ClasseUsuario, { idade as idadeUsuario } from './modulo2';

console.log(ClasseUsuario.info());
console.log(idadeUsuario);*/

/* MÓDULO 3 */
//3.1
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo () {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');
    
    await delay();
    console.log('3s');
}

umPorSegundo();*/

//3.2
/*import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch (err) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');*/

//3.3
/*class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch (err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');*/

//3.4
import axios from 'axios';

const buscaUsuario = async (user) => {
    try {
        axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
        }
    catch (err) {
        console.log('Usuário não existe');
    }
};
buscaUsuario('Elnisky22');