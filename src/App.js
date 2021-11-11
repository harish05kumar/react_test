import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './main-folder/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './main-folder/about';

function App() {
  return (
    
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
