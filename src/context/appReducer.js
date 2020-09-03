export default (state, { type, payload }) => {
  switch (type) {
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: true,
        uid: payload.uid,
      };

    case "NOT_LOGGED_IN":
      return {
        ...state,
        loggedIn: false,
      };

    case "LOG_OUT":
      return {
        ...state,
        loggedIn: false,
        uid: null,
        blogEntries: null,
        blogLoaded: false,
      };

    case "LOAD_BLOG_ENTRIES":
      return {
        ...state,
        blogEntries: payload,
        blogLoaded: true,
      };

    default:
      return state;
  }
};
