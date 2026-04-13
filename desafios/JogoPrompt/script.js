//jogador1 atacante
let nome1 = prompt('Digite o nome do seu personagem: ')
let poder1 = +prompt ('Digite o poder de seu personagem de 0 a 100! ')

while(poder1 > 100 || poder1 <= 0){
    alert('Digite um valor válido!')
    poder1 = +prompt('Digite o poder de seu personagem de 0 a 100!')
}
    alert(`Bem vindo ${nome1} o seu poder é de ${poder1}`)

//jogador2 defesa
let vidaPersonagem = 70
let nome2 = prompt('Digite o nome do segundo personagem: ')
let escudo = prompt(`Você deseja adicionar escudo em seu personagem? (O valor do escudo é aleatório entre 1 e 50)
    'Sim' ou 'Não'`)

    if(escudo == 'Sim' || escudo == 'sim' || escudo == 'SIM'){
        escudo = Math.floor(Math.random() * 50) + 1 //randomiza o valor do escudo entre 1 e 50
        vidaPersonagem = vidaPersonagem + escudo // adiciona escudo a vida do personagem

        if(poder1 <= vidaPersonagem){
            alert(`Nenhum dano causado!
            ${nome2} venceu a batalha!`)

        }else if(poder1 > vidaPersonagem){
                let res = (poder1 - vidaPersonagem) / 2 //calculo do ataque
                vidaPersonagem = vidaPersonagem - res

                alert(`${nome1} causou ${res} pontos de ataque, deixando ${nome2}
            com ${vidaPersonagem} pontos de vida`)
        }

    }else if(escudo =='Não' || escudo =='não' || escudo =='NÃO' || escudo == 'nao' || escudo =='Nao'){
        alert(`Você continuará com a vida padrão de ${vidaPersonagem}`)
        alert(`Bem vindo ${nome2} você possui ${vidaPersonagem} de vida!`)
        alert('Batalha Iniciada!')

        if(Math.random()< 0.5){ //chance de 50% para desviar do ataque e vencer sem o escudo
        alert(`${nome2} conseguiu desviar de seu ataque e venceu a batalha`)
    }else{
        alert(`Parabéns ${nome1} você venceu a batalha com apenas um golpe!`)
    }
    }