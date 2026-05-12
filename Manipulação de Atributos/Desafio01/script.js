const input = document.querySelector('[type="password"]')
const buttonType = document.getElementById('view')
const img = document.querySelector('#eyes')

buttonType.style.display = 'none'



buttonType.addEventListener('click', ()=>{
    let type = input.getAttribute('type')
    if(type == 'password'){
        input.setAttribute('type', 'text')
        img.src = 'images/eye.png'
    }else if(type == 'text'){
        input.setAttribute('type', 'password')
        img.src = 'images/hide.png'
    }
    
})

input.addEventListener('input', ()=>{
    if(input.value.length <= 0){
        buttonType.style.display = 'none'
    }else{
        buttonType.style.display = 'block'
    }
})