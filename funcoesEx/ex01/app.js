
let opcoes = +prompt(`
    Escolha a opção que deseja:
    1- área do triângulo
    2- área do retângulo
    3- área do quadrado
    4- área do trapézio
    5- área do círculo
    6- Sair
    `)

    let a
    let b
    let l
    let bMaior
    let bMenor
    let r
    switch(opcoes){
        case 1:
            b = +prompt('Digite a base')
            a = +prompt('Digite a altura')
            triangulo(b,a)
            break;
        case 2:
            b = +prompt('Digite a base')
            a = +prompt('Digite a altura')
            retangulo(b,a)
            break;
        case 3:
            l = +prompt('Digite o tamanho do lado do quadrado')
            quadrado(l)
            break;
        case 4:
            bMaior = +prompt('Digite a base maior do trapézio')
            bMenor = +prompt('Digite a base menor do trapézio')
            a = +prompt('Digite a altura do trapézio')
            trapezio(bMaior,bMenor,a)
            break;
        case 5:
            r = +prompt('Digite o tamanho do raio da circunferência')
            circulo(3.14,r)
            break;
        case 6:
            window.close()
            break;
        default:
            alert('Opção Inválida')
            break;
    }
function triangulo(b,a){
    let result = (b*a) / 2
    alert(`
        área do triângulo: ${result}`)
}
function retangulo(b,a){
    let result = b*a
    alert(`
        área do retângulo: ${result}`)
}
function quadrado(l){
    let result = l**2
    alert(`
        área do quadrado: ${result}`)   
}
function trapezio(bMaior,bMenor,a){
    let result = ((bMaior + bMenor) * a) / 2
    alert(`
        área do trapézio: ${result}`)
}
function circulo(pi,r){
    let result = pi*(r**2)
    alert(`
        área do circulo: ${result}`)
}
