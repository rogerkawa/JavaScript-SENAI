let num = 20

for(let c = 0; c <=num; c++){
    alert(`
        Contagem:
        ${c}`)
    if(c == 9){
        alert('Número proibido encontrado! Encerrando...')
        break;
    }
}