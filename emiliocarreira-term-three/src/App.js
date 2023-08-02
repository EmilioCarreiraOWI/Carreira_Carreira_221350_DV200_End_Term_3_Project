import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.js';
import Library from './pages/Library';
import More from './pages/More';
import BasicNav from './componets/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

      <BasicNav />

      <Routes>
        <Route path='/' element= { <Landing/> } />
        <Route path='/pages/More.js' element= { <More/> } />
        <Route path='/pages/Library.js' element= { <Library/> } />
      </Routes>
    </div>
    
  );
}

export default App;
