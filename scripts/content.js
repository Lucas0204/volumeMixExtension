function setVolume(volume) {
    let audios = [...document.getElementsByTagName('audio')]
    audios.forEach(audio => {
        audio.volume = volume
    })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    setVolume(request.newVolume)
})