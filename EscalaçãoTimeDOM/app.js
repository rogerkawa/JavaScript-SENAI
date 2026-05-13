let jogadores = []

const body = document.querySelector('body')
const position = document.createElement('input')
const nome = document.createElement('input')
const number = document.createElement('input')
const botaoAdd = document.getElementById('enviar')

nome.setAttribute('placeholder', 'Digite o nome do jogador')
number.setAttribute('placeholder', 'Digite o numero do jogador')
position.setAttribute('placeholder', 'Digite a posição do jogador')
const div = document.createElement('div')

//botao de remover
const remove = document.createElement('button')
//botao de enviar
const add = document.createElement('button')
add.innerText = 
remove.innerText = 'Remover'
botaoAdd.addEventListener('click',()=>{
    body.append(nome, position, number, remove)
})

let escalado = {
    nome: nome.value,
    posicao: position.value,
    numero: number.value
}

remove.addEventListener('click', ()=>{
    
})
