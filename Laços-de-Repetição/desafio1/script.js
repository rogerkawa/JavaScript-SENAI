let pares = +prompt('Digite até que número você deseja ver os números pares:')
let num = ''

for(let c = 0; c <= pares; c++){
    if(c % 2 == 0){
        num += c + '\n' // \n pra quebra de linha
    }
}
alert(`Números pares até ${pares}:
${num}`)