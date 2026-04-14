let fases = +prompt('Quantidades de fases jogadas: ')
let pontuacao = 0
let pontuacaoGeral = 0
let media = 0
let acumuladora = 0
for(let c = 1; c <= fases ; c++){
    alert(`Fase ${c}`)
    pontuacao = +prompt('Pontuação obtida: ')
    pontuacaoGeral += pontuacao
    media = pontuacaoGeral / c

    if (pontuacao>100){
        acumuladora += 1
    }
}

alert(`Pontuação total:  ${pontuacaoGeral}
    Media de pontos por fase:  ${media}
    Fases acima de 100:  ${acumuladora}`)