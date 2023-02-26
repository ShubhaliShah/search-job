import React,{useState} from 'react'
import { Fetch } from '../../Component/Fetch/Fetch'
import { useNavigate } from 'react-router-dom'
import Style from './Landing.module.css'
import Cards from '../../Component/Cards/Cards'
import CompanyCard from '../../Component/Company/Company Card'
import Footer from '../../Component/Footer/Footer'

function Landing() {

    const[desegnations , setDesegnations] = useState('')
     const nav = useNavigate()
   async function HandleClick(desegnations ){
       const Data = await Fetch(desegnations )
       console.log(Data,'from fetch data and navbar')
       localStorage.setItem('jobData' , JSON.stringify(Data))
       nav('/JobList')
    }
  return (
    <>
    <div>
      <div className={Style.Display}>
                <div className={Style.Content}>
                <h1>Find your dream job now</h1>
                <span>5 lakh+ jobs for you to explore</span>
                </div>
            </div>
            <div className={Style.InputWrapper}>  
            <input  className={Style.input} placeholder='Find your dream job now' onChange={(e)=>{ setDesegnations(e.target.value)}} value={desegnations}/>
            <button className={Style.Button} onClick={() => {HandleClick(desegnations)}}>Search</button>
            </div>
    </div>

<Cards/>
<CompanyCard/>
<Footer/>
</>
  )
}

export default Landing
