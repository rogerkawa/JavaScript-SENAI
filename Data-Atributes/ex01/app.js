let botao = document.querySelectorAll('.timeButton[data-menssage]')
let title = document.querySelector('h1')

botao.forEach(item => {
    item.addEventListener('click', ()=>{
        let contexto = item.dataset.menssage
        alterar(contexto)
    })
})

function alterar(contexto){
    if(contexto == 'Bom-dia'){
        title.innerText = contexto
    }else if(contexto == 'Boa-tarde'){
        title.innerText = contexto
    }else if(contexto == 'Boa-noite'){
        title.innerText = contexto
    }
}