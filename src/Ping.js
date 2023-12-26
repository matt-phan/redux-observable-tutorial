import { useDispatch, useSelector } from "react-redux";

function Ping() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pingReducer.isPinging);

  const onClick = () => {
    dispatch({ type: "PING" });
  };

  console.log('STATE', state);

  return (
    <>
      <button onClick={onClick}>Ping</button>
      <p>{JSON.stringify(state)}</p>
    </>
  );
}

export default Ping;
