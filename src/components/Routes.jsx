import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Campuses from "./Campuses";
import Students from "./Students";
import NewCampus from './NewCampus';
import NewStudent from './NewStudent';
import EditCampus from './EditCampus';

function Router(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/campuses' element={<Campuses/>} />
        <Route path='/campuses/:campusId/' element={<EditCampus/>} />
        <Route path='/campuses/create' element={<NewCampus/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/students/create' element={<NewStudent/>} />
      </Routes>
    </div>
  )
}

export default Router;
