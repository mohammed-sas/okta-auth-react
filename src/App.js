
import './App.css';
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';


import AppRouter from './AppRouter';

function App() {
 

  return (
    <Router>
     <AppRouter/>
    </Router>
  );
}

export default App;
