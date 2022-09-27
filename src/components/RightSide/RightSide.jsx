import React from 'react'
import './RightSide.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import Trendcard from '../TrendCard/Trendcard';
const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Comment} alt="" />
            <img src={Noti} alt="" />
            <UilSetting />
        </div>
        <Trendcard/>
        {/* <button  className='button r-button'>
            Share
        </button> */}
    </div>

  )
}

export default RightSide