import { Route, Routes } from 'react-router-dom';
import './App.css';
import Common from './components/Common';
import Home from './elements/Home';
import Signup from './elements/Signup';
import Login from './elements/Login';
import Unique from './elements/Unique';
import Dashboard from './components/user/Dashboard';
import Profile from './components/user/Profile';
import Rentbook from './components/user/Rentbook';
import Rentedbooks from './components/user/Rentedbooks';
import Review from './components/user/Review';
import Editprofile from './components/user/Editprofile';

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Common child={<Home/>}/>}/>
       <Route path='/signup' element={<Common child={<Signup/>}/>}/>
       <Route path='/login' element={<Common child={<Login/>}/>}/>
       <Route path ='/unique/:id' element={<Unique/>}/>
       <Route path='/userdash' element={<Dashboard/>}/>
       <Route path='/rent' element={<Rentbook/>}/>
       <Route path='/profile/:id' element={<Profile/>}/>
       <Route path='/Rented' element={<Rentedbooks/>}/>
       <Route path='/review' element={<Review/>}/>
       <Route path='/editProfile' element={<Editprofile/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
