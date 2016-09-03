export const TagConstants = {
  REQUEST_ALL_TAGS: "REQUEST_ALL_TAGS",
  RECEIVE_ALL_TAGS: "RECEIVE_ALL_TAGS"

};

export const requestAllTags = () => ({
  type: TagConstants.REQUEST_ALL_TAGS
});

export const receiveAllTags = tags => ({
  type: TagConstants.RECEIVE_ALL_TAGS,
  tags
});
