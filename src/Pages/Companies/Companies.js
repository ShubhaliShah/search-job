import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Style from './Companies.module.css'
import { Cards } from './ConstantData'
export default function Companies() {

  const Data = Cards
  console.log(Data, 'Line 7 ');
  return (

      <div  className={Style.Main}>
        <Navbar/>   
    <div className={Style.card} >
      {Data.map((x) =>

        <div className={Style.card1} >
          {console.log(x, 'from map')}

          <img src={x?.img} />
          <div className={Style.Content}>
            <h3>{x?.Company_Name}</h3>
            <span>{x?.Rating}</span>
            <br />
            <span>{x?.reviews}</span>
          </div>
        </div>

      )
      }

    </div>
    </div> 

  )

}