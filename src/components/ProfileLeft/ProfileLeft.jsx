import React from 'react'
import FollowersCard from '../FollowersCard/FollowesCard'
import InfoCard from '../InforCard/InforCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProfileLeft.css'
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft