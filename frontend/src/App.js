import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './viewtest/Home/Main';
import MainUser from './viewtest/User/MainUser';
import MainAbout from './viewtest/About/MainAbout';
import ListBlog from './viewtest/Home/ListBlog/ListBlog';
import ListBlog1 from './viewtest/Home/ListBlog/ListBlog1';
import ListBlog2 from './viewtest/Home/ListBlog/ListBlog2';
import ListBlog3 from './viewtest/Home/ListBlog/ListBlog3';
import MainProduct from './viewtest/Home/Product/MainProduct';
import MainLogin from './viewtest/Home/Login_Register/MainLogin';
import MainRegister from './viewtest/Home/Login_Register/MainRegister';
import Myfavs from './viewtest/User/Myfavs';
import UserInfor from './viewtest/User/UserInfor';
import Mycars from './viewtest/User/Mycars';
import Myreward from './viewtest/User/Myreward';
import Mytrips from './viewtest/User/Mytrips';
import Resetpw from './viewtest/User/Resetpw';
import Navbarmobile from './viewtest/User/Navbarmobile';
import Maintrip from './viewtest/Home/Trip/Maintrip';
import ScrollToTop from './viewtest/Home/Scroptotop';

function App() {
  return (
    <>
      <Router>
          <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user' element={<MainUser />} />
          <Route path='/about' element={<MainAbout />} />
          <Route path='/listblog' element={<ListBlog/>} />
          <Route path='/listblog1' element={<ListBlog1/>} />
          <Route path='/listblog2' element={<ListBlog2/>} />
          <Route path='/listblog3' element={<ListBlog3/>} />
          <Route path='/product/:id' element={<MainProduct />} />
          <Route path='/login' element={<MainLogin />} />
          <Route path='/register' element={<MainRegister />} />
          <Route path='/UserInfor' element={<UserInfor />} />  
          <Route path='/Myfavs' element={<Myfavs/>} />  
          <Route path='/Mycars' element={<Mycars/>} />  
          <Route path='/Myreward' element={<Myreward/>} />  
          <Route path='/Mytrips' element={<Mytrips/>} />  
          <Route path='/Resetpw' element={<Resetpw/>} />
          <Route path='/Navbarmobile' element={<Navbarmobile/>} />
          <Route path='/trip' element={<Maintrip/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

