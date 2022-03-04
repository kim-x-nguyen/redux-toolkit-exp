import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { loginSuccess } from './redux/loginSlice';

function App() {
  const isLoadingStatus = useSelector(
    (state) => state.login.isLoading
  );

  const loadingData = useSelector(
    (state) => state.login.data
  )

  console.log(isLoadingStatus);
  console.log(loadingData);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{isLoadingStatus}</p>
      <button onClick={() => dispatch(loginSuccess({data: "Hello"}))}>Login</button>
    </div>
  );
}

export default App;
