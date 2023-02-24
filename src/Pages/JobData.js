import React from 'react'
// import SearchBar from '../Component/Searchbar/SearchBar'

function JobData() {
    const Data= JSON.parse(localStorage.getItem('jobData'))
  return (
    <div>
       
       {Data.map((x,i)=><div key={i} style={{border : "1px solid red"}}>
         <h3>Title:{x?.title}</h3>
         <div style={{display : "flex", alignItem : "center"}}><img width="50px" src={x.company_logo} />{x?.company_name}</div>
         <p>Location:{x.candidate_required_location}</p>
         <p>publication_date{x.publication_date}</p> 
         <p>Tages:{x.tags.slice(0,5).join(' ')}</p>
         <p>job-type:{x.job_type}</p>
       </div>
       )}
    </div>
  )
}

export default JobData
