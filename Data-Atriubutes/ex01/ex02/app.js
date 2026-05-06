let html = document.documentElement //pegando o documento html
let botao = document.querySelectorAll('.cores[data-cor]')

botao.forEach(item =>{
    item.addEventListener('click', () =>{
        let contexto = item.dataset.cor
        mudarCor(contexto)
    })
})

function mudarCor(contexto){
    html.dataset.cor = contexto
}