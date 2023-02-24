import React from 'react';
import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Companies from './Pages/Companies/Companies';
import Job from './Pages/Job/Job';
import Services from './Pages/Services/Services';
import JobData from  './Pages/JobData';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Navbar/>}/>
        <Route path ='/job' element={<Job/>}/>
        <Route path ='/companies' element={<Companies/>}/>
        <Route path ='/services' element={<Services/>}/>
        <Route path ='/JobList'  element={<JobData/>}/>
      </Routes>
    </div>
  );
}

export default App;
