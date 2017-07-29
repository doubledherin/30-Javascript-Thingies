function playSound(e) {
    const audio = document.querySelector(`audio[data-key]="${e.keyCode}"`)
}

function playSound(e) {
    // retrieve from the DOM  an <audio/> element with a data-key that matches e's
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    // case: no such audio element (audio === null)
    if (!audio) return

    // retrieve from the DOM an element with 1) a class 'key' and 2) a data-key that matches e's
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    console.log("audio: ", audio)
    // <audio/> is an HTML5 HMTLMediaElement,
    // which has documentation
    // here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

    // if this audio element is already in the middle of a .play() execution,
    // interrupt it by starting the time to 0.
    audio.currentTime = 0

    audio.play()

    // only add 'playing' class if the key that was pressed is in the DOM
    if (key) {
        // vanilla JS way of adding a class
        key.classList.add('playing')
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}
///////////// end function definitions

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound)
