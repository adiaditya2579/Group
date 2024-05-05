import React from 'react'
import './Groups.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { MdArrowDropDown } from 'react-icons/md'
import Button from '../Buttons/Button'
import stats from '../../assets/stats2.png'

function Groups() {
    return (
        <div className='groups-outer-container'>
            {/* <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: 0 }}
                transition={{ duration: 1 }} className="sidebar-main-container">
                <div className="insta-container">
                    <BsInstagram />
                </div>
                <div className="fb-container">
                    <BsFacebook />
                </div>
            </motion.div> */}

            <div className="groups-main-container">
                <div className="groups-header">
                    <h1>Study Group</h1>
                    <div className="course-select-dropdown">
                        <select name="level" id="level">
                            <option value="null" selected disabled hidden>Select Level</option>
                            <option value="foundation">Foundation</option>
                            <option value="diploma">Diploma</option>
                        </select>
                    </div>
                </div>

                <div className="cards-main-container">
                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-container">
                            <img src={stats} alt="" />
                        </div>
                        <div className="card-content-container">
                            <h2>Whatsapp Group Name</h2>
                            <p>Maths 1</p>
                            <div className="card-btn-container">
                                <Button text="Join" btnClass={"primary"} />
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Groups