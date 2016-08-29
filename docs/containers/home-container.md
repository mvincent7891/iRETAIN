## HomeContainer
 - MapStateToProps: `currentUser`
 - MapDispatchToProps: `fetchCurrentUser`

## Home
 - Props: `fetchCurrentUser`
 - State: `currentUser`
 - `didMount()` => `fetchCurrentUser()`
 - Children: `NavBarContainer` and `LibraryContainer` (for instance)

## LibraryContainer (does this need to be a container?)
 - MapStateToProps:
 - MapDispatchToProps:
 - Children: `Library`

## Library
 - State:
 - Props:
 - Children: `SidebarContainer`, `Subject` (for instance)
