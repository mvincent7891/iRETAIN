# iRetain

[iRetain live][live_app]

[live_app]: http://www.iretain.io

iRetain is a full-stack web application inspired by Brainscape. It utilizes Ruby on Rails and a PostgreSQL database on the backend, and React.js with a Redux architectural framework on the frontend.  

## Motivation
The primary purpose of iRetain is to help students strengthen retention of new concepts using flashcards and interactive study sessions. While the core features are similar to many other flash card apps, the app was built with a novel feature in mind: in future releases, the iRetain Chrome extension will enable dynamic creation of flashcards from anywhere on the web. Simply install the extension and click on a word to view it's definition. In the background, iRetain will build a flash card for you, enabling you to revisit words you've looked up while browsing or studying. The [auto lookup](#lookup) feature showcases some of this eventual functionality.

## Demo
To get a feel for the app, login as a guest and take a tour. Simply navigate to the [splash page][live_app], and click on the large `DEMO` link. The remainder of this README will guide you through the app's features as if you were logged in as a guest.

## Structure and Usage: Subjects, Decks and Cards
As soon as you login, you will see an index of subjects to the left, as well as links to the primary flashcard deck features: view (eye icon), search (magnifying glass icon), and study (graduation cap).
 
Users may be familiar with the overall structure of iRetain: Subjects contain decks, and decks contain cards. Each card has a title and body. When studying, the title is used as the answer, the body as the question.

Users can create their own decks and cards, but decks will belong to public subjects.


### Under the Hood

### Card

### Auto Lookup<a name="lookup"></a>

### Decks

### Subjects

### Tagging Decks

### Searching for Subjects and Decks

### Study Sessions

## Future Directions for the Project

### Chrome Extension and Syntax Highlighting

### OmniAuth
