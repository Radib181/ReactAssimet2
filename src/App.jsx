import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './assets/Component/Navber'; // Fix the case-sensitive import
import Dashboard from './assets/Component/Header'; // Fix the case-sensitive import
import Header from './assets/Component/Header';
import Incidents from './assets/Component/Incidents'; // Ensure this component exists and is imported
// import Dasbord from "./assets/Component/Dasbord"
import Error from "./assets/Component/Error";
import NewIncident from "./assets/Component/NewIncident"
import Step from "./assets/Component/StepOne";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      
    
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Incidents" element={<Incidents />} />
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/" element={<Dashboard />} /> 
          <Route path="new-incident" element={<Step  />} />
          <Route path="*" element={<Error />} />
          <Route path="NewIncident" element={<NewIncident />} />
          <Route path="/new-incident" element={<NewIncident />} /> {/* New Incident পেজ */}

        </Routes>
      </BrowserRouter>
      {/* Unused code commented for clarity */}
      {/* <main className='overflow-x-hidden bg-[#F3F4F6]'>
        <Navbar />
        <Dashboard />
        <Header />
      </main> */}
    </>
  );
}

export default App;
