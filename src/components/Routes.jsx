import { Route, Routes } from "react-router-dom";
import Campuses from "./Campuses";
import Students from "./Students";
import NewCampus from "./NewCampus";
import NewStudent from "./NewStudent";
import EditCampus from "./EditCampus";
import EditStudent from "./EditStudent";
import Home from "./Home";

function Router() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="students" element={<Students />}></Route>
        <Route path="students/:studentId" element={<EditStudent />} />
        <Route path="students/create" element={<NewStudent />} />
        <Route path="campuses/:campusId/" element={<EditCampus />} />
        <Route path="campuses/create" element={<NewCampus />} />
        <Route path="campuses" element={<Campuses />} />
      </Routes>
    </div>
  );
}

export default Router;
