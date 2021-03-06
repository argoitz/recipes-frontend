import './App.css';
import Home from './pages/home';
import RecipeList from './pages/recipes/list';
import RecipeOne from './pages/recipes/one/RecipesOne';
import RecipesEdit from './pages/recipes/edit/RecipesEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/Header";
import RecipesNew from "./pages/recipes/new/RecipesNew";
import {recipeEditOf, recipeList, recipeNew, recipeOf} from "./constants/urls";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path={recipeNew}>
            <RecipesNew />
          </Route>
          <Route path={recipeOf(":id")} exact={true}>
            <RecipeOne />
          </Route>
          <Route path={recipeEditOf(":id")}>
            <RecipesEdit />
          </Route>
          <Route path={recipeList}>
            <RecipeList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
