const botoes = document.querySelectorAll(".botao[data-aba]")
const conteudos = document.querySelectorAll("[data-conteudo]")

botoes.forEach( itens =>{
    itens.addEventListener('click', ()=>{
        //Pegando os números
        const abas = itens.dataset.aba
        console.log(abas)

        //Esconde conteúdo
        conteudos.forEach(conteudo =>{
            conteudo.classList.remove("conteudo-ativo")
            
        })
        const conteudoAtivo = document.querySelector(`[data-conteudo="${abas}"]`)
        // Mostrar apenas o item selecionado
        conteudoAtivo.classList.add("conteudo-ativo")
    })
})



