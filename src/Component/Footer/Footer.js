import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
//import { BsJournalCode } from "react-icons/bs";
import Style from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={Style.box}>
            <div className={Style.social}>
                <div className={Style.box2}>
                    <p>Bussiness</p>
                    <p>Careers</p>
                    <p>Terms</p>
                    <p>Employer home</p>
                    <p>Blog</p>
                    <p>Privacy policy</p>
                    <p>Get the app</p>
                    <p>Help and Support</p>
                    <p>Cookie settings</p>
                    <p>About Us</p>
                    <p>Affiliate</p>
                    <p>Sitemap</p>
                    <p>Contact us</p>
                    <p>Investors</p>
                    <p>Accessibilty statement</p>
                </div>
                     <h4  className={Style.Connect} >Connect With Us</h4>
               
                    <div className={Style.socialLogo}>
                        <AiOutlineInstagram />
                        <FiYoutube />
                        <AiOutlineFacebook />
                        <RxTwitterLogo />
                        <AiOutlineLinkedin />
                </div>
        
            </div>
            {/* <label className={Style.boxIcon}>
        <BsJournalCode /> Learn - O - Pedia
      </label> */}
            <div className={Style.boxFooter}>
                <span>
                    All trademarks are properties of their respective owners. 2008-2023 ©
                    Job-search™ Ltd. All rights reserved.
                </span>
            </div>
            {/* <h3 className={Style.boxDesigned}>
        Designed by <span className={Style.boxownername}> Abhishek</span>😎
      </h3> */}
        </div>
    );
}