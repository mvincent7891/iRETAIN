## SidebarContainer
- MapDispatchToProps: createSubject(), removeSubject()
- MapStateToProps: subjects

## Sidebar
- Sidebar will create all the necessary rows (one header, and one for each subject, pass title down to subjects as prop)
- State: selectedRow (default to second row, i.e. first subject)
- Methods: changeSelectedRow()
- Props: subjects
- Children: SidebarRows

## SidebarRow
- SidebarRow onClick triggers changeSelectedRow() in parent via prop of the same name.
- Title prop will serve dual purpose: If present, render a SubjectsIndexItem, also with title prop, else render SidebarHeader
- Props: createSubject(), removeSubject(), changeSelectedRow(), selected, title
- Children: Either SidebarHeader or SubjectsIndexItem

## SidebarHeader
- Props: createSubject()

## SubjectsIndexItem
- If selected, show  `Edit` and `Remove` buttons
- Props: removeSubject(), selected, title
