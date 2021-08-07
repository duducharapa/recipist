import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./theme";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>  
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/products" exact={true} component={Products} />
            <Route path="/recipes" exact={true} component={Recipes} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;