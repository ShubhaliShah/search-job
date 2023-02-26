import React from "react";
import { Link} from 'react-router-dom'
import Landing from "../../Pages/LandingPage/Landing";
import Cards from "../Cards/Cards";
import CompanyCard from "../Company/Company Card";
import Footer from "../Footer/Footer";
import Style from './Navbar.module.css'



export default function Navbar() {

  
 
    return (
        <>
            <div className={Style.Main}>
                <div className={Style.NavbarContent}>
                    <div  className={Style.Logo}> 
                        <img width='50rem' height='50rem' src='https://imgur.com/OtSli90.png' alt="logo" />
                        <span>Naukari Dekho</span>
                    </div>
  
                    <div className= {Style.NavbarInner}>
                    <Link className={Style.Link} to='/job'>Job</Link>
                    <Link className={Style.Link} to='/companies'>Companies</Link>
                    </div> 
                </div>
            </div>
            
           

            
        </>
    )
}