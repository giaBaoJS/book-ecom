import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page_404 from "./components/Page_404/Page_404";
import { adminTemplate, template } from "./configRoutes";
import { SET_STATE_FROM_LOCAL } from "./constants";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    let firstRender = true;
    if (firstRender) {
      let expiration = localStorage.getItem("expiration");
      if (expiration && new Date() < new Date(expiration)) {
        axios.defaults.headers.common['Authorization'] ="Bearer "+ localStorage.getItem("token");
        dispatch({ type: SET_STATE_FROM_LOCAL });
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("user");
      }
      firstRender = false;
    }
//Quan trong la gio lam sao khi vua login xong minh lay dc c
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {template()}
        {adminTemplate()}
        <Route path="" component={Page_404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
