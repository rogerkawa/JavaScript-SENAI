let senha = prompt('Digite a sua senha')
let confirmSenha = ''

for(let c = 1; c <= 3; c++){
    confirmSenha = prompt('Digite a sua senha novamente')

    if(senha !== confirmSenha){
        alert(`Tentativa ${c} inválida.`)
        
        if(c==3){
        alert('Acesso bloqueado. Número máximo de tentativas atingido.')
    }
    }else if(senha === confirmSenha){
        alert('Acesso permitido!')
        break;
    }
}