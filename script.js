let qtdCartas = prompt('Com quantas cartas você quer jogar?');

let cartas = [`
        <div class="carta-jogo">
            <img src="imgs/MaisTails.gif" />
        </div>`, 
        `<div class="carta-jogo">
        <img src="imgs/Raid.gif" />
        </div>`, 
        `<div class="carta-jogo">
        <img src="imgs/Tails-dançando.gif" />
        </div>`, 
        `<div class="carta-jogo">
            <img src="imgs/Tails-Follow.gif" />
        </div>`, 
        `<div class="carta-jogo">
        <img src="imgs/Tailz-exe.gif" />
        </div>`,
        `<div class="carta-jogo">
        <img src="imgs/Tailz.gif" />
        </div>`,
        `<div class="carta-jogo">
        <img src="imgs/Voando.gif" />
        </div>`,
        `<div class="carta-jogo">
        <img src="imgs/MaisTails.gif" />
        </div>`, 
        `<div class="carta-jogo">
        <img src="imgs/Raid.gif" />
        </div>`, 
        `<div class="carta-jogo">
        <img src="imgs/Tails-dançando.gif" />
        </div>`, 
        `<div class="carta-jogo">
            <img src="imgs/Tails-Follow.gif" />
        </div>`, 
        `<div class="carta-jogo">
        <img src="imgs/Tailz-exe.gif" />
        </div>`,
        `<div class="carta-jogo">
        <img src="imgs/Tailz.gif" />
        </div>`,
        `<div class="carta-jogo">
        <img src="imgs/Voando.gif" />
        </div>`
    ];

cartas.sort(randomizando); 

function randomizando(){

    return Math.random() - 0.5;

}
randomizando();

        /* div padrão
    <div class="carta-jogo">
        <img src="imgs/Tailz.jpg" />
    </div>
*/

function QuantidadeJgs(){

    const lista = document.querySelector('.guarda-cartas');

    lista.innerHTML = '';

    const par = qtdCartas % 2;
    
    if (par === 0 && qtdCartas >= 4 && qtdCartas <= 14){

        for (let i = 0; i < qtdCartas; i++){
            
            lista.innerHTML = lista.innerHTML + cartas[i];
            
    
        }
        } else if (par !== 0){

            alert('Por favor selecionar um numero par de cartas!');

            qtdCartas = prompt('Com quantas cartas você quer jogar?');

            QuantidadeJgs();

        } else if( qtdCartas < 4 || qtdCartas >= 14){

        alert('O minimo de cartas são 4 e o maximo são 14');

        qtdCartas = prompt('Com quantas cartas você quer jogar?');

        QuantidadeJgs();

        }
}

QuantidadeJgs();


