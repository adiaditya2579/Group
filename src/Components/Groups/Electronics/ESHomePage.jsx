import React,{useState} from 'react'
import { TiGroup } from "react-icons/ti";
function ESHomePage() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const levelOptions = {
    DS: [
      { value: "foundation", label: "Foundation" },
      { value: "diploma", label: "Diploma" },
    ],
  };
  return (
    <div>
      <div className="min-h-[10vh] md:flex justify-between md:flex-wrap border-b-[1px] border-[#393939] px-[5%] py-2">
                <div className="flex justify-center items-center gap-2 text-2xl font-semibold text-white">
                  <TiGroup />
                  <span className="text-2xl font-bold">Groups</span>
                </div>
                <div className="flex flex-col gap-2 md:flex-row justify-center items-center">
                  <select
                    className="bg-[#393939] p-2 my-2 text-white outline-none rounded-mw-[240px]"
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
    </div>
  )
}

export default ESHomePage