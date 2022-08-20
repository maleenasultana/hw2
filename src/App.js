import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import "./App.css";
import { Context } from "./store/Context";
import { reducer } from "./reducer/reducer";
import { useReducer } from "react";

function App() {
  const initialState = {
    isAuthenticated: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="*" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
