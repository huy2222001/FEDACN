import React, { useState } from "react";
import './InforCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal.jsx';
const InforCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
    <div className="InforCard">
        <div className="infoHead">
            <h4>Ur Information</h4>
            <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
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