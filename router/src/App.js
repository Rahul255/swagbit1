
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppContext} from './AppContext';

function App() {
  const [state,setState] = useState(20)

  return (
    <div className="App">
      <AppContext.Provider value={{data:state}}>
      <Router>
        <Link to='/about'><button>About Page</button></Link>
        <Link to='/profile'> <button>Profile Page</button></Link>
        <Route component={About} path='/about' />
        <Route  path='/profile' >
          <Profile ></Profile>
        </Route>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
