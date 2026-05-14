
let jogadores = []

const body = document.querySelector('body')

const nome = document.createElement('input')
const position = document.createElement('input')
const number = document.createElement('input')

const btnAdd = document.createElement('button')
const btnRemove = document.createElement('button')

const lista = document.createElement('div')

nome.classList.add('input')
position.classList.add('input')
number.classList.add('input')

nome.placeholder = 'Digite o nome do jogador'
position.placeholder = 'Digite a posição do jogador'
number.placeholder = 'Digite o número do jogador'

btnAdd.innerText = 'Adicionar Jogador'
btnRemove.innerText = 'Remover Jogador'

body.append(nome, position, number, btnAdd, btnRemove, lista)

btnAdd.addEventListener('click', () => {

    const escalado = {
        nome: nome.value,
        posicao: position.value,
        numero: number.value
    }

    jogadores.push(escalado)

    renderizarJogadores()

    nome.value = ''
    position.value = ''
    number.value = ''
})


function renderizarJogadores() {

    lista.innerHTML = ''

    jogadores.forEach((jogador, indice) => {

        const jogadorDiv = document.createElement('div')

        jogadorDiv.innerText = `
            Índice: ${indice}
            Nome: ${jogador.nome}
            Posição: ${jogador.posicao}
            Número: ${jogador.numero}
        `

        lista.appendChild(jogadorDiv)
    })
}


// REMOVER JOGADOR
btnRemove.addEventListener('click', () => {

    const indice = +prompt('Digite o índice do jogador que deseja remover')

    jogadores.splice(indice, 1)

    renderizarJogadores() 
    /* const excluir = createElement('input')
    excluir.placeholder = 'Excluir jogador pelo indice' */
})

