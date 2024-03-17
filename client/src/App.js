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
import Admindash from './components/admin/Admindash';
import Newbook from './components/admin/Newbook';
import Editbook from './components/admin/Editbook';
import Users from './components/admin/Users';
import PrivateRoute from './elements/PrivateRoute';


function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Common child={<Home/>}/>}/>
       <Route path='/signup' element={<Common child={<Signup/>}/>}/>
       <Route path='/login' element={<Common child={<Login/>}/>}/>
       <Route path ='/unique/:id' element={<Unique/>}/>
       <Route path='/userdash' element={<PrivateRoute Component = {Dashboard}/>}/>
       <Route path='/rent' element={<PrivateRoute Component = {Rentbook}/>}/>
       <Route path='/profile/:id' element={<PrivateRoute Component = {Profile}/>}/>
       <Route path='/Rented' element={<PrivateRoute Component = {Rentedbooks}/>}/>
       <Route path='/review' element={<PrivateRoute Component = {Review}/>}/>
       <Route path='/editProfile' element={<PrivateRoute Component = {Editprofile}/>}/>

       <Route path='/admindash' element={<PrivateRoute Component = {Admindash}/>}/>
       <Route path='/new' element={<PrivateRoute Component = {Newbook}/>}/>
       <Route path='/editBook' element={<PrivateRoute Component = {Editbook}/>}/>
       <Route path='/Users' element={<PrivateRoute Component = {Users}/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
