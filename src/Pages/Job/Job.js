import React,{useState} from "react";
// import Navbar from "../../Component/Navbar/Navbar";


export default function Job() {

  const [search , setSearch] = useState("")
const [jobList , setJobList] = useState([])
const captureSearch = (e)=>{
  setSearch(e.target.value)
}
async function handleSearch(search){
  const res = await fetch(`https://remotive.io/api/remote-jobs?search=${search}`)
  const data = await res.json()
  console.log(data.jobs.slice(0,20),"job")
  setJobList(data.jobs.slice(0,20))
}
  return (
    <div>
      {/* <Navbar/> */}
     <h1>Hey user search Job</h1>
     <input value={search} placeholder="Search Jobs" onChange={captureSearch}/>
     <button onClick={()=>handleSearch(search)}>Search</button>
    
 
       {jobList.map((x,i)=><div key={i} style={{border : "1px solid red"}}>
         <h3>Title:{x?.title}</h3>
         <div style={{display : "flex", alignItem : "center"}}><img width="50px" src={x.company_logo}/>{x?.company_name}</div>
         <p>Location:{x.candidate_required_location}</p>
         <p>publication_date{x.publication_date}</p> 
         <p>Tages:{x.tags.slice(0,5).join(' ')}</p>
         <p>job-type:{x.job_type}</p>
       

  
       </div>)}
     

    </div>
  );
}