```json
{
  currentUser: {
    id: 1,
    username: "michael"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCard: {errors: ["body can't be blank"]}
  },
  cards: {
    1: {
      title: "Mixolydian",
      body: "5th mode of the major scale; think Dear. Prudence by the Beatles",
      author_id: 1,
      deck_id: 1
      }
    }
  },
  decks: {
    1: {
      title: "Modes",
      author_id: 1,
      deck_id: 1
      tags: {
        1: {
          id: 1
          name: "music"
        },
        2: {
          id: 1
          name: "scale"
        }
      }
    }
  },
  subjects: {
    1: {
      title: "Music",
      author_id: 1,
    }
  },
  tagFilters: [1, 7, 14], // Used to track selected Tags for filtering of decks (if I get there)
  searchParams: {
    query: "music"
  }
}
```
