# Notes

## Issues - August 29
- Can't change '.IO' font in logo for some reason
- Still haven't figured out the right nav ul not taking up its entire container (css issue)
- Errors aren't displaying on login/signup forms (fixed errors for cards)
- Background image isn't scaling properly
- Cards should be lit up for a moment after creation
- Only one card should be expanded at once (need to move select logic from index item up to index)


## React Component Hierarchy: August 29th
 - List of all containers
   + Justification for containers (do they really need to be containers?)
   + Containers:
    + MapDispatchToProps: which actions?
    + MapStateToProps: which part of the store/state?r
   + Presentational:
    + Props: What props does it need access to? The component cannot change these props itself, but must receive them from above.
    + State: Starts with default value, then mutates over time, generally due to user input.
