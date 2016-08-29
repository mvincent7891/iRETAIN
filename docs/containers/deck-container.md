## DeckContainer
- MapStateToProps: `cards`
- MapDispatchToProps: `removeCard()`, `createCard()`, `fetchDeckCards()`

## Deck
- State:
- Props: `cards`, `removeCard()`, `fetchDeckCards()`
- `didMount()` => `fetchDeckCards()`

## DeckHeader
- State:
- Props: `cards`, `removeCard()`

## CardsIndex
- Props: `removeCard()`, `cards`

## CardsIndexItem
- State: `selected`, default: false
- Props: `removeCard()`, `title`, `body`
- `onClick()` toggles `selected`
- If selected, show  `Edit`, `Remove`, `Move`, buttons and `body`
- Title: `onClick()` will redirect to `CardContainer`
