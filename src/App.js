import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
//import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import CustomNavbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <CustomNavbar />
        <div className="App">
          <Route exact path='/' component={About} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
