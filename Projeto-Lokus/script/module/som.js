export default function initAudio(){
    const audio = document.getElementById('alternar-musica')
    const ativaAudio = new Audio('sons/luna-rise-part-one.mp3')

    audio.addEventListener('change', () =>{
        if(ativaAudio.paused){
            ativaAudio.play()
        }else{
            ativaAudio.pause()
        }
    })
}