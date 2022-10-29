import Home from './Home';
import ArtistDetails from './ArtistDetails';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">       
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/artist/:id">
              <ArtistDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
