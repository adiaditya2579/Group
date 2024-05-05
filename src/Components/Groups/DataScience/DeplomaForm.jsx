import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
function DSDeploma({onClose}) {
  const [subjects, setSubjects] = useState({
    'MLF': false,
    'MLT': false,
    'MLP': false,
    'BDM': false,
    'BA':false,
    'TDS': false,
    'PDSA':false,
    'DBMS': false,
    'MAD 1': false,
    'Java': false,
    'SC': false,
    'MAD 2': false,
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

  const selectedSubject = ()=>{
    const selectedSubjects = Object.keys(subjects).filter((subject) => subjects[subject]);
    console.log("Selected subjects:", selectedSubjects);
  }
  return (
    <div>
      <div className=' w-screen h-screen fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className=" bg-[#6d28d9] h-[550px] w-[300px] rounded-xl flex flex-col items-center ">
        <h1 className=' h-[10%] w-[100%] text-xl relative top-6 left-60 cursor-pointer 'onClick={onClose}><RxCross2 /></h1>
        <h2 className=' mt-4 text-white text-xl'>Select Subjects</h2>
        <ul className=" flex mt-4 flex-col gap-[2px] text-lg -translate-x-[90%] ">
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
        <button onClick={selectedSubject} className=' px-3 py-1  mt-4 rounded-full bg-white'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default DSDeploma