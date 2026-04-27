let votos = ''
let cont =''
let a = 0
let b = 0
let c = 0
let branco = 0
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
        }else if(cont==2){
            b++
        }else if(cont==3){
            c++
        }else if(cont==4){
            branco++
        }else{
            alert('Digite um número válido')
        }

}

let totalV= 0
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
        Votos no a : ${a}
        Votos no b : ${b}
        Votos no c : ${c}
        Vencedor : ${vencedor}`)
        
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