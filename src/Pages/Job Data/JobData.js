import React from 'react'
import Style from './JobData.module.css'

function JobData() {
  const Data = JSON.parse(localStorage.getItem('jobData'))
  return (
    <div className={Style.Main}>

      {Data.map((x, i) => <div key={i} className={Style.Cards}>
        <div className={Style.Logo}>{x?.company_name}<img width="100vw" height='110vh'  src={x.company_logo} /></div>
        <div className={Style.content}>
          <h3>Title:&nbsp; {x?.title}</h3>
          <p>Location:&nbsp; {x.candidate_required_location}</p>
          <p>publication_date:&nbsp; {x.publication_date}</p>
          <p>Tages: &nbsp;{x.tags.slice(0, 5).join(' ')}</p>
          <p>job-type: &nbsp;{x.job_type}</p>
        </div>
      </div>
      )}
    </div>
  )
}

export default JobData
