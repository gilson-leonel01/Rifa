// Array com todos os temas 
//     "Grupo Nº 1: ",
//     "Grupo Nº 2: ",
//     "Grupo Nº 3: ",
//     "Grupo Nº 4: ",
//     "Grupo Nº 5: ",
//     N grupos existentes

// Funcao que vai gerar os temas
//     variavel ou constante que busca o id
//     variavel ou constante que gera os temas aleatorios;
//     exibir o temas no layout/interface

// Execucao da funcao de exibir os temas qaundo e pressionado o botao e mostrar;

const themesWorks = [
    "Grupo Nº 1: Micro-controladores",
    "Grupo Nº 2: Linguagem Assembly",
    "Grupo Nº 3: Clock de um Computador",
    "Grupo Nº 4: Gabinete",
    "Grupo Nº 5: Fonte de alimentação",
    "Grupo Nº 6: Placa mãe",
    //"Grupo Nº 7: Chipset",
    "Grupo Nº 8: Armazenamento em massa",
    "Grupo Nº 9: Gestão de memória"
];

let usedThemes = [];

function generateTheme() {
    const themeContainer = document.getElementById("theme-container");

    if (usedThemes.length === themesWorks.length) {
        themeContainer.textContent = "Todos os temas foram escolhidos.";
    } else {
        let randomTheme;
        do {
            randomTheme = themesWorks[Math.floor(Math.random() * themesWorks.length)];
        } while (usedThemes.includes(randomTheme));

        usedThemes.push(randomTheme);

        themeContainer.textContent = randomTheme;
    }
}

document.getElementById("button").addEventListener("click", generateTheme);
