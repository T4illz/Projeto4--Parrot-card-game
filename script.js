let qtdCartas = prompt('Com quantas cartas você quer jogar?');

/* 
    <div class="carta-jogo">
        <img src="imgs/foxies.jpg" />
    </div>
*/

function QuantidadeJgs(){
    const lista = document.querySelector('.guarda-cartas');
    lista.innerHTML = '';
    if( qtdCartas <= 4 || qtdCartas >= 14){
        alert('O minimo de cartas são 4 e o maximo são 14');
    }
    else if (qtdCartas >= 4 || qtdCartas <= 14){
    for (let i = 0; i < qtdCartas; i++){
        lista.innerHTML = lista.innerHTML + `
        <div class="carta-jogo">
        <img src="imgs/foxies.jpg" />
    </div>
    `}
}

}
QuantidadeJgs();