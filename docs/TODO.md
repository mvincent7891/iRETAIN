# TODO/NOTES


## React Component Hierarchy
 - List of all containers
   - Justification for containers (do they really need to be containers?)
   - Containers:
    - MapDispatchToProps: which actions?
    - MapStateToProps: which part of the store/state?
    - Remember that a container wraps a component of the same name, i.e. the SidebarContainer wraps the Sidebar
   - Presentational:
    - Props: What props does it need access to? The component cannot change these props itself, but must receive them from above.
    - State: Starts with default value, then mutates over time, generally due to user input.

## Missing wireframes
- View CardDetail - CardIndexItem `onClick`
- About
- Download Extension
- Contact
- How it Works

## When creating user, create the following:
 - Subject 1 -> PlugIn
 - Deck 1 -> PlugInDefaultDeck
 - Subject 2 -> GeneralKnowledge (with seed decks)
