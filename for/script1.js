let preco 
let nome
let qtd
let total = 0
let totalGeral = 0
let acumuladora = 0
let maiorPreco = 0
let produtos = +prompt('Qual a quantidade de produtos comprados: ')

for(let c = 1; c <= produtos; c++){
    alert(`Produto ${c}`)
    nome = prompt('Nome do produto: ')
    preco = +prompt('Preço do produto: ')
    qtd = +prompt(`Quantidade de ${nome}:`)
    total = preco * qtd
    totalGeral += total
    if(preco>100){
        acumuladora += 1
    }
    if (maiorPreco < preco){
        maiorPreco = preco
    }
    

}
alert(`
    Valor total da compra: ${totalGeral} reais
    Produtos mais caros que R$100: ${acumuladora} Produtos
    Produto mais caro: ${maiorPreco}
    `)