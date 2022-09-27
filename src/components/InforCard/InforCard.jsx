import React from 'react'
import './InforCard.css'
import { UilPen } from "@iconscout/react-unicons";
const InforCard = () => {
  return (
    <div className="InforCard">
        <div className="infoHead">
            <h4>Ur Informatin</h4>
            <UilPen width='2rem' height='1.2rem'/>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
                <span>In relationship</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
                <span>city name</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
                <span>Company....</span>
            </span>
        </div>
        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InforCard