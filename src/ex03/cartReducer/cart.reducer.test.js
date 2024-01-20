import cartReducer from "./cart.reducer";

describe("cartReducer", () => {
  it("should add items to the cart", () => {
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: [],
    };
    const newItem = {
      id: 1,
      name: "Item 1",
      quantity: 1,
      price: 10,
    };
    const action = {
      type: "ADD_TO_CART",
      payload: { item: newItem },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 10,
      totalQuantity: 1,
      discounts: [],
    });
  });

  it("should remove item from the cart", () => {
    const initialState = {
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 10,
      totalQuantity: 1,
      discounts: [],
    };
    const action = {
      type: "REMOVE_FROM_CART",
      payload: {
        item: { id: 1, name: "Item 1", quantity: 1, price: 10 },
      },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: [],
    });
  });

  it("should update the quantity of an item in the cart", () => {
    const initialState = {
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 10,
      totalQuantity: 1,
      discounts: [],
    };
    const action = {
      type: "UPDATE_QUANTITY",
      payload: { itemId: 1 },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ id: 1, name: "Item 1", quantity: 2, price: 10 }],
      totalPrice: 20,
      totalQuantity: 1,
      discounts: [],
    });
  });
  it("should apply discounts to the cart", () => {
    const initialState = {
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 10,
      totalQuantity: 1,
      discounts: [],
    };
    const newDiscount = { id: 1, value: 5 };
    const action = {
      type: "ADD_DISCOUNT",
      payload: { discount: newDiscount },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 5,
      totalQuantity: 1,
      discounts: [{ id: 1, value: 5 }],
    });
  });

  it("should remove discounts from the cart", () => {
    const initialState = {
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 5,
      totalQuantity: 1,
      discounts: [{ id: 1, value: 5 }],
    };
    const action = {
      type: "REMOVE_DISCOUNT",
      payload: { discountId: 1 },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ id: 1, name: "Item 1", quantity: 1, price: 10 }],
      totalPrice: 10,
      totalQuantity: 1,
      discounts: [],
    });
  });

  it("should apply promotion to the cart", () => {
    const initialState = {
      items: [
        { id: 1, name: "Item 1", quantity: 2, price: 10 },
        { id: 2, name: "Item 2", quantity: 1, price: 20 },
      ],
      totalPrice: 40,
      totalQuantity: 3,
      discounts: [{ id: 1, value: 5 }],
    };
    const promotion = { id: 2, value: 10 };
    const action = {
      type: "APPLY_PROMOTION",
      payload: { promotion },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        { id: 1, name: "Item 1", quantity: 2, price: 10 },
        { id: 2, name: "Item 2", quantity: 1, price: 20 },
      ],
      totalPrice: 25,
      totalQuantity: 3,
      discounts: [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
      ],
    });
  });
});
