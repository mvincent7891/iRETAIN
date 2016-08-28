# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users`
  - Gets settings for current user

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

## Cards

- `GET /api/cards`
  - Cards index
  - accepts pagination params (if I get there)
- `POST /api/cards`
- `GET /api/cards/:id`
- `PATCH /api/cards/:id`
- `DELETE /api/cards/:id`

### Decks

- `GET /api/decks`
  - Decks index/search
  - accepts `tag_name` query param to list decks by tag
  - accepts pagination params (if I get there)
- `POST /api/decks`
  - ASK Winnie: best way to handle copying decks?
  - For, now accept copyId and subjectId params
- `GET /api/decks/:id`
- `PATCH /api/decks/:id`
- `DELETE /api/decks/:id`
 - Deletes all contained cards
- `GET /api/decks/:id/cards`
  - index of all cards for a deck
  - accepts pagination params (if I get there)

### Subjects

- `GET /api/subjects`
  - Subjects index/search
  - accepts `tag_name` query param to list subjects by tag (uses tags of all decks contained within the subject)
  - accepts pagination params (if I get there)
- `POST /api/subjects`
  - ASK Winnie: best way to handle copying subjects?
  - For, now accept copyId param
- `GET /api/subjects/:id`
- `DELETE /api/subjects/:id`
  - Deletes all contained decks
- `GET /api/subjects/:id/decks`
  - index of all decks for a subject
  - accepts pagination params (if I get there)
- `GET /api/subjects/:id/cards`
  - index of all cards for a subject (for quizzes)

### Tags

- A deck(subject)'s tags will be included in the deck(subject) show template
- `GET /api/tags`
- `POST /api/decks/:deck_id/tags`: add tag to deck by name
- `DELETE /api/decks/:deck_id/tags/:tag_name`: remove tag from note by
  name

### Quizzes
ASK Winnie about this one.
- Custom route for getting a quiz question?
- `GET /api/quizzes`
  - List all quizzes (subject and score) by date
- `POST /api/quizzes`
  - On creation of quiz, accept subjectId param
  - Return number of questions, time
- `PATCH /api/quizzes`
  - Accepts correctResponse param, avgTime on last questions
  - Returns score params on last question
  - PATCH will occur on each quiz question response (potential to save and come back)
  - `GET /api/subjects/:id/cards` to get questions
