const initialState = [];
const action = {
  type: "ADD_NAME",
  payload: "Alice",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    case "REMOVE_NAME":
      return state.filter((name) => name !== action.payload);
    default:
      return state;
  }
}
