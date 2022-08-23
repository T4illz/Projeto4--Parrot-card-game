let qtdCartas;
let carta1, carta2;
let contador = 0;

const imgCartas = [
    `MaisTails`, 
    `Raid`,
    `Tails-dançando`,
    `Tails-Follow`,
    `Tailz-exe`,
    `Tailz`,
    `Voando`
];

const baralho = [];

let pares = 0;


function randomizando(){

    return Math.random() - 0.5;

}


function jogo(){

    for (let i = 0; i < (qtdCartas/2); i++){
        let carta = imgCartas[i];

        baralho.push(carta);
        baralho.push(carta);
    }

    baralho.sort(randomizando);

}


function QuantidadeJgs(){

    qtdCartas = Number(prompt('Com quantas cartas você quer jogar?'));

    while (verificando()){
        qtdCartas = Number(prompt('Com quantas cartas você quer jogar?'));
    }

    gerandoBaralho();

}

QuantidadeJgs();

function verificando(){

    if (isNaN(qtdCartas)){
        
        alert('Por favor digitar um numero');
        return true;
    } 
    if (qtdCartas < 4 || qtdCartas >14){

        alert('O minimo de cartas são 4 e o maximo são 14');
        return true;
    } 
    if (qtdCartas % 2 !== 0){

        alert('Por favor selecionar um numero par de cartas!');
        return true;        
    }

    return false;

}



function gerandoBaralho(){
    
    for (let i = 0; i < (qtdCartas/2); i++){
    let carta = imgCartas[i];
    baralho.push(carta);
    baralho.push(carta);
    }

    baralho.sort(randomizando);

    montarBaralho();

}

function montarBaralho(){
    const mesa = document.querySelector('.guarda-cartas');

    for (let i = 0; i < baralho.length; i++){
        mesa.innerHTML += `
        <div class="carta-jogo" onclick="virarCartas(this)">
            <div class="carta-jogo">
                <div class="frente carta">
                    <img src="imgs/foxies.jpg" />
                </div>
                <div class="costas carta">
                    <img src="imgs/${baralho[i]}.gif" />
                </div>
            </div>
        </div>
        `;
    }

}


function virarCartas(clicada){
     // contagem de jogadas.
    
    if (clicada.classList.contains('virada')){
        return;
    }

    if (carta1 !== undefined && carta2 !== undefined){
        return;
    }

    if (carta1 === undefined){
        carta1 = clicada;
        carta1.classList.add('virada');
        contador++;
    } else {
        if (carta2 === undefined){
            carta2 = clicada;
            carta2.classList.add('virada');
            contador++;

            if (carta1.innerHTML === carta2.innerHTML){
                //Acertou.
                console.log('acertou!')
                pares++;

                redefinir();
                
                setTimeout(finalJogo, 1000);
                
            } else {
                console.log('errou!')
                    //errou
                    setTimeout(voltaCartas, 1000);
            }
        }
    }
  
}

function voltaCartas(){

    carta1.classList.remove('virada');
    carta2.classList.remove('virada');
    
    redefinir();

}
function redefinir(){

    carta1 = undefined;
    carta2 = undefined;
}

function finalJogo(){
  
    if ((pares * 2) === qtdCartas){
           
    alert(`Você ganhou em ${contador} jogadas!`);
    const reiniciar = confirm('Deseja jogar novamente?');
    
    if (reiniciar){
        window.location.reload();
    }
}
}



