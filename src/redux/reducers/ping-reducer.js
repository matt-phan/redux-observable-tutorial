export const pingReducer = (state = { isPinging: false }, action) => {
  console.log("PING REDUCER FIRING");
  switch (action.type) {
    case "PING":
      return { isPinging: true };
    case "PONG":
      return { isPinging: false };
    default:
      return state;
  }
};
