let title = document.querySelector('.app__title')
let body = document.querySelector('body')
let image = document.querySelector('.app__image')

//descanso curto
let dCurto = document.querySelector('.dCurto')
dCurto.addEventListener('click', descansoCurto)

function descansoCurto(){
    title.innerText = 'Descanso curto ativado'
    body.style.background = 'linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%)'
    image.src = 'imagens/descanso-curto.png' //altera o caminho da imagem
}


//foco
let foco = document.querySelector('.active')
foco.addEventListener('click', focoActive)
function focoActive(){
    title.innerText = 'Otimize sua produtividade, mergulhe no que importa.'
    body.style.background = 'linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%)'
    image.src = 'imagens/foco.png'
}

//descanso longo
let dLongo = document.querySelector('.dLongo')
dLongo.addEventListener('click' , descansoLongo)

function descansoLongo(){
    title.innerText = 'Descanso longo Ativado'
    body.style.background = 'linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%)'
    image.src = 'imagens/descanso-longo.png'
}