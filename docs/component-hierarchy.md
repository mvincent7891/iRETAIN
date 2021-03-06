## Component Heirarchy

**HomeContainer**
 - Home
   - NavBarContainer
   - One Content/Container (see below)

**NavBarContainer**
 - NavBar
  + AuthFormContainer

**Content/Containers:**
 - LandingContent
 - AboutContent
 - HowItWorksContent
 - AuthFormContainer (redirect on download extension)
 - GuestLoginContainer
 - ContactFormContainer
 - LibraryContainer
 - DownloadExtensionContainer

**LibraryContainer**
 - Library
  + SidebarContainer
  + One Central Container

**SidebarContainer**
 - Sidebar
  + SidebarRow
    + SidebarHeader, or
    + SubjectsIndexItem

**Central Containers:**
 - SubjectContainer
 - DeckContainer
 - CardContainer
 - One Quiz Container
 - SettingsContainer
 - SearchContainer
 - [Subject][Deck][Card]FormContainer

**SearchContainer**
 - Search
 - SearchResults
   + DeckResultsIndex
     + DeckResultsIndexItem
   + SubjectResultsIndex
     + SubjectResultsIndexItem

**SubjectContainer**
 - Subject
  + SubjectHeader
  + DecksIndex
    + DecksIndexItem
  + DeckContainer

**DeckContainer**
 - Deck
   + DeckHeader
   + TagsIndexContainer
   + CardsIndex
     + CardsIndexItem
      + CardContainer

**TagsIndexContainer**
 - TagsIndex
   + TagsIndexItem

**CardContainer**
 - CardDetail

**SettingsContainer**
 - SettingsForm

**SubjectFormContainer**
 - SubjectForm

**DeckFormContainer**
 - DeckForm

**CardFormContainer**
 - CardForm

 **QuizContainer**
 - QuizOptionsForm
   + NewQuiz
     + QuizHeader
     + QuizTimer
     + QuizQuestion
     + QuizResults
       + NewQuizForm

 **AuthFormContainer**
 - AuthForm
   + GoogleSignUpForm
   + FacebookSignUpForm

 **GuestLoginContainer**
 - GuestLoginForm

 **ContactFormContainer**
 - ContactForm

 **DownloadExtensionContainer**
 - DownloadExtension


 ## Routes
 Question: Do the routes below need to be nested? Why not just home/decks/:deckId instead of home/subjects/:subjectId/decks/:deckId

 Path                                       | Component                
 -------------------------------------------|--------------------------
  "/sign-up"                                | "AuthFormContainer"      
  "/sign-in"                                | "AuthFormContainer"      
  "/home"                                   | "HomeContainer"
  "/home/subjects/:subjectId"                | "SubjectContainer"         
  "/home/subjects/:subjectId/decks/:deckId"   | "DeckContainer"      
  "/home/subjects/:subjectId/decks/:deckId/:card/cardId"   | "CardContainer"              
  "/home/search-results"                    | "SearchResultsContainer"
  "/card-form"                              | "CardFormContainer"       
  "/search"                                 | "SearchContainer"                 
  "/deck-form"                              | "DeckFormContainer"            
  "/subject-form"                           | "SubjectFormContainer"            
  "/new-quiz"                               | "Quiz Options"
  "/new-quiz/all"                           | "NewQuizContainer"
  "/new-quiz/subject/:subjectId"             | "NewQuizContainer"
  "/settings"                               | "SettingsContainer"
  "/guest"                                  | "GuestLoginContainer"
  "/about"                                  | "AboutContent"
  "/how-it-works"                           | "HowItWorksContent"
  "/plugin"                                 | "DownloadExtensionContainer"
