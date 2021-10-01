
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Staff from './components/pages/Staff';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
      <Route path='/' exact={true} component={Home}/>
      <Route path='/staff' exact={true} component={Staff}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
