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

    if(contexto == 'descanso-curto'){
        titulos.innerHTML = "Foque no que gera resultado, <strong style='font-weight: bold;'>deixe o resto em segundo plano.</strong>"
        banner.src = 'imagens/descanso-curto.png' //altera o caminho da imagem
    }else if(contexto == 'descanso-longo'){
        titulos.innerHTML = "Elimine distrações, <strong style='font-weight: bold;'>concentre sua energia no essencial.</strong>"
        banner.src = 'imagens/descanso-longo.png'
    }else if(contexto == 'foco'){
        titulos.innerHTML = "Otimize sua produtividade, <strong style='font-weight: bold;'> mergulhe no que importa.</strong>"
        banner.src = 'imagens/foco.png'
    }
    
}


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