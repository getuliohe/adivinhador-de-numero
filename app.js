function mensagemInicial(){
    exibirTextoNaTela("h1","jogo de adivinhação");
    exibirTextoNaTela("p","adivinhe de 1 a 10");
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()* 10)+1;
}
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1

function geraNovoJogo(){
    numeroAleatorio=gerarNumeroAleatorio();
    console.log(numeroAleatorio);
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true)
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute==numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1","Acertou!!");
        exibirTextoNaTela("p","você acertou o número com "+tentativas+" "+palavraTentativa);
        document.getElementById("reiniciar").removeAttribute
        ("disabled");
    }else if (chute > numeroAleatorio){
        exibirTextoNaTela("p","o numero aleatorio é menor");
    }else{
        exibirTextoNaTela("p","o numero aleatorio é maior");
    }
    tentativas++;
}

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

mensagemInicial();