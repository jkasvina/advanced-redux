import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";

// prettier --write .

function App() {
  // useSelector не сработает,
  // если не указать явно тип входящего (state: RootState)
  // чтобы не указывать тип каждый раз используем useAppSelector()
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  // деконструкция
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <br />
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
