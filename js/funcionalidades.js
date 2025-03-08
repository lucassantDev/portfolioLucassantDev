addEventListener("click", githubLink());
addEventListener("click", linkedinLink());
addEventListener("click", mudarCor());


function githubLink(){
    window.open("https://github.com/lucassantDev");
}

function linkedinLink(){
    window.open("https://www.linkedin.com/in/lucasferreira2023--/");
}


function mudarCor(){
    let modoTela = document.getElementById('modoTela');
    let body = document.querySelector('body');
    modoTela.classList.toggle('dark'); // a propriedade toggle insere ou remove uma classe 
    body.classList.toggle('dark'); // a propriedade toggle insere ou remove uma classe 
}
