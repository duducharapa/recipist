import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <RecipeList />
      </ThemeProvider>
    </div>
  );
}

export default App;