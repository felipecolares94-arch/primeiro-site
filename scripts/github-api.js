const fotoPerfil = document.querySelector('header img');
const nomePerfil = document.querySelector('header h1');
const cargoPerfil = document.querySelector('.cargo');
const containerProjetos = document.querySelector('.projetos');

const usuarioGithub = 'felipecolares94-arch';

// função 

const carregarPerfil = async () => {
    const resposta = await fetch(`https://api.github.com/users/${usuarioGithub}`);


    if (!resposta.ok){
        throw new Error('Erro ao buscar perfil');
    }

    const dados = await resposta.json();

    fotoPerfil.src = dados.avatar_url;
    nomePerfil.textContent = dados.name || 'Luiz Felipe';
    cargoPerfil.textContent = dados.bio || 'Estudante de  Engenharia De Software';
};

carregarPerfil();