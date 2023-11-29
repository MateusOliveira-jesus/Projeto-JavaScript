//Declarando variaveis
const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const musicaPlay = new Audio('/sons/play.wav')
const musicaPause = new Audio('/sons/pause.mp3')
const musicafinal = new Audio('/sons/beep.mp3')
const iniciarOuPausarbtn = document.querySelector('#start-pause span')
let tempoDecorridoEmSegundos = 5
let intervaloId = null




//Fim das variaveis

//Declarando eventos no site
musica.loop = true
musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {

        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')

})
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')

})
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')

})
function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class = "app__title-strong"> mergulhe no que importa.</strong>`;
            break;

        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?  <strong class = "app__title-strong">faça uma pausa curta</strong>`;
            break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície <strong class = "app__title-strong">Faça uma Pausa longa</strong>`;
            break;


        default:
            break;

    }
}

const constagemRgressiva = () => {

    if (tempoDecorridoEmSegundos <= 0) {
        musicafinal.play
        zerar()
       // alert('Tempo Finalizado!')
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('temporizador : ' + tempoDecorridoEmSegundos)
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        musicaPause.play()
        zerar()
        return
        
    }
    musicaPlay.play()
    intervaloId = setInterval(constagemRgressiva, 1000)
    iniciarOuPausarbtn.textContent = "Pausar"

}               
function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarbtn.textContent = "Começar"
    intervaloId = null
    return
}
//Declarando audios botão começar
/*const musicaPlay = new Audio('/sons/play.wav')
const musicaPause = new Audio('/sons/pause.mp3')
const musicafinal = new Audio('/sons/beep.mp3')*/


//Fim da declaração botão começar