import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Fetch } from "../../Component/Fetch/Fetch";
import Style from './Job.module.css'



export default function Job() {

  const [search, setSearch] = useState("")
  const [jobList, setJobList] = useState([])
  const captureSearch = (e) => {
    setSearch(e.target.value)
  }

  async function handleSearch(search) {

    const Data = await Fetch(search)
    setJobList(Data)
  }
  return (
    <>
      <Navbar />
      <div className={Style.MainBox} >


        <div className={Style.Box}>

          <input className={Style.Input} value={search} placeholder="Search Jobs" onChange={captureSearch} />
          <button  className ={Style.Button} onClick={() => handleSearch(search, Location)}>Search</button>
        </div>

        <div className={Style.CardBox}>
          {jobList.map((x, i) => <div className={Style.CardsItem}><div className={Style.Card} key={i} >
            <div className= {Style.ImageDIV} ><img className= {Style.Image} width="50px" src={x.company_logo} /></div>

            <div className={Style.CardContent}>
            <span>{x?.company_name}</span>
            <span>Title:{x?.title}</span>
            <span>Location:{x?.candidate_required_location}</span>
            <span>Tages:{x.tags.slice(0, 5).join(' ')}</span>
            <span>job-type:{x.job_type}</span>
            </div>
            </div>
          </div>)}
        </div>

      </div>
    </>
  );
}