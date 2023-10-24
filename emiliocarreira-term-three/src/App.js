import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing.js';
import Library from './pages/Library.js';
import More from './pages/More.js';
import Cart from './pages/Cart.js';
import BasicNav from './componets/Nav';
import Indevidual from './pages/Indevidual';
import BasicFooter from './componets/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddGame from './pages/AddGame';
import FormUpdate from './pages/UpdateGame';






function App() {

  // const user = localStorage.getItem('token');

  return (
    <div>
      <BasicNav />
    
    
      <Routes>
        {/* {user && <Route exact path='/' element= { <Landing />} />} */}
        <Route exact path='/' element= { <Landing />} />
        <Route path='/More.js' element= { <More/> } />
        <Route path='/Library.js' element= { <Library/> } />
        <Route path='/Cart.js' element= { <Cart/> } />
        <Route path='/Indevidual' element= { <Indevidual/> } />
        <Route path='/Login.js' element= { <Login/> } />
        <Route path='/SignUp.js' element= { <SignUp/> } />
        <Route path='/AddGame.js' element= { <AddGame/> } />
        <Route path='/update/:id' element={<FormUpdate />} />
      </Routes>
    
      

      <BasicFooter />
    </div>

    
    
  );
}

export default App;
