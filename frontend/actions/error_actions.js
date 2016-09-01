export const ErrorConstants = {
  DELETE_SESSION_ERRORS: "DELETE_SESSION_ERRORS",
  DELETE_CARD_ERRORS: "DELETE_CARD_ERRORS",
  RECEIVE_SESSION_ERRORS: "RECEIVE_ERRORS",
  RECEIVE_CREATE_CARD_ERRORS: "RECEIVE_CREATE_CARD_ERRORS",
  RECEIVE_UPDATE_CARD_ERRORS: "RECEIVE_UPDATE_CARD_ERRORS",
  RECEIVE_DELETE_CARD_ERRORS: "RECEIVE_DELETE_CARD_ERRORS",
  RECEIVE_CARDS_ERRORS: "RECEIVE_CARDS_ERRORS",
  RECEIVE_LOOKUP_ERRORS: "RECEIVE_LOOKUP_ERRORS",

  RECEIVE_DECKS_ERRORS: "RECEIVE_DECKS_ERRORS",
  RECEIVE_SINGLE_DECK_ERRORS: "RECEIVE_SINGLE_DECK_ERRORS"

};

// DECKS

export const receiveDecksErrors = errors => ({
  type: ErrorConstants.DELETE_SESSION_ERRORS,
  errors
});

export const receiveSingleDeckErrors = errors => ({
  type: ErrorConstants.RECEIVE_SINGLE_DECK_ERRORS,
  errors
});

// SESSION

export const deleteSessionErrors = () => ({
  type: ErrorConstants.DELETE_SESSION_ERRORS
});

export const receiveSessionErrors = errors => ({
  type: ErrorConstants.RECEIVE_SESSION_ERRORS,
  errors
});

// CARDS

export const deleteCardErrors = () => ({
  type: ErrorConstants.DELETE_CARD_ERRORS
});

export const receiveLookupErrors = errors => ({
  type: ErrorConstants.RECEIVE_LOOKUP_ERRORS,
  errors
});

export const receiveCreateCardErrors = errors => ({
  type: ErrorConstants.RECEIVE_CREATE_CARD_ERRORS,
  errors
});

export const receiveDeleteCardErrors = errors => ({
  type: ErrorConstants.RECEIVE_DELETE_CARD_ERRORS,
  errors
});

export const receiveUpdateCardErrors = errors => ({
  type: ErrorConstants.RECEIVE_UPDATE_CARD_ERRORS,
  errors
});

export const receiveCardsErrors = errors => ({
  type: ErrorConstants.RECEIVE_CARDS_ERRORS,
  errors
});
