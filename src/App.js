import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard/>
      </Route>
    </Router>
  );
}

export default App;
