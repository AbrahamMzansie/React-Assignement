import Home from './Home';
import ArtistDetails from './ArtistDetails';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <div className="App">       
        <div className="content">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/artist/:id/:name/:fans">
              <ArtistDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
