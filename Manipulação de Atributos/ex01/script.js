const input = document.querySelector('[type="text"]')
const buttonType = document.getElementById('type')

buttonType.addEventListener('click', ()=>{
    let type = input.getAttribute('type')
    if(type == 'text'){
        input.setAttribute('type', 'radio')
    }else if(type == 'radio'){
        input.setAttribute('type', 'text')
    }   
})