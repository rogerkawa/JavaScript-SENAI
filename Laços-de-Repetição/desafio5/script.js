let tempIdeal = +prompt("Digite a temperatura ideal para os seus produtos:");
let tempo = 0
let tempAtual = +prompt('Digite a temperatura atual: ')

while(tempAtual < tempIdeal){
    tempAtual++
    tempo++
    alert(`Aquecendo... ${tempo} segundos`)
}
alert('Temperatura Ideal Alcançada')

for(let c = 1; c <= 5; c++){

        if(tempIdeal == tempAtual){
            alert(`Aquecendo por mais ${c} segundos`)
        }
        tempo ++
    }
alert(`Tempo que o aquecedor ficou ligado ${tempo} segundos`)
