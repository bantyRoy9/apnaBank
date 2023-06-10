import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Auth from './components/users/auth';
import Signup from './components/users/signup';
import DashBoard from './components/users/dashBoard/dashBoard';

// import Nav from '../components/navbar/nav';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route exect path='/' element={<Home/>}></Route>
      <Route exect path='/login' element={<Auth/>}></Route>
      <Route exect path='/signup' element={<Signup/>}></Route>
      <Route exect path='/dashBoard' element={<DashBoard/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
