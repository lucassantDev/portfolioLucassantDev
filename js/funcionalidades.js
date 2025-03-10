addEventListener("click", githubLink());
addEventListener("click", linkedinLink());

function githubLink(){
    window.open("https://github.com/lucassantDev");
}

function linkedinLink(){
    window.open("https://www.linkedin.com/in/lucasferreira2023--/");
}

addEventListener("click", mudarCor());
function mudarCor(){
    let modoTela = document.getElementById('modoTela');
    let body = document.querySelector('body');
    modoTela.classList.toggle('dark'); // a propriedade toggle insere ou remove uma classe 
    body.classList.toggle('dark'); // a propriedade toggle insere ou remove uma classe 
}

addEventListener("click", mudarCorMobile());
function mudarCorMobile(){
    let modoDarkLight = document.getElementById('modoDarkLight');
    let body = document.querySelector('body');
    modoDarkLight.classList.toggle('darkMobile'); // a propriedade toggle insere ou remove uma classe 
    body.classList.toggle('darkMobile'); // a propriedade toggle insere ou remove uma classe 
}
