const shuffle = (array) => {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const initialState = (images) => {
  const shuffledCards = shuffle([...images, ...images])
  return {
    cards: shuffledCards,
    flippedCardsIndices: new Set(),
    matchedCards: new Set(),
    gameOver: false,
  }
}

const pick = (previousState, index) => {
  if (previousState.flippedCardsIndices.has(index) && previousState.flippedCardsIndices.size === 1) {
    return previousState
  }
  if (!previousState.cards[index]) {
    return previousState
  }
  // first card
  if (previousState.flippedCardsIndices.size === 0 || previousState.flippedCardsIndices.size === 2) {
    return {
      ...previousState,
      flippedCardsIndices: new Set([index]),
    }
  }
  // second card
  const firstCardIndex = [...previousState.flippedCardsIndices][0]
  const firstCard = previousState.cards[firstCardIndex]
  const secondCard = previousState.cards[index]

  if (firstCard.url === secondCard.url) {
    const cards = [...previousState.cards]
    cards[firstCardIndex] = null
    cards[index] = null 
    return {
      cards: cards,
      flippedCardsIndices: new Set(),
      matchedCards: new Set([...previousState.matchedCards, firstCard.url]),
      gameOver: previousState.cards.filter((card) => !!card).length === 2,
    }
  }
  return {
    ...previousState,
    flippedCardsIndices: new Set([firstCardIndex, index]),
  }
}

export { pick, initialState };
