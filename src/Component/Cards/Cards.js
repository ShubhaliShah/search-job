import React from "react";
import Style from './Cards.module.css'
import Data from './Data'


export default function Cards() {


  return (
   <div className={Style.Main}>
    {Data.map( (x) =>
    <div className={Style.Card}>
      <img className='Logo' width='50px' src={x.image} alt='Logo'/>
      <span><sup>{x.TagName}</sup></span>
      <img width='10px' src={x.Img} alt='Logo'/>
    </div>
     )}
    </div>
  );
}

