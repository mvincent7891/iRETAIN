# iRETAIN.IO

Heroku Link

## Minimum Viable Product

iRETAIN is a web application inspired by Brainscape built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

## MVP Checklist Format

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] Subjects (for organizing decks)
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Decks (for organizing cards)
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Cards (flash cards for studying)
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Deck Tags for Searching
  - [ ] Adequate styling
  - [ ] Smooth, addition and deletion of tags
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Quiz/Study Session
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation through quiz
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Auto-lookup for New Cards
  - [ ] Dictionary API connection
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: ./Wireframes
[components]: ./component-hierarchy.md
[redux-structure]: ./redux-structure.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/sign-in components
- [ ] Blank landing component after signup/sign-in
- [ ] Navigation components
- [ ] Style signup/sign-in and navigation components
- [ ] Seed users
- [ ] Deploy to Heroku
- [ ] Review phase 1

### Phase 2: Subjects Model, API, and components (2 days)

**Objective:** Subjects can be created, viewed, copied (from other users) edited and destroyed through the API.

- [ ] `Subject` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for subjects (`SubjectsController`)
- [ ] JBuilder views for subjects
- [ ] Subject components and respective Redux loops
  - [ ] `SubjectIndexContainer`
  - [ ] `SubjectsIndex`
  - [ ] `SubjectIndexItem`
  - [ ] `SubjectContainer`
  - [ ] `SubjectHeader`
  - [ ] `NewSubjectFormContainer`
  - [ ] `NewSubjectForm`
- [ ] Copy subject API
- [ ] Style subject components
- [ ] Seed subjects

### Phase 3: Decks (2 days)

**Objective:** Subjects have many Decks that can be created, viewed, edited, copied, and destroyed through the API.

- [ ] `Deck` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for decks (`DecksController`)
- [ ] JBuilder views for decks
- [ ] Adding decks requires a subject
- [ ] Copy deck API
- [ ] Deck components and respective Redux loops
  - [ ] `DeckIndexContainer`
  - [ ] `DecksIndex`
  - [ ] `DeckIndexItem`
  - [ ] `DeckContainer`
  - [ ] `DeckHeader`
  - [ ] `NewDeckFormContainer`
  - [ ] `NewDeckForm`
- [ ] Moving decks between subjects
- [ ] Viewing decks by subject
- [ ] Style deck components
- [ ] Seed decks

### Phase 4: Cards (1 day)

**Objective:** Decks have many Cards that can be created, viewed, edited, copied and destroyed through the API.

- [ ] `Card` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for cards (`CardsController`)
- [ ] JBuilder views for cards
- [ ] Adding cards requires a deck
- [ ] Card components and respective Redux loops
  - [ ] `CardIndexContainer`
  - [ ] `CardsIndex`
  - [ ] `CardIndexItem`
  - [ ] `CardContainer`
  - [ ] `CardHeader`
  - [ ] `NewCardFormContainer`
  - [ ] `NewCardForm`
- [ ] Auto lookup body of card using dictionary API
- [ ] Moving cards between decks
- [ ] Viewing cards by deck
- [ ] Style card components
- [ ] Seed cards (faker and auto lookup)

### Phase 5: Tags and Search (2 days)

**Objective:** Decks can be tagged with multiple tags; and subjects and decks are searchable by tag.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for decks
- [ ] Adding tags to decks
- [ ] Searching public (and owned) decks and subjects by tag
  - [ ] Search components and associated redux loops
  - [ ] Search results components (decks and subjects)
- [ ] Style search & tag components
- [ ] Seed tags with seed data


### Semi-Bonus 1: Quizzes /  (1 day)

**objective:** Users can take short quizzes on a given subject

- [ ] `Quiz` model
- [ ] Associated React components and redux cycle
- [ ] Quiz API (create quiz result)
- [ ] Access history of quizzes from quiz options page
- [ ] Adequate seed data to take quizzes

### Semi-Bonus 2: Chrome Extension / (1 day)

**objective:** Users can create cards while browsing elsewhere using the Chrome extension

- [ ] Download Extension Content
- [ ] Connect extension to app (request default deck, require login, redirect to login page,  save username)
- [ ] Connect extension to dictionary API
- [ ] Rails API for creating cards from extension
- [ ] JS Chrome Extension looks up word, displays definition, and creates card in default deck
- [ ] Rails API sends list of words to highlight on current page
  - [ ] Rails API includes synonyms (need another model, `Synonyms`, and probably an additional thesaurus API)

### Bonus Features (TBD)
- [ ] Guest login
- [ ] Progress tracking
  - [ ] Quiz question updates review for `concept` (review += 1)
  - [ ] Quiz question updates correct responses param for `concept`
  - [ ] Quiz questions are chosen based on mastery (reviews and correct responses)
- [ ] Settings Content and functionality
- [ ] Add images to cards, decks and subjects
- [ ] Search decks and subjects by card title/content
- [ ] View all tags for all decks in a subject; Filter decks in index by selected tags
- [ ] Drag and drop `move` for `Decks`
- [ ] Facebook OmniAuth
- [ ] Gmail OmniAuth
- [ ] Contact Content
- [ ] About Content
- [ ] How it Works Content
- [ ] Autosave subjects, decks, and headers feature
- [ ] Infinite scroll, pagination for decks, cards
