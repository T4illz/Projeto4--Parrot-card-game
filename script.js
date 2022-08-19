let qtdCartas = prompt('Com quantas cartas você quer jogar?');

/* 
    <div class="carta-jogo">
        <img src="imgs/foxies.jpg" />
    </div>
*/

function QuantidadeJgs(){
    const lista = document.querySelector('.guarda-cartas');
    lista.innerHTML = '';
    const par = qtdCartas % 2;
    console.log(par);

    if (par === 0 && qtdCartas >= 4 && qtdCartas <= 14){
        for (let i = 0; i < qtdCartas; i++){
            lista.innerHTML = lista.innerHTML + `
            <div class="carta-jogo">
            <img src="imgs/foxies.jpg" />
        </div>
        `}
        } else if (par !== 0){
            alert('Por favor selecionar um numero par de cartas!');
            qtdCartas = prompt('Com quantas cartas você quer jogar?');
            QuantidadeJgs();
        } else if( qtdCartas < 4 || qtdCartas >= 14){
        alert('O minimo de cartas são 4 e o maximo são 14');
        }
    

}
QuantidadeJgs();


