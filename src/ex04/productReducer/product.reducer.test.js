import productReducer from "./product.reducer";

describe("productReducer", () => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Phone",
        category: "Electronics",
        price: 500,
        inStock: true,
      },
      { id: 2, name: "Shirt", category: "Clothing", price: 20, inStock: true },
      {
        id: 3,
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        inStock: true,
      },
      { id: 4, name: "Jeans", category: "Clothing", price: 40, inStock: false },
    ],
    filters: {
      category: "All",
      searchQuery: "",
      sortBy: "price",
      ascending: true,
      priceRange: { min: 0, max: 1000 },
    },
  };
  it("should filter products by category", () => {
    const action = {
      type: "SET_CATEGORY_FILTER",
      payload: { category: "Electronics" },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
      ],
      filters: {
        category: "Electronics",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });

  it("should set search query", () => {
    const action = {
      type: "SET_SEARCH_QUERY",
      payload: { searchQuery: "Phone" },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "Phone",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });

  it("should set sort filter", () => {
    const action = {
      type: "SET_SORT",
      payload: { sortBy: "name", ascending: false },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "name",
        ascending: false,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });

  it("should set the price range", () => {
    const action = {
      type: "SET_PRICE_RANGE",
      payload: { min: 100, max: 500 },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 100, max: 500 },
      },
    });
  });

  it("should toggle products  availability", () => {
    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: { productId: 1 },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: false,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });
});
