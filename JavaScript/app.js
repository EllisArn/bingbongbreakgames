const routes = {
  home: { hash: '#home', function: renderHome },
  hangman: { hash: '#hangman', function: renderHangman },
  numberguesser: { hash: '#numberguesser', function: renderNumberGuesser },
}

const router = new Router(routes)
router.urlResolve()
