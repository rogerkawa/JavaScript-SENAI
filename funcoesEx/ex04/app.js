let menu =''
let estoque = []
let entrada = 0
let estoqueInicial = +prompt('Adicione quantos produtos possui em estoque: ')
for(let c = 0; c < estoqueInicial; c++){
    estoque.push(c)
}
while(menu != 5){
    menu = +prompt(`
    O que desejas ver?
1-Entrada de produtos
2-Saída de produtos
3-Consultar estoque atual
4-Verificar situação do estoque
5-Sair`)
    if(menu==5)
        break;

function entradaP(){
    let qtd = +prompt('Quantos produtos deseja adicionar?')
    for(let c = 0; c < qtd; c++){
        estoque.push(c)
    }
}

function saidaP(){
    let qtd = +prompt('Quantos produtos deseja remover?')
    if(qtd > estoque.length){
        alert('Não será possivel remover essa quantidade, pois supera a quantidade em estoque!')
    }else{
        alert(`Foram removidas ${qtd} unidades`)
    }

    for(let c = 0; c < qtd; c++){
        estoque.pop()
    }
}

function consultaP(){
    alert(`Estoque atual de ${estoque.length} unidades`)
}

function verificar(){
    if(estoque.length == 0){
        alert('Sem estoque!')
    }else if(estoque.length >= 1 && estoque.length <= 10){
        alert('Estoque Baixo')
    }else if(estoque.length > 10){
        alert('Estoque adequado')
    }
}

if(menu == 1){
    entradaP()
}else if(menu == 2){
    saidaP()
}else if(menu == 3){
    consultaP()
}else if (menu == 4){
    verificar()
}else if(menu == 5){
    alert('Encerrando programa...')
}
}