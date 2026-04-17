let senha = prompt('Digite a sua senha:')
let senhaC = ''
alert(`Quantidade de caracteres:  ${senha.length}`)

for (let i = 0; i < senha.length; i++) {
    senhaC += senha[i] + '\n'
}
alert(`
    Senha digito a digito:
${senhaC}`)