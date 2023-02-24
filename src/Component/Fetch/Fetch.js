async function Fetch(search){
    const res = await fetch(`https://remotive.io/api/remote-jobs?search=${search}`)
    const data = await res.json()
    console.log(data.jobs.slice(0,20),"job")
    // setJobList(data.jobs.slice(0,20))
   
    return data.jobs.slice(0,20)

  }
export default Fetch
