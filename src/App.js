import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Home from './components/Home';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/rockets" component={Rockets} />
      </Switch>
    </Router>
  );
}

export default App;
