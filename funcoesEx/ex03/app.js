let votos = ''
let cont =''
let a = 0
let b = 0
let c = 0
let branco = 0
let totalV = 0
while(votos != 4){
votos = +prompt(`
1-Votar
2-Exibir resultado
3-Resetar votação
4-Sair`)

if(votos == 4){
    break;
}
function votar(){
    cont = +prompt(`Escolha o seu candidato:
        1-A
        2-B
        3-C
        4-Voto em branco
        `)
        if(cont == 1){
            a++
            totalV++
        }else if(cont==2){
            b++
            totalV++
        }else if(cont==3){
            c++
            totalV++
        }else if(cont==4){
            branco++
            totalV++
        }else{
            alert('Digite um número válido')
        }
}



let porcentagemA = 0
let porcentagemB = 0
let porcentagemC = 0
let porcentagemBranco = 0
function percentual(){
    porcentagemA = (a / totalV)*100
    porcentagemB = (b / totalV)*100
    porcentagemC = (c / totalV)*100
    porcentagemBranco = (branco / totalV)*100
    
    console.log("Resultado:", porcentagemA, porcentagemB, porcentagemC, porcentagemBranco);
}
percentual()

let vencedor = ''

function result(){
    if(a>b && a>c){
        vencedor = 'Vencedor A'
    }else if(b>a && b>c){
        vencedor = 'Vencedor B'
    }else if(c>a && c>b){
        vencedor = 'Vencedor C'
    }else if(a==b || a==c || b==c || c==a){
        vencedor = 'Empate'
    }
    alert(`
        Resultado da votação:
        Votos no a : ${a}                   Percentual: ${porcentagemA.toFixed('2')}
        Votos no b : ${b}                   Percentual: ${porcentagemB.toFixed('2')}
        Votos no c : ${c}                   Percentual: ${porcentagemC.toFixed('2')}
        Votos em branco : ${branco}         Percentual: ${porcentagemBranco.toFixed('2')}
        Vencedor : ${vencedor}
        Total de votos: ${totalV} votos`)
        
}

function resetar(){
    a = 0
    b = 0
    c = 0
    branco = 0
    totalV = 0
    alert(`
        Votos resetados:
        Votos no a = ${a}
        Votos no b = ${b}
        Votos no c = ${c}`)
}
if(votos == 1){
    votar()
}else if(votos ==2){
    result()
}else if(votos==3){
    resetar()
}
}