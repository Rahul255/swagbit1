
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Goals from './Components/Goal/Goals'

function App() {
  return (
    <div className="App">
      <NavBar />  
      <Banner />
      <About />
      <Goals />
      <Footer />
    </div>
  );
}

export default App;
