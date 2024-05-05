import { useState, useEffect } from "react";
import { MdGrade } from "react-icons/md";
import {
  degrees,
  DSDegreeEvaluation,
  DSdegree,
  DSFoundation,
  Diploma,
  ESdegree,
  ESFoundation,
} from "./grpred";
import FoundationEvaluator from "./Data Science/Foundation/FoundationEvaluator";
import DiplomaEvaluator from "../GradePredictor/Data Science/Diploma/DiplomaEvaluator";
import ESFoundationEvaluator from "./Electronics/ESFoundationEvaluator";
import DSDegreeEvaluator from "./Data Science/Degree/DegreeEvaluator";
const GradePredictor = () => {
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [SelectedSubject, setSelectedSubject] = useState("");
  const [Reset, setReset] = useState(false);
  const handleDegreeChange = (e) => {
    setSelectedSubject("");
    setSelectedDegree(e.target.value);
  };
  useEffect(() => {
    if (Reset) {
      setSelectedSubject("");
      setReset(false);
    }
  }, [Reset]);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="min-h-[10vh] flex justify-between items-center gap-2 flex-wrap w-full pr-[5%] pl-[5%] pb-2 pt-2 border-b-[1px] border-[#393939] max-[880px]:justify-center">
        <h1 className="text-white flex justify-center items-center gap-2 text-2xl font-semibold">
          <MdGrade />
          <span className="text-2xl font-semibold">Grade Predictor</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <select
            className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
            value={selectedDegree}
            onChange={handleDegreeChange}
          >
            <option value="">Select Degree</option>
            {degrees.map((degree) => (
              <option key={degree.id} value={degree.Degree}>
                {degree.Degree}
              </option>
            ))}
          </select>
          {selectedDegree == "Data Science" && (
            <select
              className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
              value={selectedLevel}
              onChange={(e) => {
                setSelectedSubject(""), setSelectedLevel(e.target.value);
              }}
            >
              <option value="">Select Level</option>
              {DSdegree.map((level) => (
                <option key={level.id} value={level.level}>
                  {level.level}
                </option>
              ))}
            </select>
          )}
          {selectedDegree == "Electronic System" && (
            <select
              className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">Select Level</option>
              {ESdegree.map((level) => (
                <option key={level.id} value={level.level}>
                  {level.level}
                </option>
              ))}
            </select>
          )}
          {selectedDegree === "Data Science" &&
            selectedLevel == "Foundation" && (
              <select
                className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
                value={SelectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">Select Subject</option>
                {DSFoundation.map((Subject) => (
                  <option key={Subject.id} value={Subject.Subject}>
                    {Subject.Subject}
                  </option>
                ))}
              </select>
            )}
          {selectedDegree === "Electronic System" &&
            selectedLevel == "Foundation" && (
              <select
                className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
                value={SelectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">Select Subject</option>
                {ESFoundation.map((Subject) => (
                  <option key={Subject.id} value={Subject.Subject}>
                    {Subject.Subject}
                  </option>
                ))}
              </select>
            )}
          {selectedDegree === "Data Science" && selectedLevel == "Diploma" && (
            <select
              className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
              value={SelectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              {Diploma.map((Subject) => (
                <option key={Subject.id} value={Subject.Subject}>
                  {Subject.Subject}
                </option>
              ))}
            </select>
          )}
          {selectedDegree === "Data Science" && selectedLevel == "Degree" && (
            <select
              className=" bg-[#393939] p-2 pr-4 pl-4 text-white outline-none rounded-md w-[240px]"
              value={SelectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              {DSDegreeEvaluation.map((Subject) => (
                <option key={Subject.id} value={Subject.Subject}>
                  {Subject.Subject}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      {!selectedDegree && (
        <div className="text-white min-h-[70vh] flex flex-col gap-4 justify-center items-center">
          <span>Note: Enter values out of 100</span>
          <span>Bonus: Out Of 5</span>
          <span>Extra Activity For Stats 1: Out of 5 (BS Degree)</span>
          <span>Extra Activity For Stats 2: Out of 10 (BS Degree)</span>
        </div>
      )}
      {selectedDegree === "Data Science" && selectedLevel == "Foundation" && (
        <FoundationEvaluator
          SelectedSubject={SelectedSubject}
          setReset={setReset}
        />
      )}
      {selectedDegree === "Electronic System" &&
        selectedLevel == "Foundation" && (
          <ESFoundationEvaluator
            SelectedSubject={SelectedSubject}
            setReset={setReset}
          />
        )}
      {selectedDegree === "Data Science" && selectedLevel == "Diploma" && (
        <DiplomaEvaluator
          SelectedSubject={SelectedSubject}
          setReset={setReset}
        />
      )}
      {selectedDegree === "Data Science" && selectedLevel == "Degree" && (
        <DSDegreeEvaluator
          SelectedSubject={SelectedSubject}
          setReset={setReset}
        />
      )}
    </div>
  );
};

export default GradePredictor;
