import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
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

  const user = localStorage.getItem("token");

  return (
    <div>
      {user ? (
      <>
        <BasicNav />

          <Routes>
            <Route path="/" element={<Navigate replace to="/Landing" />} />
            <Route exact path='/' element= { <Landing />} />
            <Route path='/More' element= { <More/> } />
            <Route path='/Library' element= { <Library/> } />
            <Route path='/Cart' element= { <Cart/> } />
            <Route path='/Indevidual' element= { <Indevidual/> } />
            <Route path='/AddGame' element= { <AddGame/> } />
            <Route path='/update/:id' element={<FormUpdate />} />
          </Routes>

        <BasicFooter />
      </>
    ) : (
      <>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Login" />} />
          <Route path='/Login' element= { <Login/> } />
          <Route path='/SignUp' element= { <SignUp/> } />
        </Routes>
      </>
    )}
    </div>

    

    
    
  );
}

export default App;
