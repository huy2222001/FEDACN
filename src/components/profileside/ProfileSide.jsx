import React from 'react'
import FollowesCard from '../FollowersCard/FollowesCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './profileside.css'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <ProfileCard/>
        <FollowesCard/>
    </div>
  )
}

export default ProfileSide