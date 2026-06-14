const listaSkills = document.querySelector('.lista-skills');

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
    const skillsHTML = skills.map((skill) => {
        return`<li> ${skill}</li>`
    });
    
    listaSkills.innerHTML = skillsHTML.join('');
};

renderizarSkills();


