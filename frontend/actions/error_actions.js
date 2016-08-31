export const ErrorConstants = {
  DELETE_SESSION_ERRORS: "DELETE_SESSION_ERRORS",
  DELETE_CARD_ERRORS: "DELETE_CARD_ERRORS",
  RECEIVE_SESSION_ERRORS: "RECEIVE_ERRORS",
  RECEIVE_CARD_ERRORS: "RECEIVE_CARD_ERRORS"
};

export const deleteSessionErrors = () => ({
  type: ErrorConstants.DELETE_SESSION_ERRORS
});

export const deleteCardErrors = () => ({
  type: ErrorConstants.DELETE_CARD_ERRORS
});

export const receiveSessionErrors = (errors) => ({
  type: ErrorConstants.RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveCardErrors = (errors) => ({
  type: ErrorConstants.RECEIVE_CARD_ERRORS,
  errors
});
