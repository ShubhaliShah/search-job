import React from 'react';
import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Companies from './Pages/Companies/Companies';
import Job from './Pages/Job/Job';
import JobData from  './Pages/Job Data/JobData';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/job' element={<Job/>}/>
        <Route path ='/companies' element={<Companies/>}/>
        <Route path ='/JobList'  element={<JobData/>}/>
      </Routes>
    </div>
  );
}

export default App;
