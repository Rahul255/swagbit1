
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  const [state,setState] = useState('')

  return (
    <div className="App">
      
      <Router>
        <Link to='/about'>About Page</Link>
        <Link to='/profile'> profile Page</Link>
        <Route component={About} path='/about' />
        <Route component={Profile} path='/profile' />
      </Router>
      
    </div>
  );
}

export default App;
