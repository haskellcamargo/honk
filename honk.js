const HONK_URL = 'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3'

const $honk = document.getElementById('honk')

$honk.addEventListener('click', () => {
    const audio = new Audio(HONK_URL)
    audio.play()
});
