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

    banner.src = `imagens/${contexto}.png`
    switch(contexto){
        case 'foco':
            tempoDecorrido = 10
            mostrarTimer()
            titulos.innerHTML = "Otimize sua produtividade, <strong style='font-weight: bold;'> mergulhe no que importa.</strong>"
            break;

        case 'descanso-curto':
            tempoDecorrido = 15
            mostrarTimer()
            titulos.innerHTML = "Foque no que gera resultado, <strong style='font-weight: bold;'>deixe o resto em segundo plano.</strong>"
            break;

        case 'descanso-longo':
            tempoDecorrido = 20
            mostrarTimer()
            titulos.innerHTML = "Elimine distrações, <strong style='font-weight: bold;'>concentre sua energia no essencial.</strong>"
            break;
    }
    //meu método
    /* if(contexto == 'descanso-curto'){
        titulos.innerHTML = "Foque no que gera resultado, <strong style='font-weight: bold;'>deixe o resto em segundo plano.</strong>"
        banner.src = 'imagens/descanso-curto.png' //altera o caminho da imagem
    }else if(contexto == 'descanso-longo'){
        titulos.innerHTML = "Elimine distrações, <strong style='font-weight: bold;'>concentre sua energia no essencial.</strong>"
        banner.src = 'imagens/descanso-longo.png'
    }else if(contexto == 'foco'){
        titulos.innerHTML = "Otimize sua produtividade, <strong style='font-weight: bold;'> mergulhe no que importa.</strong>"
        banner.src = 'imagens/foco.png'
    } */
    
}

//Inicio do temporizador
const exibirTimerApp = document.getElementById('timer')

const btnStart = document.getElementById('start-pause')
// Variável de ref para guardar o timer
let tempoDecorrido = 10

let modulo = document.querySelector('.modal')

function mostrarTimer(){
    //instanciando objeto Date para manipular o temporizador
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    exibirTimerApp.innerHTML = `${tempoFormatado}`
}
mostrarTimer()
btnStart.addEventListener('click', iniciarTimer)
function decrementarTimer(){
    const som = new Audio('sons/beep.mp3')
    if(tempoDecorrido <= 0){
        som.play()
        /* setTimeout(()=>{alert('Tempo esgotado')}, 100) */
        pararTimer()
        modulo.style.display = 'block'
        return
    }
    
    tempoDecorrido -= 1
    mostrarTimer()
    
}


//Botao de reset
const resetButton = document.getElementById('resetButton')
resetButton.addEventListener('click', ()=>{
    tempoDecorrido = 10
    rodando = false
    pararTimer()
})


let idTimer
let rodando = false
function iniciarPausaTimer(){
    
    const btnInicioPause = document.querySelector('.app__card-primary-button span')
    const audioIniciar = new Audio('sons/play.wav')
    const audioPausar = new Audio('sons/pause.mp3')
    if(rodando){
        btnInicioPause.innerText = 'Iniciar'
        audioPausar.play()
        pararTimer()
        return
    }
    btnInicioPause.innerText = 'Pausar'
    audioIniciar.play()
    idTimer = setInterval(decrementarTimer, 1000)
    rodando = true
}

function iniciarTimer(){
    if (rodando) {
        pararTimer()
        return
    }
    idTimer = setInterval(decrementarTimer, 1000)
    rodando = true
    btnStart.innerHTML = '<img src="imagens/pause.png"><span>Pausar</span>'
}

function pararTimer(){
    clearInterval(idTimer)
    rodando = false
    btnStart.innerHTML = '<img src="imagens/play_arrow.png"><span>Começar</span>'
}


let buttonModulo = document.getElementById('buttonModule')
buttonModulo.addEventListener('click', ()=>{
    modulo.style.display = 'none'
})














//meu código

/* let title = document.querySelector('.app__title')
let body = document.querySelector('body')
let image = document.querySelector('.app__image')


//descanso curto
let dCurto = document.querySelector('.dCurto')
dCurto.addEventListener('click', descansoCurto)


function descansoCurto(){
    title.innerHTML = "Foque no que gera resultado, <strong style='font-weight: bold;'>deixe o resto em segundo plano.</strong>"
    body.style.background = 'linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%)'
    image.src = 'imagens/descanso-curto.png' //altera o caminho da imagem
    dCurto.classList.add('active')
    foco.classList.remove('active')
    dLongo.classList.remove('active')
}


//foco
let foco = document.querySelector('.active')
foco.addEventListener('click', focoActive)

function focoActive(){
    title.innerHTML = "Otimize sua produtividade, <strong style='font-weight: bold;'> mergulhe no que importa.</strong>"
    body.style.background = 'linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%)'
    image.src = 'imagens/foco.png'
    dCurto.classList.remove('active')
    foco.classList.add('active')
    dLongo.classList.remove('active')
}

//descanso longo
let dLongo = document.querySelector('.dLongo')
dLongo.addEventListener('click' , descansoLongo)


function descansoLongo(){
    title.innerHTML = "Elimine distrações, <strong style='font-weight: bold;'>concentre sua energia no essencial.</strong>"
    body.style.background = 'linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%)'
    image.src = 'imagens/descanso-longo.png'
    dCurto.classList.remove('active')
    foco.classList.remove('active')
    dLongo.classList.add('active')
} */

}