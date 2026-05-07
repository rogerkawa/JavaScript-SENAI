let botao = document.querySelectorAll('.planos[data-plano]')
let result = document.querySelector('h1')

botao.forEach(item =>{
    item.addEventListener('click', () =>{  //cria um evento de clique para todos os botoes
        let contexto = item.dataset.plano //armazena o valor do data-plano em contexto
        planoEscolhido(contexto, item)
    })
})

function planoEscolhido(contexto, botaoClicado){
    botao.forEach(item => {item.classList.remove('active')}) //remove a classe de todos os itens

    botaoClicado.classList.add('active') //adiciona a classe no botao clicado

    switch(contexto){
        case 'Basic':
        result.innerText = `Seu Plano escolhido: ${contexto}`
        break;
        case 'Medium':
        result.innerText = `Seu Plano escolhido: ${contexto}`
        break;
        case 'Premium':
        result.innerText = `Seu Plano escolhido: ${contexto}`
        break;
        case 'Advanced':
        result.innerText = `Seu Plano escolhido: ${contexto}`
        break;
    }
}