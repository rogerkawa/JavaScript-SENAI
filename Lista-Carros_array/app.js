let car = []
let list = ''

for(let i = 0; i < 5; i++){
    let addCar = prompt('Adicione 5 carros a lista!')
    /* car.push( i + ': ' + addCar) */
    car.push(addCar)
}



let remove = ''
let excluidos = ''
let exibir 
for(let i = 0; i < 2; i++){
    excluidos = prompt(`Escolha os carros que deseja remover
Carro ${i + 1}: `)
     /* remove += car.splice(excluidos, 1) */
     while(car.indexOf(excluidos) == - 1){
        alert('Erro! Carro não presente na lista!')
        excluidos = prompt(`Escolha os carros que deseja remover
Carro ${i + 1}: `)
        }
        exibir = car.indexOf(excluidos)
        remove += car.splice(exibir , 1, 'Carro Excluído') + '\n'
}

/* let remove = car.splice(0,2) */

alert(`Carros removidos: 
${remove}`) 

let add = ''
for(let c = 0; c < 3; c++){
    addCar = prompt('Adicione mais três carros a lista')
    car.push(addCar)
    add += addCar + '\n'
}
alert(`
    Carros adicionados:
${add}`) 
alert(`
    Lista de carros atual:
${car.join('\n')}`)