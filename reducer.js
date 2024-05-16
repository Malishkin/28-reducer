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
newState = reducer(newState, { type: "ADD_NAME", payload: "Alice" });
console.log(newState);

let stateDeleted = reducer(newState, { type: "REMOVE_NAME", payload: "Bogdan" });
console.log(stateDeleted); // ["Alice"]
