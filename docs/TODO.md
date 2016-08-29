# TODO/NOTES


## React Component Hierarchy: August 29th
 - List of all containers
   + Justification for containers (do they really need to be containers?)
   + Containers:
    + MapDispatchToProps: which actions?
    + MapStateToProps: which part of the store/state?r
   + Presentational:
    + Props: What props does it need access to? The component cannot change these props itself, but must receive them from above.
    + State: Starts with default value, then mutates over time, generally due to user input.
