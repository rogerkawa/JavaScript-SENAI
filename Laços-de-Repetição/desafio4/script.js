let dias = 10
let acumuladora = 0

for(let c = 1; c <= dias; c++){
    acumuladora += c 
    alert(`
        ECONOMIAS
    Dia ${c}:  R$ ${acumuladora},00`)
}