import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
