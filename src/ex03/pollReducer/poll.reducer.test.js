import pollReducer from "./poll.reducer";

describe("testing polls reducer", () => {
  it("should create poll", () => {
    const initialState = {
      polls: [],
    };

    const action = {
      type: "CREATE_POLL",
      payload: {
        id: 1,
        question: "Which is your favorite programming language?",
        options: [],
      },
    };

    const updatedState = pollReducer(initialState, action);

    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Which is your favorite programming language?",
          options: [],
        },
      ],
    });
  });

  it("should add a new option to poll", () => {
    const initialState = {
      polls: [
        {
          id: 1,
          question: "Which is your favorite programming language?",
          options: [],
        },
      ],
    };

    const action = {
      type: "ADD_OPTION",
      payload: {
        pollId: 1,
        optionText: "JavaScript",
        votes: 0,
      },
    };

    const updatedState = pollReducer(initialState, action);

    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Which is your favorite programming language?",
          options: [{ text: "JavaScript", votes: 0 }],
        },
      ],
    });
  });

  it("increment the vote count for an option", () => {
    const initialState = {
      polls: [
        {
          id: 1,
          question: "Which is your favorite programming language?",
          options: [{ text: "JavaScript", votes: 0 }],
        },
      ],
    };

    const action = {
      type: "VOTE",
      payload: { pollId: 1, optionText: "JavaScript" },
    };

    const updatedState = pollReducer(initialState, action);

    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Which is your favorite programming language?",
          options: [{ text: "JavaScript", votes: 1 }],
        },
      ],
    });
  });
});
