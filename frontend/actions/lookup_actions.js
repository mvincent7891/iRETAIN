export const LookupConstants = {
  RECEIVE_LOOKUP: "RECEIVE_LOOKUP",
  DELETE_LOOKUP: "DELETE_LOOKUP"
};

export const receiveLookup = (lookup) => ({
  type: LookupConstants.RECEIVE_LOOKUP,
  lookup
});

export const deleteLookup = () => ({
  type: LookupConstants.DELETE_LOOKUP
});
