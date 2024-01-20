const initialState = {
  bookmarks: [],
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.bookmark],
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload.bookmarkId,
        ),
      };
    case "UPDATE_TAGS":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? { ...bookmark, tags: action.payload.tags }
            : bookmark,
        ),
      };

    case "FILTER_BOOKMARKS_BY_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) =>
          bookmark.tags.includes(action.payload.filterTag),
        ),
      };
    case "ADD_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? { ...bookmark, tags: [...bookmark.tags, action.payload.tag] }
            : bookmark,
        ),
      };
    case "REMOVE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? {
                ...bookmark,
                tags: bookmark.tags.filter((tag) => tag !== action.payload.tag),
              }
            : bookmark,
        ),
      };
    default:
      return state;
  }
}

export default bookmarkReducer;
