import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.js';
import Library from './pages/Library';
import More from './pages/More';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

      <mainNav />

      <Routes>
        <Route path='/' element= { <Landing/> } />
        <Route path='/Compare' element= { <More/> } />
        <Route path='/Timeline' element= { <Library/> } />
      </Routes>
    </div>
    
  );
}

export default App;
