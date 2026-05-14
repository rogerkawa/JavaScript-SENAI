const input = document.getElementById('dados')
const btnSalvar = document.getElementById('salvar')
const btnMostrar = document.getElementById('mostrar')
const btnRemover = document.getElementById('remover')
const btnLimpar = document.getElementById('limpar')
const olConteudo = document.getElementById('conteudo')

let nomes = []

btnSalvar.addEventListener('click', ()=>{
    //Lendo o que estava salvo anteriormente
    const dadosSalvos = localStorage.getItem('nomes')

    //Verificar se existe algum dado salvo
    if(dadosSalvos){
        nomes = JSON.parse(dadosSalvos)
    }

    nomes.push(input.value)
    localStorage.setItem('nomes', JSON.stringify(nomes)) //transforma pra string e envia
    input.value = ''
})

btnMostrar.addEventListener('click', ()=>{
    const dadosExibir = localStorage.getItem('nomes') //pega o item
    const dadosConvertidos = JSON.parse(dadosExibir)  // pega os dados e transforma em array dnv

    olConteudo.innerHTML = ''

    dadosConvertidos.forEach(itemDados => {
        const li = document.createElement('li')
        li.innerText = itemDados
        olConteudo.appendChild(li)
    });
})

btnRemover.addEventListener('click', ()=>{
    localStorage.removeItem('nomes')
})

btnLimpar.addEventListener('click', ()=>{
    localStorage.clear()
    
})