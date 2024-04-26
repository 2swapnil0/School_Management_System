import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.js";
import ChooseUser from "./pages/Chooseuser.js";
import AdminRegister from "./pages/Adminregister.js";
import AdminLogin from "./pages/adminlogin.js";
import AdminDashboard from "./pages/admindashboard.js";
import StudentLogin from "./pages/studentlogin.js";
import Teacherlogin from "./pages/teacherlogin.js"
import Parentlogin from "./pages/parentlogin.js"
import Addstudent from "./pages/addstudents.js"
import Student from "./pages/Students.js";
import AllStudents from "./pages/allstudents.js";
import Removestudent from "./pages/removestudent.js"
import Teachers from "./pages/teacher.js"
import Addteacher from "./pages/addteacher.js"
import AllTeachers from "./pages/allteachers.js";
import Removeteacher from "./pages/removeteacher.js"
import StudentDashboard from "./pages/studentdashboard.js";
import TeacherDashboard from "./pages/teacherdashboard.js";
import Addclasses from "./pages/addclasses.js"
import AssignmentListPage from "./pages/assignmentlist.js";
import Commonhome from "./pages/commonhome.js"
import Gradebook from "./pages/gradebook.js";
import Addparent from "./pages/addparent.js"
import ParentDashboard from "./pages/parentdashboard.js";
import Parent from "./pages/parents.js";
import AllParents from "./pages/allparents.js";
import Removeparent from "./pages/removeparents.js"
import Classes from "./pages/scheduleclass.js";
import Viewclassstudent from "./pages/viewclasses_student.js";
import Viewclassteacher from "./pages/viewclasses_teacher.js"
import Completeclass from "./pages/completeclass.js"
import Assignment from "./pages/Assignment.js"
import AddAssignment from "./pages/addassignment.js";
import ViewAssignmentteacher from "./pages/viewassignmentteacher.js";
import AddGradesPage from "./pages/addgrades.js";
import AdmitCardPage from "./pages/admitcard.js";


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Homepage />} />
         <Route path="/choose" element={<ChooseUser />} />
         <Route path="/adminlogin" element={<AdminLogin/>} />
         <Route path="/studentlogin" element={<StudentLogin />} />
         <Route path="/teacherlogin" element={<Teacherlogin />} />
         <Route path="/parentlogin" element={<Parentlogin/>} />
         <Route path="/Adminregister" element={<AdminRegister />} />
         <Route path="/Admindashboard" element={<AdminDashboard />} />
         <Route path="/addstudents" element={<Addstudent />} />
         <Route path="/students" element={<Student />} />
         <Route path="/allstudents" element={<AllStudents />} />
         <Route path="/removestudent" element={<Removestudent />} />
         <Route path="/studentdashboard" element={<StudentDashboard />} />
         <Route path="/teachers" element={<Teachers />} />
         <Route path="/addteachers" element={<Addteacher />} />
         <Route path="/allteachers" element={<AllTeachers />} />
         <Route path="/removeteacher" element={<Removeteacher />} />
         <Route path="/teacherdashboard" element={<TeacherDashboard />} />
         <Route path="/classes" element={<Classes />} />
         <Route path="/addclasses" element={<Addclasses />} />
         <Route path="/viewclassstudent" element={<Viewclassstudent />} />
         <Route path="/viewclassteacher" element={<Viewclassteacher />} />
         <Route path="/assignmentlist" element={<AssignmentListPage />} />
         <Route path="/commonhome" element={<Commonhome />} />
         <Route path="/gradebook" element={<Gradebook />} />
         <Route path="/addparent" element={<Addparent />} />
         <Route path="/parentdashboard" element={<ParentDashboard />} />
         <Route path="/parentdashboard" element={<ParentDashboard />} />
         <Route path="/parents" element={<Parent />} />
         <Route path="/allparents" element={<AllParents />} />
         <Route path="/removeparents" element={<Removeparent />} />
         <Route path="/completeclass" element={<Completeclass />} />
         <Route path="/assignment" element={<Assignment />} />
         <Route path="/addassignment" element={<AddAssignment />} />
         <Route path="/viewassignmentteacher" element={<ViewAssignmentteacher />} />
         <Route path="/addgrades" element={<AddGradesPage />} />
         <Route path="/admitcard" element={<AdmitCardPage />} />
       </Routes>
    </Router>
    
  );
}

export default App;
