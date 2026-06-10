const botaoMensagem = document.querySelector('.btn-mensagem');
const formularioContato = document.querySelector('.formulario-contato');
const inputNome = document.querySelector('.input-nome');
const feedback = document.querySelector('.feedback');
const listaSkills = document.querySelector('.lista-skills');

// Evento de click

botaoMensagem.addEventListener('click', () => {
    formularioContato.classList.toggle('escondido');

    if(formularioContato.classList.contains('escondido')){
        botaoMensagem.textContent = 'Enviar mensagem';
    }else {
        botaoMensagem.textContent = 'Cancelar';
    }
});

formularioContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = inputNome.value;
    feedback.innerHTML= `
        <div class="feedback-sucesso">
        <span>Mensagem enviada com sucesso, ${nome}!</span>

        <button class="fechar-feedback">
            ×
        </button>
    </div>
    `;
    const fecharFeedback = document.querySelector('.fechar-feedback');
    fecharFeedback.addEventListener('click', () => {
        feedback.innerHTML = '';
    })

    formularioContato.reset();
});

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Flexbox',
    'Responsividade',
    'Arrow Function',
    'DOM',
    'Template literals',
];

const renderizarSkills = () => {
    const skilssHTML = skills.map((skill) => {
        return`<li> ${skill}</li>`
    });
    
    listaSkills.innerHTML = skilssHTML.join('');
}

renderizarSkills();


