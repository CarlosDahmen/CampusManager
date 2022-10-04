import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Campuses from "./Campuses";
import Students from "./Students";
import NewCampus from './NewCampus';
import NewStudent from './NewStudent';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';

function Router(){
  return(
    <div>
      <Routes>
        <Route path='students/:studentId/' element={<EditStudent/>} />
        <Route path='/campuses/:campusId/' element={<EditCampus/>} />
        <Route path='/campuses/create' element={<NewCampus/>} />
        <Route path='/students/create' element={<NewStudent/>} />
        <Route path='/campuses' element={<Campuses/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/' element={<Navbar/>} />
      </Routes>
    </div>
  )
}

export default Router;
