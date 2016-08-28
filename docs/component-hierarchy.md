## Component Heirarchy

**HomeContainer**
 - Home
   - NavBarContainer
   - One Content Container (see below)

**NavBarContainer**
 - UserNavBarContainer
 - GeneralNavBar

**Content Containers:**
 - LandingContent
 - AboutContent
 - HowItWorksContent
 - AuthFormContainer (redirect on download extension)
 - GuestLoginContainer
 - ContactFormContainer
 - LibraryContainer
 - DownloadExtensionContainer

**LibraryContainer**
 - SidebarContainer
 - One Central Container

**SidebarContainer**
 - SidebarHeaderContainer
 - SubjectIndexContainer

**Central Containers:**
 - SubjectContainer
 - DeckContainer
 - CardContainer
 - One Quiz Container
 - SettingsContainer
 - SearchContainer
 - SearchResultsContainer
 - [Subject][Deck][Card]FormContainer

**SearchContainer**
- Search

**SearchResultsContainer**
 - Search
 - DeckSeachResultsContainer
 - SubjectSearchResultsContainer

**DeckSearchResultsContainer**
 - DeckSearchResultsIndex

**SubjectSearchResultsContainer**
 - SubjectSearchResultsIndex

**DeckSearchResultsIndex**
 - DeckSearchResultsItem

**SubjectSearchResultsIndex**
 - SubjectSearchResultsItem

**SidebarHeaderContainer**
 - SidebarHeader
   + Search

**SubjectIndexContainer**
 - SubjectIndex
  + SubjectIndexItem

**SubjectContainer**
 - SubjectHeader
 - DeckIndexContainer

**DeckContainer**
 - DeckHeader
 - TagIndexContainer
 - Search
 - CardIndexContainer

**TagIndexContainer**
 - TagIndexItem

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

**DecksIndexContainer**
 - DecksIndex
  + DeckIndexItem

**CardsIndexContainer**
 - CardsIndex
  + CardsIndexItem

 **Quiz Containers:**
 - QuizOptionsContainer
 - NewQuizContainer

 **NewQuizContainer**
 - QuizHeader
 - QuizTimer
 - QuizQuestionContainer or QuizResultsContainer

**QuizOptionsContainer**
 - QuizOptionsForm

**QuizQuestionContainer**
 - QuizQuestionForm

**QuizResultsContainer**
 - NewQuizForm
 - QuizResults

 **UserNavBarContainer**
 - AuthFormContainer
 - UserNavBar

 **AuthFormContainer**
 - AuthForm
 - GoogleSignUpForm
 - FacebookSignUpForm

 **GuestLoginContainer**
 - GuestLoginForm

 **ContactFormContainer**
 - ContactForm

 **DownloadExtensionContainer**
 - DownloadExtensionForm


 ## Routes

 Path                                       | Component                
 -------------------------------------------|--------------------------
  "/sign-up"                                | "AuthFormContainer"      
  "/sign-in"                                | "AuthFormContainer"      
  "/home"                                   | "HomeContainer"          
  "/home/subject/:subjectId"                | "SubjectContainer"         
  "/home/subject/:subjectId/deck/:deckId"   | "DeckContainer"      
  "/home/subject/:subjectId/deck/:deckId/card/cardId"   | "CardContainer"              
  "/home/search-results"                    | "SearchResultsContainer"
  "/card-form"                              | "CardFormContainer"       
  "/search"                                 | "SearchContainer"                 
  "/deck-form"                              | "DeckFormContainer"            
  "/subject-form"                           | "SubjectFormContainer"            
  "/new-quiz"                               | "Quiz Options"
  "/new-quiz/all"                           | "NewQuizContainer"
  "/new-quiz/subject/subjectId"             | "NewQuizContainer"
  "/settings"                               | "SettingsContainer"
  "/guest"                                  | "GuestLoginContainer"
  "/about"                                  | "AboutContent"
  "/how-it-works"                           | "HowItWorksContent"
  "/plugin"                                 | "DownloadExtensionContainer"
