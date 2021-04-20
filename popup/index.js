const input = document.querySelector('#volume')

let newVolume = localStorage.getItem('volume') || 0.5
input.value = newVolume

input.addEventListener('input', (event) => {
    newVolume = Number(event.target.value)
    sendMessage({ newVolume })
    localStorage.setItem('volume', newVolume)
})

function sendMessage(message) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message)
    })
}
