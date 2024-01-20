import todoReducer from "./todo.reducer";

describe("testing todos", () => {
  it("should add todos", () => {
    const initialState = {
      todos: [{ id: 1, text: "complete assignment 6", completed: false }],
    };

    const action = {
      type: "ADD_TODO",
      payload: { id: 2, text: "complete assignment 7", completed: false },
    };

    const updatedState = todoReducer(initialState, action);

    expect(updatedState).toEqual({
      todos: [
        { id: 1, text: "complete assignment 6", completed: false },
        { id: 2, text: "complete assignment 7", completed: false },
      ],
    });
  });

  it("should toggle todos", () => {
    const initialState = {
      todos: [
        { id: 1, text: "complete assignment 6", completed: false },
        { id: 2, text: "complete assignment 7", completed: false },
      ],
    };

    const action = {
      type: "TOGGLE_TODO",
      payload: { id: 1, text: "complete assignment 6", completed: true },
    };

    const updatedState = todoReducer(initialState, action);

    expect(updatedState).toEqual({
      todos: [
        { id: 1, text: "complete assignment 6", completed: true },
        { id: 2, text: "complete assignment 7", completed: false },
      ],
    });
  });
});
