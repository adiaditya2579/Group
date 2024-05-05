import { logEvent } from "firebase/analytics";
import { analytics } from "../../../firebase-config.js";
import React from "react";

function MyForm({ inputvalue, score, grade, handlescore, handlechange }) {
  const handleButtonClick = () => {
    handlescore();
    logEvent(analytics, "calc");
  };
  return (
    <div className=" bg-[#27272b] h-fit w-full flex justify-center">
      <div className=" w-full flex flex-col items-center bg-[#27272b] rounded-md">
        <div className="w-[50%] max-md:w-[90%] mt-8 border-[1px] border-[#393939] rounded-md p-4 mb-8 max-md:p-2">
          {Object.entries(inputvalue).map(([key, value]) => (
            <div
              key={key}
              className="w-[100%] flex gap-4 px-4 py-2 max-md:px-2"
            >
              <label
                htmlFor={key}
                className="mt-2 w-[30%] text-white font-bold text-md max-md:hidden"
              >
                {key}
              </label>
              <input
                className="bg-inherit rounded-md p-2 w-[70%] max-md:mb-4 max-md:w-[100%] outline-none border-[1px] text-white border-white"
                type="number"
                name={key}
                placeholder={`${key} Score`}
                value={value}
                onChange={handlechange}
                onKeyPress={(e) => {
                  const charCode = e.which ? e.which : e.keyCode;
                  if (
                    charCode !== 46 &&
                    charCode > 31 &&
                    (charCode < 48 || charCode > 57)
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          ))}
          <div>
            <div className=" flex justify-center mt-4 bg-[27272b]">
              <button
                onClick={handleButtonClick}
                className="bg-purple-800 px-4 py-2 my-2 text-white rounded-full"
              >
                Submit
              </button>
            </div>
            <div className=" flex font-bold gap-7 mb-2 mt-2 px-2 bg-[27272b]">
              <h1 className="text-white">Final Score: </h1>
              <div className={score < 40 ? "text-red-600" : "text-green-600"}>
                {score}
              </div>
            </div>
            <div className=" flex font-bold gap-6 px-2 bg-[27272b]">
              <h1 className="text-white">Grade:</h1>
              <div
                className={grade === "FAIL" ? "text-red-600" : "text-green-600"}
              >
                {grade}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
