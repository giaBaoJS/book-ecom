import { BrowserRouter, Switch } from "react-router-dom";
import { template } from "./configRoutes";

function App() {
  return (
		<BrowserRouter>
			<Switch>{template()}</Switch>
		</BrowserRouter>
	);
}

export default App;
