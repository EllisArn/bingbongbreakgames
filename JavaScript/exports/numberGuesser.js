const inputfield = document.querySelector('#inputfield')
const outputfield = document.querySelector('#outputfield')
const submitButton = document.querySelector('#submitButton')

let randomNumber = 0
let maxNumber = 0

export function preGame() {
  inputfield.focus()

  inputfield.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
  })

  inputfield.onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      startGame()
    }
  }

  submitButton.addEventListener(
    'click',
    () => {
      startGame()
    },
    { once: true }
  )
}

function startGame() {
  inputfield.onkeydown = null
  maxNumber = inputfield.value
  randomNumber = Math.floor(Math.random() * maxNumber + 1)
  outputfield.innerHTML = `Gib eine Zahl zwischen 1 und ${maxNumber} ein`
  inputfield.value = ''
  submitButton.addEventListener('click', () => {
    checkNumber()
  })
  inputfield.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      checkNumber()
    }
  })
}

function checkNumber() {
  const number = inputfield.value
  if (number > maxNumber) {
    outputfield.innerHTML = `Die Zahl muss zwischen 1 und ${maxNumber} sein`
  } else if (number < 1) {
    outputfield.innerHTML = `Die Zahl muss zwischen 1 und ${maxNumber} sein`
  } else {
    if (number == randomNumber) {
      outputfield.innerHTML = 'Du hast gewonnen!'
      inputfield.remove()
      submitButton.remove()
      main.innerHTML += `<div id="endButtonContainer"><button id="newgame" onclick="location.reload()">Neues Spiel</button>
      <a href="/bingbongbreakgames"><button id="homeButton">Startseite</button></a></div>`
    } else if (number > randomNumber) {
      outputfield.innerHTML = 'Die Zahl ist kleiner'
    } else if (number < randomNumber) {
      outputfield.innerHTML = 'Die Zahl ist größer'
    }
  }
  inputfield.value = ''
}
