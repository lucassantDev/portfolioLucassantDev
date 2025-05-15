addEventListener("click", githubLink());
addEventListener("click", linkedinLink());

function githubLink(){
    window.open("https://github.com/lucassantDev");
}

function linkedinLink(){
    window.open("https://www.linkedin.com/in/lucasferreira2023--/");
}

// addEventListener("click", mudarCor());
// function mudarCor(){
//     let modoTela = document.getElementById('corFundo');
//     let body = document.querySelector('body');
//     modoTela.classList.toggle('dark'); // a propriedade toggle insere ou remove uma classe 
//     body.classList.toggle('dark'); // a propriedade toggle insere ou remove uma classe 
// }

// addEventListener("click", mudarCorMobile());
// function mudarCorMobile(){
//     let modoDarkLight = document.getElementById('modoDarkLight');
//     let body = document.querySelector('body');
//     modoDarkLight.classList.toggle('darkMobile'); // a propriedade toggle insere ou remove uma classe 
//     body.classList.toggle('darkMobile'); // a propriedade toggle insere ou remove uma classe 
// }

// função para ver o projeto funcionando e o código do repositório nubank
function projetoNubank(){
    window.open('https://lucassantdev.github.io/moldeNubank/', "_blank");
}

function codigoNubank(){
    window.open("https://github.com/lucassantDev/moldeNubank", "_blank");
}

// função para ver o projeto funcionando e o código do repositório destinize
function projetoDestinize(){
    window.open("https://lucassantdev.github.io/projetoDestinize/", "_blank");
}

function codigoDestinize(){
    window.open("https://github.com/lucassantDev/projetoDestinize", "_blank");
}

// função apenas para ver o código do projeto portfólio
function codigoPortfolio(){
    window.open("https://github.com/lucassantDev/portfolioLucassantDev", "_blank");
}
function projetoPortfolio(){
    window.open("https://portfolio-lucassantdev.vercel.app", "_blank");
}