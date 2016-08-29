## SubjectContainer
- MapStateToProps: `decks`
- MapDispatchToProps: `removeDeck()`, `createDeck()`

## Subject
- State:
- Props: `decks`, `removeDeck()`

## SubjectHeader
- State:
- Props: `decks`, `removeDeck()`

## DecksIndex
- Props: `removeDeck()`, `decks`
- State: `selectedRow` (default null)
- Methods: `changeSelectedRow()`

## DecksIndexItem
- Props: selected, removeDeck(), changeSelectedRow(), title
- If selected, show  `Edit`, `Remove`, `Study`, buttons.
- Title: `onClick()` will redirect to `DeckContainer`
