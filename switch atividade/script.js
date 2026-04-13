let venda = +prompt(`Por favor, nos informe o valor de sua compra`)
let desconto = 0

let cliente = +prompt(`Bem vindo(a)!
            Selecione o seu relacionamento com a loja
    1- Cliente Comum
    2- Funcionário
    3- Cliente Vip
    `)

    while(cliente < 1 || cliente > 3){
        alert('Valor Inválido, por favor digite um valor que esta presente na tabela!')
        cliente = +prompt(`Bem vindo(a)!
            Selecione o seu relacionamento com a loja
    1- Cliente Comum
    2- Funcionário
    3- Cliente Vip
    `)

    }

    switch(cliente){
        case 1:
            alert(`O valor da sua conta foi de R$${venda} reais
                Desconto Aplicado: ${desconto} reais`)
                break;

        case 2:
            desconto = venda * 0.10
            venda = venda - desconto
            alert(`O valor da conta foi de R$${venda} reais
                Desconto Aplicado ${desconto} reais`)
                break;

        case 3:
            desconto = venda * 0.05
            venda = venda - desconto
            alert(`O valor da conta foi de R$${venda} reais
                Desconto Aplicado ${desconto} reais`)
                break;

        default:
            alert('Por favor ensira um valor válido')
    }