import React, { useState, useEffect } from "react";
import { TiGroup } from "react-icons/ti";
import DSFoundation from "./FoundationForm";
import DSDegree from "./DegreeForm";
import DSDeploma from "./DeplomaForm";
import { Groups } from "./Data";

function DSHomePage() {
  // const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [result, setResult] = useState(null);

  const levelOptions = {
    DS: [
      { value: "foundation", label: "Foundation" },
      { value: "diploma", label: "Diploma" },
      { value: "degree", label: "Degree" },
    ],
  };

  // const handleSubjectSelection = (selectedSubjects) => {
  //   setSelectedSubjects(selectedSubjects);
  // };
  // const filteredGroups = Groups.filter((group) =>
  //   selectedSubjects.includes(group.groupname)
  // );

  const handleLevelChange = (selectedLevel) => {
    setSelectedLevel(selectedLevel);
    setResult("");
  };

  const handleClose = () => {
    setResult("");
  };

  useEffect(() => {
    if (selectedLevel === "foundation") {
      setResult(<DSFoundation onClose={handleClose} />);
    } else if (selectedLevel === "diploma") {
      setResult(<DSDeploma onClose={handleClose} />);
    } else if (selectedLevel === "degree") {
      setResult(<DSDegree onClose={handleClose} />);
    }
  }, [, selectedLevel]);

  const editSubject = () => {
    if (selectedLevel === "foundation") {
      setResult(<DSFoundation onClose={handleClose} />);
    }
    if (selectedLevel === "diploma") {
      setResult(<DSDeploma onClose={handleClose} />);
    }
    if (selectedLevel === "degree") {
      setResult(<DSDegree onClose={handleClose} />);
    }
  };
  const GroupHandal = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      <div className="bg-[#27272B]">
        <div className="min-h-[10vh] md:flex justify-between md:flex-wrap border-b-[1px] border-[#393939] px-[5%] py-2">
          <div className="flex justify-center items-center gap-2 text-2xl font-semibold text-white">
            <TiGroup />
            <span className="text-2xl font-bold">Groups</span>
          </div>
          <div className="flex flex-col gap-2 md:flex-row justify-center items-center">
            <select
              className="bg-[#393939] p-2 my-2 text-white outline-none rounded-md w-[240px]"
              value={selectedLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
            >
              <option value="">Select Level</option>
              {levelOptions.DS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={editSubject}
          className="mt-4 mr-16 md:mr-20 right-0 absolute px-3 py-1 rounded-full bg-white"
        >
          Edit Subject
        </button>
        <div className="absolute z-20">{result}</div>
      </div>
      <div className=" h-screen w-screen bg-[#27272B] flex flex-col">
        <div className="flex flex-wrap gap-4 sm:gap-20  py-16 justify-center ">
          {Groups.map((Group, index) => (
            <div key={index}>
              <div className=" md:h-[250px] h-[220px] md:w-[180px] w-[152px] border-2 rounded-xl relative">
                <div className=" md:h-32 h-28 md:w-32 w-28 mt-5 bg-white rounded-xl overflow-hidden absolute left-[50%] -translate-x-[50%]">
                  <img
                    className=" w-full h-full object-cover"
                    src={Group.profile}
                  />
                </div>
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
                  <h1 className=" md:pt-36 pt-32 text-white text-sm font-bold">
                    {Group.groupname}
                  </h1>
                  <button
                    className=" bg-white w-[100px] mt-2  px-3 py-1 rounded-full  font-semibold  hover:text-black hover:border-2 hover:border-black"
                    onClick={() => GroupHandal(Group.url)}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
      
    </div>
  );
}

export default DSHomePage;
