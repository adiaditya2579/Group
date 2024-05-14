import React, { useEffect, useState } from 'react';
import { TiGroup } from "react-icons/ti";
import Card from './Card';
import ESdata from './ESdata';

const Qualifier = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [result,setResult] = useState(null)
  const CourseOption = {
    option: [
      { value: "datascience", label: "Data Science" },
      { value: "electronics", label: "Electronic Systems" },
    ],
  };const handleCourseChange = (selectedCourse) => {
    setSelectedCourse(selectedCourse);
  };

  useEffect(()=>{
    if(selectedCourse === 'datascience'){
      setResult(<Card/>)
    }if(selectedCourse === 'electronics'){
      setResult(<ESdata/>)
    }
  })

  return(
    <div>
      <div className="min-h-[10vh] bg-[#27272B] md:flex justify-between md:flex-wrap border-b-[1px] border-[#393939] px-[5%] py-2">
      <div className="flex justify-center items-center gap-2 text-2xl font-semibold text-white">
        <TiGroup />
        <span className="text-2xl font-bold">Groups</span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-center items-center">
        <select
          className="bg-[#393939] p-2 my-2 text-white outline-none rounded-md w-[240px]"
          value={selectedCourse}
          onChange={(e) => handleCourseChange(e.target.value)}
        >
          <option value="">Select Course</option>
          {CourseOption.option.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </div>
      
      </div>

      <div className=' absolute z-40'>{result}</div>
    
    </div>
  )
}
  
export default Qualifier;

  

 
