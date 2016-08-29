## HomeContainer
 - MapStateToProps: `currentUser`
 - MapDispatchToProps: `fetchCurrentUser`


## Home
 - Props: `fetchCurrentUser`
 - State: `currentUser`
 - Children: `NavBarContainer` and `LibraryContainer` (for instance)


## LibraryContainer (why does this need to be a container?)
 - MapStateToProps:
 - MapDispatchToProps:
 - Children: `Library`

## Library
 - State:
 - Props:
 - Children: `SidebarContainer`, `Subject` (for instance)
