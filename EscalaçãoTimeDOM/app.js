
let jogadores = []

const body = document.querySelector('body')

const nome = document.createElement('input')
const position = document.createElement('input')
const number = document.createElement('input')

const btnAdd = document.createElement('button')

const inputRemove = document.createElement('input')

const btnRemove = document.createElement('button')

const lista = document.createElement('div')

lista.style.textAlign = 'center'
lista.style.height = '60vh'
lista.style.border = '1px solid black'
lista.style.width = '15vw'

nome.classList.add('input')
position.classList.add('input')
number.classList.add('input')
inputRemove.classList.add('input')

nome.placeholder = 'Digite o nome do jogador'
position.placeholder = 'Digite a posição do jogador'
number.placeholder = 'Digite o número do jogador'
inputRemove.placeholder = 'Digite o indice do jogador que deseja remover'

btnAdd.innerText = 'Adicionar Jogador'
btnRemove.innerText = 'Remover Jogador'

body.append(nome, position, number, btnAdd,inputRemove, btnRemove, lista)

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

    /* const indice = +prompt('Digite o índice do jogador que deseja remover') */
    const indice = inputRemove.value

    jogadores.splice(indice, 1)
    
    renderizarJogadores() 
    inputRemove.value = ''
    /* const excluir = createElement('input')
    excluir.placeholder = 'Excluir jogador pelo indice' */
})

