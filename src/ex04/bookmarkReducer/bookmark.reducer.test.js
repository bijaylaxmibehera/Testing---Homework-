import bookmarkReducer from "./bookmark.reducer";

describe("bookmark reducer", () => {
  it("should add bookmark", () => {
    const initialState = {
      bookmarks: [],
    };
    const initialBookmark = {
      id: 1,
      title: "boomark1",
      url: "https://quora.com",
      tags: ["tag1", "tag2"],
    };
    const action = {
      type: "ADD_BOOKMARK",
      payload: { bookmark: initialBookmark },
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2"],
        },
      ],
    });
  });
  it("should remove bookmark", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2"],
        },
        {
          id: 2,
          title: "boomark2",
          url: "https://google.com",
          tags: ["tag3", "tag4"],
        },
      ],
    };
    const action = {
      type: "REMOVE_BOOKMARK",
      payload: { bookmarkId: 1 },
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 2,
          title: "boomark2",
          url: "https://google.com",
          tags: ["tag3", "tag4"],
        },
      ],
    });
  });

  it("should update tags", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2"],
        },
      ],
    };
    const updatedTags = ["updatedTag1", "updatedTag2"];
    const action = {
      type: "UPDATE_TAGS",
      payload: { bookmarkId: 1, tags: updatedTags },
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["updatedTag1", "updatedTag2"],
        },
      ],
    });
  });

  it("should filter bookmark by tag", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2"],
        },
        {
          id: 2,
          title: "boomark2",
          url: "https://google.com",
          tags: ["tag3", "tag4"],
        },
        {
          id: 3,
          title: "boomark3",
          url: "https://youtube.com",
          tags: ["tag3"],
        },
      ],
    };
    const action = {
      type: "FILTER_BOOKMARKS_BY_TAG",
      payload: { filterTag: "tag3" },
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 2,
          title: "boomark2",
          url: "https://google.com",
          tags: ["tag3", "tag4"],
        },
        {
          id: 3,
          title: "boomark3",
          url: "https://youtube.com",
          tags: ["tag3"],
        },
      ],
    });
  });

  it("should add tags to bookmark", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2"],
        },
      ],
    };
    const action = {
      type: "ADD_TAG",
      payload: { bookmarkId: 1, tag: "newTag" },
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2", "newTag"],
        },
      ],
    });
  });

  it("should remove tags from bookmark", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2", "newTag"],
        },
      ],
    };
    const action = {
      type: "REMOVE_TAG",
      payload: { bookmarkId: 1, tag: "newTag" },
    };
    const updatedState = bookmarkReducer(initialState, action);
    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "boomark1",
          url: "https://quora.com",
          tags: ["tag1", "tag2"],
        },
      ],
    });
  });
});
