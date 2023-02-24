import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Feedback from './Pages/Feedback';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Appointment from './Pages/Appointment';
import UploadXray from './Pages/UploadXray';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';
import StripeContainer from './Pages/StripeContainer';
import ViewPrescription from './Pages/ViewPrescription';
import Videos from './Pages/Videos';
import Squats from './Pages/Squats';
import SitStands from './Pages/Sitstands';
import BicycleCrunch from './Pages/BicycleCrunch';
import BoxJump from './Pages/BoxJump';
import Burpee from './Pages/Burpee';
import CrossJumps from './Pages/CrossJumps';
import JumpingJacks from './Pages/JumpingJacks';
import WeightedSquats from './Pages/WeightedSquats';
import PikeWalk from './Pages/PikeWalk';
import Pistol from './Pages/Pistol';
import Pushups from './Pages/Pushups';
import CrossJumpsR from './Pages/CrossJumpsR';
import DoctorLogin from './Pages/DoctorLogin';
import DoctorRegistration from './Pages/DoctorRegistration';
import DoctorHome from './Pages/DoctorHome';
import DoctorFeedback from './Pages/DoctorFeedback';
import DoctorUploadxray from './Pages/DoctorUploadXray';
import MainScreen from './Pages/MainScreen';

import DoctorAppointments from './Pages/DoctorAppointments';
import CreatePrescription from './Pages/CreatePrescription';
import DoctorProfile from './Pages/DoctorProfile';
import DoctorContactUs from './Pages/DoctorContactUs';
import AdminLogin from './Pages/AdminLogin';
import AdminHome from './Pages/AdminHome';
import ViewFeedbacks from './Pages/ViewFeedbacks';
import DeleteUser from './Pages/DeleteUser';
import Messenger from './Pages/Messenger';
import Prescription from './Pages/Prescription';
import DoctorMessenger from './Pages/DoctorMessenger';
import Edit from './Pages/Edit';
import DocEdit from './Pages/DocEdit';
import ViewProfile from './Pages/ViewProfile';
import ViewDoctorProfile from './Pages/ViewProfileDoc';
//import AdminLogin from './Pages/AdminLogin';
import AdminViewPatient from './Pages/AdminViewPatient';
import ViewProfileOfDoctor from './Pages/ViewProfileOfDoctor';
import ViewProfileOfPatients from './Pages/ViewProfileOfPatients';
import DoctorMessage from './Pages/DoctorMessage';
import Message from './Pages/Message';
import PatientAppointments from './Pages/PatientAppointments';
import ViewAppointmentsByAdmin from './Pages/ViewAppointmentsByAdmin';
import Report from './Pages/GenerateReport';
function App() {
  return (
  <>  
    <Router>
      <div className="App">
        <Routes>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/feedback" element={<Feedback/>}> </Route>
        <Route path="/contactus" element={<ContactUs/>}> </Route>
        <Route path="/logout" element={<MainScreen/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/registration" element={<Registration/>}> </Route>
        <Route path="/appointment" element={<Appointment/>}> </Route>
        <Route path="/stripeContainer" element={<StripeContainer/>}> </Route>
        <Route path="/uploadxray" element={<UploadXray/>}> </Route>
        <Route path="/profile" element={<Profile/>}> </Route>
        <Route path="/Edit" element={<Edit/>}> </Route>
        <Route path="/viewprescription" element={<ViewPrescription/>}> </Route>
        <Route path="/prescription" element={<Prescription/>}> </Route>
        <Route path="/messenger" element={<Messenger/>}> </Route>
        <Route path="/message" element={<Message/>}> </Route>
        <Route path="/doctorMessage" element={<DoctorMessage/>}> </Route>
        <Route path="/doctorMessenger" element={<DoctorMessenger/>}> </Route>
        <Route path="/videos" element={<Videos/>}> </Route>
        <Route path="/videos/squats" element={<Squats/>}> </Route>
        <Route path="/videos/sitStand" element={<SitStands/>}> </Route>
        <Route path="/videos/weightedSquats" element={<WeightedSquats/>}> </Route>
        <Route path="/videos/pushups" element={<Pushups/>}> </Route>
        <Route path="/videos/pistol" element={<Pistol/>}> </Route>
        <Route path="/videos/pikeWalk" element={<PikeWalk/>}> </Route>
        <Route path="/videos/jumpingJacks" element={<JumpingJacks/>}> </Route>
        <Route path="/videos/crossJumpsRotation" element={<CrossJumpsR/>}> </Route>
        <Route path="/videos/crossJumps" element={<CrossJumps/>}> </Route>
        <Route path="/videos/burpee" element={<Burpee/>}> </Route>
        <Route path="/videos/boxJump" element={<BoxJump/>}> </Route>
        <Route path="/videos/bicycleCrunch" element={<BicycleCrunch/>}> </Route>
        <Route path="/doctorLogin" element={<DoctorLogin/>}> </Route>
        <Route path="/doctorRegistration" element={<DoctorRegistration/>}> </Route>
        <Route path="/doctorHome" element={<DoctorHome/>}> </Route>
        <Route path="/doctorLogout" element={<MainScreen/>}> </Route>
        <Route path="/doctorFeedback" element={<DoctorFeedback/>}> </Route>
        <Route path="/doctorUploadxray" element={<DoctorUploadxray/>}> </Route>
        <Route path="/" element={<MainScreen/>}> </Route>
        <Route path="/doctorChats" element={<DoctorMessenger/>}> </Route>
        <Route path="/viewAppointments" element={<DoctorAppointments/>}> </Route>
        <Route path="/PatientAppointments" element={<PatientAppointments/>}> </Route>
        <Route path="/createPrescription" element={<CreatePrescription/>}> </Route>
        <Route path="/doctorProfile" element={<DoctorProfile/>}> </Route>
        <Route path="/DocEdit" element={<DocEdit/>}> </Route>
        <Route path="/doctorContactus" element={<DoctorContactUs/>}> </Route>
        <Route path="/adminLogin" element={<AdminLogin/>}> </Route>
        <Route path="/adminViewPatient" element={<AdminViewPatient/>}> </Route>
        <Route path="/adminHome" element={<AdminHome/>}> </Route>
        <Route path="/viewFeedbacks" element={<ViewFeedbacks/>}> </Route>
        <Route path="/deleteUser" element={<DeleteUser/>}> </Route>
        <Route path="/viewProfile" element={<ViewProfile/>}> </Route>
        <Route path="/viewDoctorProfile" element={<ViewDoctorProfile/>}> </Route>
        <Route path="/admin/viewProfile" element={<ViewProfileOfDoctor/>}> </Route>
        <Route path="/admin/viewPatientProfile" element={<ViewProfileOfPatients/>}> </Route>
        <Route path="/admin/viewAppointments" element={<ViewAppointmentsByAdmin/>}> </Route>
        <Route path="/generateReport" element={<Report/>}> </Route>
        </Routes>
      </div>
    </Router>
  
    </>
  )
}

export default App 


