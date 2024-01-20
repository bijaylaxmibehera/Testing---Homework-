import commentReducer from "./comment.reducer";

describe("commentReducer", () => {
  it("should add a comment", () => {
    const initialState = {
      comments: [],
    };
    const newComment = {
      id: 1,
      text: "Hello",
      votes: 0,
      replies: [],
    };
    const action = {
      type: "ADD_COMMENT",
      payload: { comment: newComment },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [{ id: 1, text: "Hello", votes: 0, replies: [] }],
    });
  });

  it("should remove comment", () => {
    const initialState = {
      comments: [{ id: 1, text: "Hello", votes: 0, replies: [] }],
    };
    const action = {
      type: "REMOVE_COMMENT",
      payload: { commentId: 1 },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({ comments: [] });
  });

  it("should upvote comment", () => {
    const initialState = {
      comments: [{ id: 1, text: "Hello", votes: 0, replies: [] }],
    };
    const action = {
      type: "UPVOTE_COMMENT",
      payload: { commentId: 1 },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [{ id: 1, text: "Hello", votes: 1, replies: [] }],
    });
  });

  it("should downvote comment", () => {
    const initialState = {
      comments: [{ id: 1, text: "Hello", votes: 1, replies: [] }],
    };
    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: { commentId: 1 },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [{ id: 1, text: "Hello", votes: 0, replies: [] }],
    });
  });

  it("should add reply to comment", () => {
    const initialState = {
      comments: [{ id: 1, text: "Hello", votes: 0, replies: [] }],
    };
    const action = {
      type: "ADD_REPLY",
      payload: { commentId: 1, reply: { id: 1, replyText: "new reply" } },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "Hello",
          votes: 0,
          replies: [{ id: 1, replyText: "new reply" }],
        },
      ],
    });
  });

  it("should remove reply from comment", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Hello",
          votes: 0,
          replies: [{ id: 1, replyText: "new reply" }],
        },
      ],
    };
    const action = {
      type: "REMOVE_REPLY",
      payload: {
        commentId: 1,
        replyId: 1,
      },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "Hello",
          votes: 0,
          replies: [],
        },
      ],
    });
  });
});
