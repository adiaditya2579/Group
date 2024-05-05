import './Profile.css'
import { MdBookmarkBorder, MdCalendarMonth, MdClose, MdPerson } from 'react-icons/md'
import Button from '../Buttons/Button'
import { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../../Contexts/LoginContect'
import { motion } from 'framer-motion'
import { getAuth, signOut } from 'firebase/auth'


function Profile() {

    const { userData, showProfile, setShowProfile, loginData, handleSignOut } = useContext(LoginContext);
    console.log("check");
    console.log(userData.picture);


    return (
        <div className='profile-outer-container'>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="profile-main-container">
                <div className="header">
                    <h1>Profile</h1>
                    <span onClick={() => setShowProfile(false)}>
                        <MdClose />
                    </span>
                </div>

                {/* image container */}
                <div className="img-container">
                    <img src={userData.picture} alt="" />
                </div>

                {/* info-container */}
                <div className="info-container">
                    <h4>{userData.email}</h4>
                    <h4>{userData.name}</h4>
                    {userData.program && <h4>{userData.program}</h4>}
                    {userData.roll_no && <h4>{userData.roll_no}</h4>}
                </div>
                <div className="btn-container" onClick={() => { handleSignOut() }}>
                    <Button text={"Sign Out"} btnClass={"secondary-outline"} />
                </div>
            </motion.div>
        </div>
    )
}

export default Profile