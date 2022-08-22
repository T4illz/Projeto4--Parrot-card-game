let qtdCartas = prompt('Com quantas cartas você quer jogar?');
let contador = 0;
let cartas = [`
        <div onclick="virarCartas(this)" class="carta-jogo carta-virada">
            <img src="imgs/MaisTails.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Raid.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Tails-dançando.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
            <img src="imgs/Tails-Follow.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Tailz-exe.gif" />
        </div>`,
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Tailz.gif" />
        </div>`,
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Voando.gif" />
        </div>`,
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/MaisTails.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Raid.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Tails-dançando.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
            <img src="imgs/Tails-Follow.gif" />
        </div>`, 
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Tailz-exe.gif" />
        </div>`,
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
        <img src="imgs/Tailz.gif" />
        </div>`,
        `<div onclick="virarCartas(this)" class="carta-jogo carta-virada">
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

let verificaCartas = '';

function virarCartas(clicada){
    contador++;
    clicada.classList.remove('carta-virada');
    console.log(clicada);
    console.log(verificaCartas);

    if (clicada.innerHTML === verificaCartas ){
        
        clicada.classList.add('carta-par');
        verificaCartas = '';
        console.log(clicada);
    }

        verificaCartas = clicada.innerHTML;
    
        console.log(verificaCartas);
    
    setTimeout(voltaCartas, 5000);
}

function voltaCartas(){
    const voltar = document.querySelector('.guarda-cartas .carta-jogo');
    voltar.classList.add('carta-virada');
    verificaCartas = '';
}


function finalJogo(){
    alert(`Você ganhou em ${contador} jogadas!`);
    const reiniciar = prompt('Deseja reiniciar o jogo?');
    if (reinciar === 'sim'){
        qtdCartas = prompt('Com quantas cartas você quer jogar?');
        QuantidadeJgs();
    }
}


// se a carta for igual 
// adicionar class '.ok' e retirar carta-jogo'
// se não, não fazer nada.

