## SubjectContainer
- MapStateToProps: `decks`
- MapDispatchToProps: `removeDeck()`, `createDeck()`, `fetchSubjectDecks()`

## Subject
- State: `decks`
- Props: `decks`, `removeDeck()`,  `fetchSubjectDecks()`
- `didMount()` => `fetchSubjectDecks()`

## SubjectHeader
- State:
- Props: `decks`, `removeDeck()`

## DecksIndex
- Props: `removeDeck()`, `decks`

## DecksIndexItem
- State: `selected`, default: false
- Props: `removeDeck()`, `title`
- `onClick()` toggles `selected`
- If selected, show  `Edit`, `Remove`, `Study` buttons
- Title: `onClick()` will redirect to `DeckContainer`
