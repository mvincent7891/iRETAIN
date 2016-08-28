# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `AuthForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `AuthForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `updateUser`
  0. invoked from `SettingsForm` `onSubmit`
  0. `PATCH /api/users` is called.
  0. `removeCurrentUser` is set as the success callback.
* `logOut`
  0. invoked from `UserNavBar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `Home` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Card Cycles

### Cards API Request Actions

* `fetchDeckCards`
  0. invoked from `CardsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/deck/:id/cards` is called.
  0. `receiveDeckCards` is set as the success callback.

* `createCard`
  0. invoked from `add` button `onClick` in `DeckHeader`
  0. `POST /api/cards` is called.
  0. `receiveSingleCard` is set as the success callback.

* `fetchSingleCard`
  0. invoked from `CardDetail` `didMount`/`willReceiveProps`
  0. `GET /api/cards/:id` is called.
  0. `receiveSingleCard` is set as the success callback.

* `updateCard`
  0. invoked from `CardForm` `onSubmit`
  0. `PATCH /api/cards/:id` is called.
  0. `receiveSingleCard` is set as the success callback.

* `moveCard`
  0. invoked from `CardsIndexItem` move button, deck selection `onClick`
  0. `PATCH /api/cards/:id` is called.
  0. `removeCard` is set as the success callback.

* `autoLookUp`
  0. invoked from `CardForm` `lookup` button `onClick`
  0. Dictionary API request is made, `receiveSingleCard` is set as callback

* `destroyCard`
  0. invoked from delete card button `onClick`
  0. `DELETE /api/cards/:id` is called.
  0. `removeCard` is set as the success callback.

### Cards API Response Actions

* `receiveDeckCards`
  0. invoked from an API callback
  0. the `CardReducer` updates `cards` in the application's state.

* `receiveSingleCard`
  0. invoked from an API callback
  0. the `CardReducer` updates `card[id]` in the application's state.

* `removeCard`
  0. invoked from an API callback
  0. the `CardReducer` removes `cards[id]` from the application's state.

## Deck Cycles

### Decks API Request Actions

* `fetchSubjectDecks`
  0. invoked from `DecksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/subjects/:id/decks` is called.
  0. `receiveSubjectDecks` is set as the success callback.

* `createDeck`
  0. invoked from `add` button `onClick` in `SubjectHeader`
  0. `POST /api/decks` is called.
  0. `receiveSingleDeck` is set as the callback.

* `fetchSingleDeck`
  0. invoked from `DeckHeader` `didMount`/`willReceiveProps`
  0. `GET /api/decks/:id` is called.
  0. `receiveSingleDeck` is set as the success callback.

* `moveDeck`
  0. invoked from `DecksIndexItem` move button `onClick`
  0. `PATCH /api/decks/:id` is called.
  0. `removeDeck` is set as the success callback

* `updateDeck`
  0. invoked from `DeckForm` `onSubmit`
  0. `PATCH /api/decks/:id` is called.
  0. `receiveSingleDeck` is set as the success callback.

* `destroyDeck`
  0. invoked from delete deck button `onClick`
  0. `DELETE /api/decks/:id` is called.
  0. `removeDeck` is set as the success callback.

### Decks API Response Actions

* `receiveSubjectDecks`
  0. invoked from an API callback.
  0. The `Deck` reducer updates `decks` in the application's state.

* `receiveSingleDeck`
  0. invoked from an API callback.
  0. The `Deck` reducer updates `decks[id]` in the application's state.

* `removeDeck`
  0. invoked from an API callback.
  0. The `Deck` reducer removes `decks[id]` from the application's state.

## Subject Cycles

### Subjects API Request Actions

* `fetchAllSubjects`
  0. invoked from `SubjectsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/subjects` is called.
  0. `receiveAllSubjects` is set as the success callback.

* `createSubject`
  0. invoked from `create` button `onClick` in SidebarHeader
  0. `POST /api/subjects` is called.
  0. `receiveSingleSubject` is set as the callback.

* `fetchSingleSubject`
  0. invoked from `SubjectHeader` `didMount`/`willReceiveProps`
  0. `GET /api/subjects/:id` is called.
  0. `receiveSingleSubject` is set as the success callback.

* `updateSubject`
  0. invoked from `SubjectForm` `onSubmit`
  0. `PATCH /api/subjects/:id` is called.
  0. `receiveSingleSubject` is set as the success callback.

* `destroySubject`
  0. invoked from delete subject button `onClick`
  0. `DELETE /api/subjects/:id` is called.
  0. `removeSubject` is set as the success callback.

### Subjects API Response Actions

* `receiveAllSubjects`
  0. invoked from an API callback.
  0. The `Subject` reducer updates `subjects` in the application's state.

* `receiveSingleSubject`
  0. invoked from an API callback.
  0. The `Subject` reducer updates `subjects[id]` in the application's state.

* `removeSubject`
  0. invoked from an API callback.
  0. The `Subject` reducer removes `subjects[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchResults`
  0. invoked from `Search` `onChange` when there is text
  0. `GET /api/decks` is called with `text` param
  0. `receiveSearchResults` is set as the success callback (receives decks - can pull out subjects from there)

* `receiveSearchResults`
  0. invoked from an API callback.
  0. The `SearchResult` reducer updates `results` in the application's state. `results` will contain `Deck` names and `Subject` names. Owned entities will display `view` button; otherwise will display `add` button.

* `removeSearchResults`
  0. invoked from `Search` `onChange` when empty
  0. The `SearchResult` reducer resets `results` in the application's state.

* `copyDeck`
  0. invoked from `DeckSearchResultsItem` `add` button `onClick`,  selection of `Subject`
  0. `POST /api/decks` is called with copyId and subjectId params.
  0. `updateSearchResults` is set as the callback.

* `copySubject`
  0. invoked from `SubjectSearchResultsItem` `add` button `onClick`
  0. `POST /api/subjects` is called with copyId param.
  0. `updateSearchResult` is set as the callback.

* `updateSearchResults`
  0. invoked from an API callback
  0. The `SearchResult` reducer updates `results` in the application's state (remember: `view` or `add`)

#TODO
## Quiz Cycles
