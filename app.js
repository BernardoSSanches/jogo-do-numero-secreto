let listaDeNumeroSorteados=[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
exibirTextoNaTela ('h1' , 'hora do desafio');
exibirTextoNaTela ('p' , 'Escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados=[];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute=document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
}