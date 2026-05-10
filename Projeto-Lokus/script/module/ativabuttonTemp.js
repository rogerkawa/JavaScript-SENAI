export default function initButtonTemp(){
const banner = document.querySelector('.app__image')
const titulos = document.querySelector('.app__title')
const html = document.documentElement /* Trazendo elemento html fora do body */
const botoes = document.querySelectorAll('.app__card-button[data-contexto]')

botoes.forEach(itemBotoes => {
    itemBotoes.addEventListener('click', ()=>{
        let contexto = itemBotoes.dataset.contexto //pega o valor do data-contexto do botão
        alterarConteudos(contexto, itemBotoes) // Chamando a função das ações
    })
})

// Função que vai executar as ações do evento de click nos botões
function alterarConteudos(contexto, botaoClicado){

    // Removendo classe ativa dos elementos
    botoes.forEach(itemBotao => itemBotao.classList.remove('active'))

    // Adicionando a classe ativa nos elementos
    botaoClicado.classList.add('active')

    // Atualizando o data-contexto
    html.dataset.contexto = contexto  //recebe o valor do data-contexto atual e altera a pagina

    //Botao de reset
const resetButton = document.getElementById('resetButton')
resetButton.addEventListener('click', ()=>{
    if(contexto == 'foco'){
        tempoDecorrido = 5
    }else if(contexto == 'descanso-curto'){
        tempoDecorrido = 10
    }else if(contexto == 'descanso-longo'){
        tempoDecorrido = 15
    }
    imageBotao.src = 'imagens/play_arrow.png'
    btnInicioPause.innerText = 'Iniciar'
    mostrarTimer()
    rodando = false
    paraTimer()
})

const select = document.querySelector('.txtSelect')

    banner.src = `imagens/${contexto}.png`
    switch(contexto){
        case 'foco':
            tempoDecorrido = 5
            mostrarTimer()
            select.style.display = 'none'
            titulos.innerHTML = "Otimize sua produtividade, <strong style='font-weight: bold;'> mergulhe no que importa.</strong>"
            break;

        case 'descanso-curto':
            tempoDecorrido = 10
            mostrarTimer()
            select.style.display = 'none'
            titulos.innerHTML = "Foque no que gera resultado, <strong style='font-weight: bold;'>deixe o resto em segundo plano.</strong>"
            break;

        case 'descanso-longo':
            tempoDecorrido = 15
            mostrarTimer()
            select.style.display = 'none'
            titulos.innerHTML = "Elimine distrações, <strong style='font-weight: bold;'>concentre sua energia no essencial.</strong>"
            break;
    }
    
}

//Inicio do temporizador
const exibirTimerApp = document.getElementById('timer')

const btnStart = document.getElementById('start-pause')
// Variável de ref para guardar o timer
let tempoDecorrido = 5

let modulo = document.querySelector('.modal')

function mostrarTimer(){
    //instanciando objeto Date para manipular o temporizador
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    exibirTimerApp.innerHTML = `${tempoFormatado}`
}
mostrarTimer()

btnStart.addEventListener('click', iniciarPausaTimer)

const som = new Audio('sons/beep.mp3')
function decrementarTimer(){
    if(tempoDecorrido <= 0){
        som.play()
        imageBotao.src = 'imagens/play_arrow.png'
        btnInicioPause.innerText = 'Iniciar'
        mostrarTimer()
        /* setTimeout(()=>{alert('Tempo esgotado')}, 100) */
        paraTimer()
        modulo.style.display = 'flex'
        return
    }
    
    tempoDecorrido -= 1
    mostrarTimer()
    
}

let idTimer
let rodando = false
const imageBotao = document.querySelector('.app__card-primary-butto-icon')
const btnInicioPause = document.querySelector('.app__card-primary-button span')
function iniciarPausaTimer(){
    const audioIniciar = new Audio('sons/play.wav')
    const audioPausar = new Audio('sons/pause.mp3')
    if (rodando) {
            imageBotao.src = 'imagens/play_arrow.png'
            btnInicioPause.innerText = 'Iniciar'
            audioPausar.play()
            paraTimer()
            return
        }
        imageBotao.src = 'imagens/pause.png'
        btnInicioPause.innerText = 'Pausar'
        audioIniciar.play()
        idTimer = setInterval(decrementarTimer, 1000)
        rodando = true
    }

function paraTimer(){
    clearInterval(idTimer)
    rodando = false
}

//fechar modulo
let buttonModulo = document.getElementById('buttonModule')
buttonModulo.addEventListener('click', ()=>{
    modulo.style.display = 'none'
    som.pause()
})
}