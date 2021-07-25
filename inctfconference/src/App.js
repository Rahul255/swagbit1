
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
