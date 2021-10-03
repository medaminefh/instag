export const initialState = null;
export const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return action.payload;
      break;
    case "CLEAR":
      return null;
      break;
    case "UPDATE":
      return {
        ...state,
        followers: action.payload.followers,
        following: action.payload.following,
      };
      break;
    default:
      return state;
  }
};
