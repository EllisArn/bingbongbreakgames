const hangman = document.getElementById('hangman')
const hangmanWord = document.getElementById('hangman-word')
const buttonContainer = document.getElementById('button-container')
const submitButton = document.querySelector('#submitButton')
const inputfield = document.querySelector('#inputfield')
let guesses = ''
let numberOfGuesses = 0
let numberOfWrongGuesses = 0
let wordToGuess = ''

console.log('test')

if (guesses === '') {
  displayInputfield()
}

export function displayInputfield() {
  inputfield.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '')
  })
  inputfield.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      e.preventDefault()
      inputfield.remove()
      submitButton.remove()
      displayButtons()
      displayWord(e.target.value)
    }
  })
  submitButton.addEventListener(
    'click',
    () => {
      if (inputfield.value === '') {
        return
      }
      inputfield.remove()
      submitButton.remove()
      displayButtons()
      displayWord(inputfield.value)
    },
    { once: true }
  )
}

function displayButtons() {
  buttonContainer.style.paddingBottom = '20px'
  buttonContainer.innerHTML = `<button id="A-Button">A</button>
    <button id="B-Button">B</button>
    <button id="C-Button">C</button>
    <button id="D-Button">D</button>
    <button id="E-Button">E</button>
    <button id="F-Button">F</button>
    <button id="G-Button">G</button>
    <button id="H-Button">H</button>
    <button id="I-Button">I</button>
    <button id="J-Button">J</button>
    <button id="K-Button">K</button>
    <button id="L-Button">L</button>
    <button id="M-Button">M</button>
    <button id="N-Button">N</button>
    <button id="O-Button">O</button>
    <button id="Q-Button">Q</button>
    <button id="R-Button">R</button>
    <button id="S-Button">S</button>
    <button id="T-Button">T</button>
    <button id="U-Button">U</button>
    <button id="V-Button">V</button>
    <button id="W-Button">W</button>
    <button id="X-Button">X</button>
    <button id="Y-Button">Y</button>
    <button id="Z-Button">Z</button>`
}

function displayWord(word) {
  hangmanWord.style.paddingBottom = '20px'
  wordToGuess = word
  let wordDisplay = ''
  for (var i = 0; i < word.length; i++) {
    wordDisplay += '_ '
  }
  hangmanWord.innerHTML = `<h1>${wordDisplay}</h1>`
  listenToButtons()
}

function listenToButtons() {
  const buttons = document.querySelectorAll('button')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      numberOfGuesses++
      guesses += button.innerHTML
      button.remove()
      guesses += button.innerHTML.toLowerCase()
      let guessArray = guesses.split('')
      displayWordWithGuess(
        wordToGuess.toLowerCase(),
        guessArray,
        button.innerHTML.toLowerCase()
      )
    })
  })
}

function displayWordWithGuess(word, guessArray, guess) {
  let wordDisplay = ''

  for (var i = 0; i < word.length; i++) {
    if (guessArray.includes(word[i])) {
      wordDisplay += word[i] + ' '
    } else {
      wordDisplay += '_ '
    }
  }

  hangmanWord.innerHTML = `<h1>${wordDisplay}</h1>`

  if (!word.includes(guess)) {
    numberOfWrongGuesses++
    hangtheman()
  }
  checkIfWon()
}

function hangtheman() {
  switch (numberOfWrongGuesses) {
    case 1:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /></svg>`
      break
    case 2:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /></svg>`
      break
    case 3:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /></svg>`
      break
    case 4:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="white" stroke-width="3" /></svg>`
      break
    case 5:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="white" stroke-width="3" /><circle id="Kopf" cx="250" cy="125" r="25" fill="none" stroke="white" stroke-width="3" /></svg>`
      break
    case 6:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="white" stroke-width="3" /><circle id="Kopf" cx="250" cy="125" r="25" fill="none" stroke="white" stroke-width="3" /><line id="Körper" x1="250" y1="150" x2="250" y2="250" stroke="white" stroke-width="3" /></svg>`
      break
    case 7:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="white" stroke-width="3" /><circle id="Kopf" cx="250" cy="125" r="25" fill="none" stroke="white" stroke-width="3" /><line id="Körper" x1="250" y1="150" x2="250" y2="250" stroke="white" stroke-width="3" /><line id="Arm-links" x1="250" y1="175" x2="200" y2="200" stroke="white" stroke-width="3" /></svg>`
      break
    case 8:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="white" stroke-width="3" /><circle id="Kopf" cx="250" cy="125" r="25" fill="none" stroke="white" stroke-width="3" /><line id="Körper" x1="250" y1="150" x2="250" y2="250" stroke="white" stroke-width="3" /><line id="Arm-links" x1="250" y1="175" x2="200" y2="200" stroke="white" stroke-width="3" /><line id="Arm-rechts" x1="250" y1="175" x2="300" y2="200" stroke="white" stroke-width="3" /></svg>`
      break
    case 9:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="white" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="white" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="white" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="white" stroke-width="3" /><circle id="Kopf" cx="250" cy="125" r="25" fill="none" stroke="white" stroke-width="3" /><line id="Körper" x1="250" y1="150" x2="250" y2="250" stroke="white" stroke-width="3" /><line id="Arm-links" x1="250" y1="175" x2="200" y2="200" stroke="white" stroke-width="3" /><line id="Arm-rechts" x1="250" y1="175" x2="300" y2="200" stroke="white" stroke-width="3" /><line id="Bein-links" x1="250" y1="250" x2="200" y2="300" stroke="white" stroke-width="3" /></svg>`
      break
    case 10:
      hangman.innerHTML = `<svg width="400" height="400"><line id="Boden" x1="100" y1="350" x2="200" y2="350" stroke="red" stroke-width="3" /><line id="Stange-vertikal" x1="150" y1="350" x2="150" y2="50" stroke="red" stroke-width="3" /><line id="Stange-horizontal" x1="150" y1="50" x2="250" y2="50" stroke="red" stroke-width="3" /><line id="Seil" x1="250" y1="50" x2="250" y2="100" stroke="red" stroke-width="3" /><circle id="Kopf" cx="250" cy="125" r="25" fill="none" stroke="red" stroke-width="3" /><line id="Körper" x1="250" y1="150" x2="250" y2="250" stroke="red" stroke-width="3" /><line id="Arm-links" x1="250" y1="175" x2="200" y2="200" stroke="red" stroke-width="3" /><line id="Arm-rechts" x1="250" y1="175" x2="300" y2="200" stroke="red" stroke-width="3" /><line id="Bein-links" x1="250" y1="250" x2="200" y2="300" stroke="red" stroke-width="3" /><line id="Bein-rechts" x1="250" y1="250" x2="300" y2="300" stroke="red" stroke-width="3" /></svg>`
      break
    default:
      break
  }
}

function checkIfWon() {
  if (
    wordToGuess ===
    wordToGuess
      .split('')
      .filter((letter) => guesses.includes(letter))
      .join('')
  ) {
    hangman.innerHTML = `<h1>Du hast gewonnen</h1>
    <h1>Das Wort war: ${wordToGuess}</h1>
    <div id="endButtonContainer"><button id="newgame" onclick="location.reload()">Neues Spiel</button>
    <a href="/bingbongbreakgames"><button id="homeButton">Startseite</button></a></div>`
    hangmanWord.innerHTML = ''
    buttonContainer.innerHTML = ''
  } else if (numberOfWrongGuesses === 10) {
    hangman.innerHTML += `<h1>Du hast verloren</h1>
    <h1>Das Wort war: ${wordToGuess}</h1>
    <div id="endButtonContainer"><button id="newgame" onclick="location.reload()">Neues Spiel</button>
    <a href="/bingbongbreakgames"><button id="homeButton">Startseite</button></a></div>`
    hangmanWord.innerHTML = ''
    buttonContainer.innerHTML = ''
  }
}
