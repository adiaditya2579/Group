import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

function DSDegree({ onClose, onSubmit, sendDatatoHomePage }) {
  const [subjects, setSubjects] = useState({
    'Software Test': false,
    'Software Engineering': false,
    'Deep Learning': false,
    'AI': false,
    'SPG':false,
    'Data Visualization': false,
    'Design Thinking':false,
    'Market Research': false,
    'Intro to Big Data': false,
    'PSOSM': false,
    'Statistical Computing': false,
    'Computer System Design': false,
  });
  const toggleCheckbox = (subject) => {
    const selectedSubjectsCount = Object.values(subjects).filter(Boolean).length;

    if (subjects[subject] || selectedSubjectsCount < 4) {
        setSubjects({
            ...subjects,
            [subject]: !subjects[subject]
        });
    } else {
        // Find the first selected subject and deselect it
        const firstSelectedSubject = Object.keys(subjects).find((subj) => subjects[subj]);
        if (firstSelectedSubject) {
            setSubjects({
                ...subjects,
                [firstSelectedSubject]: false,
                [subject]: !subjects[subject]
            });
        }
    }
  };
  const selectedSubjects = ()=>{
    const selectedSubjects = Object.keys(subjects).filter((subject) => subjects[subject]);
    onSubmit = { selectedSubjects };
    sendDatatoHomePage(selectedSubjects);
    // alert(selectedSubjects);
    onClose();
  }
  return (
    <div>
      <div className=' w-screen h-screen fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className=" bg-[#6d28d9] h-[540px] w-[300px] rounded-xl flex flex-col items-center ">
        <h1 className=' h-[10%] w-[100%] text-xl relative top-6 left-64 cursor-pointer 'onClick={onClose}><RxCross2 /></h1>
        <h2 className=' mt-4 text-white text-xl'>Select Subjects</h2>
        <ul className=" flex mt-4 flex-col gap-[2px] text-lg -translate-x-[5%] ">
            {Object.keys(subjects).map((subject) => (
                <li key={subject} className="subject-item">
                    <input 
                        className='mx-2'
                        type="checkbox"
                        id={subject}
                        checked={subjects[subject]}
                        onChange={() => toggleCheckbox(subject)}
                    />
                    <label htmlFor={subject} className=" text-white">{subject}</label>
                </li>
            ))}
        </ul>
        <button onClick={selectedSubjects} className='px-3 py-1 mt-4 rounded-full bg-white'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default DSDegree