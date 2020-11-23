import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

import {
 
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      /*switch from react router*/
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
