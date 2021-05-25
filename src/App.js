import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { template } from "./configRoutes";
import { SET_STATE_FROM_LOCAL } from "./constants";

function App() {
  let firstRender = true;
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstRender) {
      let expiration = localStorage.getItem("expiration");
      if (expiration && new Date() < new Date(expiration)) {
        dispatch({ type: SET_STATE_FROM_LOCAL });
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("user");
      }
      firstRender = false;
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>{template()}</Switch>
    </BrowserRouter>
  );
}

export default App;
