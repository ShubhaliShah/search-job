import React,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import Cards from "../Cards/Cards";
import CompanyCard from "../Company/Company Card";
import Footer from "../Footer/Footer";
import Style from './Navbar.module.css'
import {Fetch} from "../Fetch/Fetch";


export default function Navbar() {
    const[desegnations , setDesegnations] = useState('')
    const[location , setLocation] = useState('')
     const nav = useNavigate()
   async function HandleClick(desegnations ){
       const Data = await Fetch(desegnations )
       console.log(Data,'from fetch data and navbar')
       localStorage.setItem('jobData' , JSON.stringify(Data))
       nav('/JobList')
    }
  
 
    return (
        <>
            <div className={Style.Main}>
                <div className={Style.NavbarContent}>
                    <img width='50rem' height='50rem' src='https://imgur.com/OtSli90.png' alt="logo" />
                    <Link className={Style.Link} to='/job'>Job</Link>
                    <Link className={Style.Link} to='/companies'>Companies</Link>
                    
                </div>
                <div>
                    <div className={Style.ButtonDiv}>
                        <button className={Style.Button}>Login</button>
                        <button className={Style.Button}>Register</button>
                    </div>
                </div>
            </div>
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

            <Cards/>
            <CompanyCard/>
            <Footer/>
        </>
    )
}