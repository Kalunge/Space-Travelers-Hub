import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
