const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    case "REMOVE_NAME":
      return state.filter((name) => name !== action.payload);
    default:
      return state;
  }
}

let newState = reducer(initialState, { type: "ADD_NAME", payload: "Bogdan" });
console.log(newState); // ["Bogdan"]
