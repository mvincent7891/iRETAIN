## SubjectContainer
- MapStateToProps: `decks`
- MapDispatchToProps: `removeDeck()`, `createCard()`, `fetchSubjectDecks()`

## Subject
- State:
- Props: `decks`, `removeDeck()`, `fetchSubjectDecks()`
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
- If selected, show  `Edit`, `Remove` and `Study` buttons
- Title: `onClick()` will redirect to `DeckContainer`
