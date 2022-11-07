/*---------------
    FUNCTIONS
---------------*/

/*---------------
    MAIN
---------------*/
// 1. Creare l’array di oggetti con le info
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]
// 2. Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for( let i = 0; i < team.length; i++) {
    const personTeam = team[i];
    console.log(personTeam);
}

//3. Stampare le stesse informazioni su DOM sottoforma di stringhe
for( let i = 0; i < team.length; i++) {
    const personTeam = team[i];
    const listItem = `
    <li>
        <h3>Nome: ${personTeam.name}</h3>
        <h4>Ruolo: ${personTeam.role}</h4>
        <p>Foto: ${personTeam.photo}</p>
    </li>`;
    document.querySelector('.unlist').innerHTML += listItem;
}
