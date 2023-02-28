const title = document.querySelector('title')
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const stylesheet = document.querySelector('link')

const renderHome = () => {
  stylesheet.href = '/bingbongbreakgames/styles/homeStyle.css'
  title.innerHTML = 'BingBongBreakGames'
  nav.innerHTML = `<a href="/bingbongbreakgames"><h1>Home</h1></a>`
  main.innerHTML = `<a class="homePageButtonContainer" href="#hangman"><button class="homePageButton">Hangman</button></a>
    <a class="homePageButtonContainer" href="#numberguesser"><button class="homePageButton">NumberGuesser</button></a>`
}

const renderHangman = () => {
  stylesheet.href = '/bingbongbreakgames/styles/hangmanStyle.css'
  title.innerHTML = 'Hangman'
  nav.innerHTML = `<a href="/bingbongbreakgames"><h1>Hangman</h1></a>`
  main.innerHTML = `<div id="hangman-container">
    <div id="hangman"></div>
    <div id="hangman-word"></div>
    </div>
    <div id="button-container"></div>`
  import('./exports/hangman.js').then((module) => {
    module.displayInputfield()
  })
}

const renderNumberGuesser = () => {
  stylesheet.href = '/bingbongbreakgames/styles/numberGuesserStyle.css'
  title.innerHTML = 'NumberGuesser'
  nav.innerHTML = `<a href="/bingbongbreakgames"><h1>NumberGuesser</h1></a>`
  main.innerHTML = `<h1 id="outputfield">
  Gib eine Zahl ein, die als Zahlenmenge dienen wird
</h1>
<input id="inputfield" />
<button id="submitButton">Submit</button>`
  import('./exports/numberGuesser.js').then((module) => {
    module.preGame()
  })
}
