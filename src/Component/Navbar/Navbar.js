import React,{useState} from "react";
import { Link } from 'react-router-dom'
import Cards from "../Cards/Cards";
import CompanyCard from "../Company/Company Card";
import Footer from "../Footer/Footer";
import Style from './Navbar.module.css'

export default function Navbar() {
    const[desegnations , setDesegnations] = useState([])
    return (
        <>
            <div className={Style.Main}>
                <div className={Style.NavbarContent}>
                    <img width='50rem' height='50rem' src='https://imgur.com/OtSli90.png' alt="logo" />
                    <Link className={Style.Link} to='/job'>Job</Link>
                    <Link className={Style.Link} to='/companies'>Companies</Link>
                    <Link className={Style.Link} to='/services'>Services</Link>
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
            <input  className={Style.input} placeholder='designations' onChange={(e)=>{ setDesegnations(e.target.value)}}/>
            <input  className={Style.input} placeholder='Location'/>
            <button className={Style.Button}>Search</button>
            </div> 

            <Cards/>
            <CompanyCard/>
            <Footer/>
        </>
    )
}