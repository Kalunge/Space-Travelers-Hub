import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Home from './components/Home';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/rockets" component={Rockets} />
        <Route path="/missions" component={Missions} />
      </Switch>
    </Router>
  );
}

export default App;
