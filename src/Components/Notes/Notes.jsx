import { React, useEffect, useState } from 'react'
import './Notes.css'
import { MdArrowForwardIos, MdCalendarMonth, MdMode, MdPerson } from 'react-icons/md'
// import data from '../../json/notes/notes_new.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BsDatabaseFill } from 'react-icons/bs'
import { logEvent } from 'firebase/analytics'
import { motion } from 'framer-motion'


function Notes({ data }) {
    const base_url = import.meta.env.VITE_BASE_URL

    // page title
    document.title = "AceGrade | Notes";

    const navigate = useNavigate();

    const [selectedLevel, setSelectedLevel] = useState("Foundation");
    const [metaData, setmetaData] = useState();
    const [courseList, setCourseList] = useState();
    const [selectedSubject, setSelectedSubject] = useState();
    const [notesData, setNotesData] = useState();



    // const nav_links = [

    //     {
    //         title: "Maths 1"
    //     },
    //     {
    //         title: "English 1"
    //     },
    //     {
    //         title: "Computational Thinking"
    //     },
    //     {
    //         title: "Maths 1"
    //     },
    //     {
    //         title: "Maths 1"
    //     },

    // ]

    // fetching the meta deta

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data == null) {
            navigate("/")
        }
    }, [BsDatabaseFill]);


    async function fetchData() {
        try {
            setmetaData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }


    useEffect(() => {
        if (selectedLevel && metaData) {
            setCourseList(metaData.course_metadata[selectedLevel]);
        }

        metaData && setSelectedSubject(Object.keys(metaData.course_metadata[selectedLevel])[0])
        metaData && getNotes(Object.keys(metaData.course_metadata[selectedLevel])[0]);
    }, [selectedLevel, metaData]);

    if (!metaData) {
        return <div>Loading...</div>;
    }


    // fetching the notes according to the subjects
    async function getNotes(id) {
        try {
            const response = await axios.get(`${base_url}/api/notes/${id}`);
            setNotesData(response.data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }


    return (
        <div className='notes-outer-container'>
            <div className="notes-top-header-container">
                <h1><span><MdMode /></span>Notes</h1>
                <div className="course-select-dropdown">
                    <select name="level" id="level" onChange={(e) => { setSelectedLevel(e.target.value) }} value={selectedLevel}>

                        {
                            Object.keys(data.course_metadata).map((item, index) => {
                                // console.log("item selected is : " + item);
                                return (
                                    <option value={item} key={index}>{item}</option>
                                )
                            })
                        }

                        {/* <option hidden disabled selected>Select Level</option> */}
                        {/* <option value="foundation">Foundation</option>
                        <option value="diploma">Diploma</option>
                        <option value="degree">Degree</option> */}

                    </select>
                </div>
            </div>
            <div className="notes-main-container">

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 0.1
                    }}
                    className="vertical-nav-container">

                    {/* {courseList && ( */}
                    <ul>
                        {courseList && Object.entries(courseList).map(([name, title]) => (
                            <li
                                key={name}
                                onClick={(e) => {
                                    getNotes(name);
                                    setSelectedSubject(name);
                                }}
                                className={name === selectedSubject ? "active" : ""}
                            >
                                <p>
                                    {title}
                                </p>

                                <span className='sidebar-arrow'> <MdArrowForwardIos /> </span>
                            </li>
                        ))}

                    </ul>
                    {/* )} */}
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 0.1
                    }}
                    className="notes-container">
                    <div className="notes-right-header-container">
                        <h4>Title</h4>
                        <h4>Shared By</h4>
                    </div>

                    {
                        notesData && notesData.notes.map((user, i) => (
                            user.content.map((item, index) => {
                                return (
                                    <a href={item.url} target='_blank'>
                                        <div className="note" key={index}>
                                            <div className="note-tile-container note-common">
                                                <div className="note-icon-container">
                                                    <MdCalendarMonth />
                                                </div>
                                                <p>{item.title}</p>
                                            </div>

                                            <div className="note-author-container note-common">
                                                <div className="note-icon-container">
                                                    <MdPerson />
                                                </div>
                                                <p>{user.source}</p>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Notes