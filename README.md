<a name="top_of_page"></a>

[![Logo][logo_image]][live_app]
[logo_image]: ./app/assets/images/medium_logo.png

# iRetain: Create and Study Topical Flash Card Decks

[iRetain live][live_app]
[live_app]: http://www.iretain.io

iRetain is a full-stack web app inspired by Brainscape. It utilizes Ruby on Rails and a PostgreSQL database on the backend, and React.js with a Redux architectural framework on the frontend.  

## Motivation
The primary purpose of iRetain is to help students strengthen retention of new concepts using flashcards and interactive study sessions. While the core features are similar to many other flash card apps, the app was built with a novel feature in mind: in future releases, the iRetain Chrome extension will enable dynamic creation of flashcards from anywhere on the web. Simply install the extension and click on a word to view it's definition. In the background, iRetain will build a flash card for you, enabling you to revisit words you've looked up previously while browsing or studying. The [auto lookup](#lookup) feature showcases some of this eventual functionality.

![ExDemo][ex_demo]
[ex_demo]: ./docs/images/ex_demo.gif

## Demo
To get a feel for the app, login as a guest and take a tour. Simply navigate to the [splash page][live_app], and click on the large `DEMO` link. The remainder of this README will guide you through the app's features as if you were logged in as a guest.

![Demo][demo_login]
[demo_login]: ./docs/images/home.gif

## Overview: Subjects, Decks and Cards
As soon as you login, you will see an index of subjects to the left, as well as links to the primary flashcard deck features: view (eye icon), search (magnifying glass icon), and study (graduation cap icon).

![Home][home_image]
[home_image]: ./docs/images/home.png

Users may be familiar with the overall structure of iRetain: Subjects contain decks, and decks contain flashcards. Each card has a title and a body. When studying, the title is used as the answer, the body as the question.

Users can create and 'own' decks and cards, but decks will belong to <i>public</i> subjects.

### Study
Let's start by checking out the core feature: studying. Click on the graduation cap icon in the home display. This will redirect you to a new study session. Select a difficulty, which corresponds to speed, and click `Start`.

![Study][study_image]
[study_image]: ./docs/images/study.png

The question displayed corresponds to a flashcard's body. To maximize focus, emphasis is placed on the question at hand. As the time expires, more of the answer is revealed. In future versions, scoring of a study session will account for the percent revelation of the answer. As of now, the app simply tracks correct and incorrect responses.

![StudyQ][study_question]
[study_question]: ./docs/images/study_question.png

To answer a study question, click on `Solve`. Input your response and hit return (enter). After providing some feedback, the app will continue with the next question. If, instead of answering, you need more of the answer revealed, click the `More hints...` button. The time will continue to expire and the word will be continue to be revealed, letter by letter.

![StudyGif][study_gif]
[study_gif]: ./docs/images/study.gif

Note that you are currently being quizzed on <i>all</i> of your flash cards. To study a specific deck, you'll have to navigate to it and click on it's title. We'll see how to do that in a bit. For now, click `End Session` in the study session dashboard to the left to quit studying and continue exploring.

### Decks
Click on the `General Knowledge` tab in the subject index to the left of the page. This will display your decks that belong to the `General Knowledge` subject. Let's look at `Famous Equations`, the third tab from the left. Clicking on the title of the deck will launch a study session that focuses solely on Famous Equations. You can also edit or remove decks using the icons in the deck header.

![Deck][devk_view]
[devk_view]: ./docs/images/deck_view.png

#### Edit Decks
Click on the pencil icon to edit the deck. Let's add a tag to make the deck searchable. Input the tag name `scientific` and hit return. Save the deck - now users can search for this deck using the query, `scientific`.

![EditDeck][edit_deck]
[edit_deck]: ./docs/images/edit_deck.png

#### Search for Decks
 To prove it, click the magnifying glass in the top right corner of the screen. Enter the search query `scientific` and hit return. You should see the newly tagged Famous Equations deck in the results display. if you click `View`, you'll be redirected back to the deck.

 ![SearchDecks][search_decks]
 [search_decks]: ./docs/images/search_results.png

 Instead, let's search for some new decks. Search for `General Knowledge` decks by typing in `general`. Scroll down to `Computer Science` and click `Add`. This should redirect you to your newly added deck.

### Cards
From the deck view, you have the option to add new cards and view each card in the deck. Click on a row in the card index to reveal it's body as well as some options. From here, you can edit or delete the card. Let's create a new card instead.

![Card][edit_card]
[edit_card]: ./docs/images/edit_card.png

<a name="lookup"></a>
#### Auto Lookup
Click the green `+ Add` in the upper right-hand corner of the the deck display. Enter `processor` in the title field, and click `Lookup`. The body should auto populate after a moment (if you're having trouble, try refreshing the page). Save the card and it will be appended to the card index.

### Subjects
You've noticed by now that cards are organized into decks, each of which belongs to a subject. Subjects are public categories. Using the subject index header in the upper left-hand corner, you can find (or create, if it doesn't already exist) a subject here. Simply start typing, and a list of suggestions will pop up. Selecting a subject and clicking `GO` will automatically create a new deck within the designated subject.

![Suggest][suggestion]
[suggestion]: ./docs/images/search_suggestions.png

## Technical Features and Highlights

### Styling
Other than [Google's Material Design Icons][design], all styling is pure SCSS. Neither Bootsrap nor any other styling libraries were used.
[design]: https://design.google.com/icons/

### Deck Search Auto-populate Component
The deck search and auto-populate were built from scratch. Each time the input changes, an API request is made for decks with tags that match the query.

### Card, Deck and Subject Indexing and Tabulation
The tab and index components for cards, decks and subjects were built from scratch with React.js and use pure SCSS for styling. While similar pre-made React.js components exist, none allow the versatility I desired. So I built my own!

Some components were not home-rolled, and credit is due:

### Tagging Component
The deck tagging features uses the `react-tag-iput` component, which can be found [here][tagger].
[tagger]: https://www.npmjs.com/package/react-tag-input

### Subject Search Autosuggest Search Component
The subject search features uses the `react-autosuggest` component, which can be found [here][suggest].
[suggest]: https://www.npmjs.com/package/react-autosuggest

## Future Directions

### Chrome Extension and Syntax Highlighting
The next feature will be what separates iRetain from other flashcard apps - the Chrome Extension. The extension will have several features which add to the user experience and strengthen retention of new concepts.

#### Syntax Highlighting
The Chrome extension will be used while browsing or studying on other websites. If syntax highlighting is turned on, words the user has looked up in the past will be highlighted on the page. Hovering over a previously looked up word will display it's definition.

In addition, synonyms of previously looked up words will be highlighted. Hovering over a synonym will reveal the originally looked up word. This feature will help strengthen retention by creating new associations with old concepts and words.

#### Lookup
While browsing, highlighting a word, right clicking, and selecting `Define It` from the context menu will display the definition of unknown words.

#### Dynamic Flashcard Creation
Clicking `Retain It` instead will not only display the definition, but it will also create a flashcard in the background, saved to the user's default deck. If the user is not logged in, she or he will be redirected to the login page.
