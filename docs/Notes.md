# Proposal Notes

1) Edit from wireframes: Subjects should be cloned instead of followed - that way users can edit them after cloning them. Also, users will be able to turn on and off syntax highlighting for a subject or deck that they did not create, and this can be stored as a param in the database. Schema updated accordingly.

2) Landing page will be separate static_page, containing NavContainer and AuthFormContainer components.

3) Missing wireframes
- View card (with buttons or scroll for next and previous in deck)
- About (no login necessary)
- Download Extension (login necessary)
- Contact (no login necessary)
- How it Works (no login necessary)

4) When creating user:
 - Subject 1 -> PlugIn
 - Deck 1 -> PlugInDefaultDeck
 - Subject 2 -> GeneralKnowledge (with seed decks)
