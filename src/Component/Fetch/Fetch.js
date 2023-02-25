 export async function Fetch(search){
    const res = await fetch(`https://remotive.io/api/remote-jobs?search=${search}`)
    const data = await res.json()
    // setJobList(data.jobs.slice(0,20))
   
    return data.jobs.slice(0,20)

  }


