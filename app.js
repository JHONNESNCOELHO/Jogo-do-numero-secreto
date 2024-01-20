let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = 3;
let tentativas = 1;

function exibirTestoNaTela(tag, texto)  {     
   let campo = document.querySelector(tag)
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', )
}

function exibirMensagemInicial(){  

    exibirTestoNaTela('h1','jogo do numero secreto 2.0');
    exibirTestoNaTela('p', 'escolha um numero entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute() {
let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
exibirTestoNaTela('h1','Acertou');
let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
let mensagemTentativas = `voce descobriu o numro secreto com ${tentativas} ${palavraTentativa}!`;
exibirTestoNaTela('p', mensagemTentativas);
document.getElementById('reiniciar').removeAttribute ('disabled');
    } else{
    if (chute> numeroSecreto) {
exibirTestoNaTela('p','o numero secreto é menor');
    } else {
        exibirTestoNaTela('p', 'o numero secreto é maior');
    }
    tentativas++;
limparCampo();
}
}
function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista ==3){
    listaDeNumerosSorteados = []

}

   if (listaDeNumerosSorteados.includes(numeroLimite)){
     gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

{

function reiniciarJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true)

}


}