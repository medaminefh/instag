import React, { useContext, createContext, useEffect, useReducer } from "react";
import "./App.css";
import { Nav } from "./components/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import {
  Home,
  Profile,
  SignUp,
  SignIn,
  CreatePosts,
  UserProfile,
  Sub,
} from "./components";

import { initialState, reducer } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={SignIn} />
      <Route path="/create" component={CreatePosts} />
      <Route path="/profile/:userid" component={UserProfile} />
      <Route path="/mysub" component={Sub} />
    </Switch>
  );
};

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { Provider } = UserContext;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch, user }}>
      <Router>
        <Nav />
        <Routing />
      </Router>
    </Provider>
  );
};

export default App;
