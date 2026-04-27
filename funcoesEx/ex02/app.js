let opcoes = +prompt(`
    O que você deseja ver:
1- Calcular salário líquido
2- Exibir resumo do cálculo
3- Sair`)

let desconto = 0
let hTrabalhadas = 0
let vHora = 0
let salario = 0
let salarioLiquido = 0
let vale = 0
let bonus = 0
let salarioBruto = 0
function salario(){

    vHora = +prompt('Digite o valor que recebes por hora trabalhada: ')
    hTrabalhadas = +prompt('Digite a quantidade de horas trabalhadas:')

    salario = vHora * hTrabalhadas

    salarioBruto = salario

    if(salario <= 1500){
        desconto = salario * 0.08
    }else if(salario > 1500 && salario <=3000){
        desconto = salario * 0.09
    }else if(salario>3000){
        desconto = salario * 0.11
    }
    vale = salario * 0.06
    if(hTrabalhadas > 160){
        bonus = salario * 0.05
    }
    salarioLiquido = salario + bonus - desconto - vale
    
    alert(salarioLiquido)
    }

    
function resumo(){
        alert(`
            Resumo do Salário
        Salário Bruto : ${salarioBruto}
        Desconto INSS : ${desconto}
        Desconto Vale : ${vale}
        Bônus : ${bonus}
        Salário Líquido: ${salarioLiquido}`)
    }
function sair(){
        window.close()
    }
    
    if(opcoes == 1){
        salario()
    }else if(opcoes == 2){
        resumo()
    }else if(opcoes ==3){
        sair()
    }



/* if(opcoes == 1){
    vHora = +prompt('Digite o valor que recebes por hora trabalhada: ')
    hTrabalhadas = +prompt('Digite a quantidade de horas trabalhadas:')

    salario = vHora * hTrabalhadas

    if(salario <= 1500){
        desconto = salario * 0.08
    }else if(salario >1500 && salario <=3000){
        desconto = salario * 0.09
    }else if(salario>3000){
        desconto = salario * 0.11
    }
    vale = salario * 0.06
    if(hTrabalhadas > 160){
        bonus = salario * 0.05
        salarioLiquido += bonus
    }

} */