import React, { useState, useEffect } from "react";
import { MdCalculate } from "react-icons/md";
import StatisticsOne from "./DataScience/Foundation/StatisticsOne";
import StatisticsTwo from "./DataScience/Foundation/StatisticsTwo";
import CommonForm from "./DataScience/Foundation/CommonForm";
import PythonForm from "./DataScience/Foundation/PythonForm";
import MachineLearningFoundations from "./DataScience/Diploma/MachineLearningFoundations";
import MachineLearningTechniques from "./DataScience/Diploma/MachineLearningTechniques";
import MachineLearningPractice from "./DataScience/Diploma/MachineLearningPractice";
import ToolsInDataScience from "./DataScience/Diploma/ToolsInDataScience";
import PythonPDSA from "./DataScience/Diploma/PythonPDSA";
import DBMS from "./DataScience/Diploma/DBMS";
import Applicationdevelopmentone from "./DataScience/Diploma/Applicationdevelopmentone";
import ProgrammingUsingJava from "./DataScience/Diploma/ProgrammingUsingJava";
import SystemCommands from "./DataScience/Diploma/SystemCommands";
import ApplicationDevelopmenttwo from "./DataScience/Diploma/ApplicationDevelopmenttwo";
import ESCommonForm from "./Electronic Systems/Foundation/ESCommonForm";
import IntroductionC from "./Electronic Systems/Foundation/IntroductionC";
import IntroductionLinux from "./Electronic Systems/Foundation/IntroductionLinux";
import ElectronicsLab from "./Electronic Systems/Foundation/ElectronicsLab";
import SoftwareTesting from "./DataScience/Degree/SoftwareTesting";
import SoftwareEngineering from "./DataScience/Degree/SoftwareEngineering";
import DeepLearning from "./DataScience/Degree/DeepLearning";
import SearchMethods from "./DataScience/Degree/SearchMethods";
import Message from "./Message";
import BusinessDatamanagement from "./DataScience/Diploma/BusinessDatamanagement";
import BusinessAnalytics from "./DataScience/Diploma/BusinessAnalytics";
import ProfessionalGrowth from "./DataScience/Degree/ProfessionalGrowth";
import DTDD from "./DataScience/Degree/DTDD";
import MarketResearch from "./DataScience/Degree/MarketResearch";
import PSOS from "./DataScience/Degree/PSOS";
import StatisticalComputing from "./DataScience/Degree/StatisticalComputing";
import IntroductionBigData from "./DataScience/Degree/IntroductionBigData";
import DataVisualization from "./DataScience/Degree/DataVisualization";
import ComputerSystemDesign from "./DataScience/Degree/ComputerSystemDesign";
import ProgrammingC from "./DataScience/Degree/ProgrammingC";
import DLFCV from "./DataScience/Degree/DLFCV";
import LargeLanguageModels from "./DataScience/Degree/LargeLanguageModels";
function Calculator() {
  // State variables
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  let [result, setResult] = useState(" ");
  // Example options
  const courseOptions = [
    { value: "datascience", label: "Data Science" },
    { value: "electronic", label: "Electronic Systems" },
  ];

  const levelOptions = [
    { value: "foundation", label: "Foundation" },
    { value: "diploma", label: "Diploma" },
    { value: "degree", label: "Degree" },
  ];
  const levelOptionsES = [
    { value: "foundation", label: "Foundation" },
  ];
  const subjectOptions = {
    datascience: {
      foundation: [
        { value: "python", label: "Python" },
        { value: "ct", label: "CT" },
        { value: "math-I", label: "Maths 1" },
        { value: "math-II", label: "Maths 2" },
        { value: "English-I", label: "English 1" },
        { value: "English-II", label: "English 2" },
        { value: "Statistics-I", label: "Stats 1" },
        { value: "Statistics-II", label: "Stats 2" },
      ],
      diploma: [
        { value: "mlf", label: "MLF" },
        { value: "mlt", label: "MLT" },
        { value: "mlp", label: "MLP" },
        { value: "bdm", label: "BDM" },
        { value: "ba", label: "BA" },
        { value: "tds", label: "TDS" },
        { value: "pdsa", label: "PDSA" },
        { value: "dbms", label: "DBMS" },
        { value: "ad", label: "MAD 1" },
        { value: "puj", label: "Java" },
        { value: "sc", label: "SC" },
        { value: "ad2", label: "MAD 2" },
      ],
      degree: [
        { value: "SoftwareTesting", label: "Software Testing" },
        { value: "SoftwareEngineering", label: "Software Engineering" },
        { value: "DeepLearning", label: "Deep Learning" },
        { value: "SearchMethods", label: "AI" },
        { value: "ProfessionalGrowth", label: "SPG" },
        { value: "DataVisualization ", label: "Data Visualization" },
        { value: "DTDD", label: "Design Thinking" },
        { value: "MarketResearch", label: "Market Research" },
        { value: "IntroductionBigData", label: "Intro to Big Data" },
        { value: "PSOS", label: "PSOSM" },
        { value: "StatisticalComputing", label: "Statistical Computing" },
        { value: "ComputerSystemDesign", label: "Computer System Design" },
        { value: "OperatingSystems", label: "Operating Systems" },
        { value: "ProgrammingC", label: "Programming in C" },
        { value: "DLFCV", label: "Deep Learning for CV" },
        { value: "LargeLanguageModels", label: "Large Language Models " },
        { value: "ManagerialEconomics", label: "Managerial Economics" },
        { value: "BBB", label: "Big Data & Biological" },
      ],
    },
    electronic: {
      foundation: [
        { value: "English I", label: "English 1" },
        { value: "Mathematics", label: "MathS 1" },
        { value: "Electronic System", label: "ESTC" },
        { value: "IntroductionC", label: "Intro C" },
        { value: "English II", label: "English 2" },
        { value: "IntroductionLinux", label: "Intro to Linux " },
        { value: "DigitalSystems", label: "BDS" },
        {
          value: "ElectronicCircuits",
          label: "EEC",
        },
        { value: "ElectronicsLab", label: "Electronics Lab" },
      ],
      
    },
  };
  // Function to handle course selection
  const handleCourseChange = (selectedCourse) => {
    setSelectedCourse(selectedCourse);
    setSelectedLevel(null); 
    setSelectedSubject(null);
  };

  // Function to handle level selection
  const handleLevelChange = (selectedLevel) => {
    setSelectedLevel(selectedLevel);
    setSelectedSubject(null); // Reset selected subject when level changes
  };

  // Function to handle subject selection
  const handleSubjectChange = (selectedSubject) => {
    setSelectedSubject(selectedSubject);
  };
  const handelmessage = () => {
    if (
      (selectedCourse === "electronic" && selectedLevel === "diploma") ||
      selectedLevel === "degree"
    ) {
      setResult(<Message />);
    } else {
      setResult(null); // Clear the result if the conditions are not met
    }
  };
  useEffect(() => {
    handelmessage();
  }, [selectedCourse, selectedLevel]);
  useEffect(() => {
    if (selectedSubject === "math-I") {
      setResult(<CommonForm />);
    } else if (selectedSubject === "math-II") {
      setResult(<CommonForm />);
    } else if (selectedSubject === "English-I") {
      setResult(<CommonForm />);
    } else if (selectedSubject === "English-II") {
      setResult(<CommonForm />);
    } else if (selectedSubject === "ct") {
      setResult(<CommonForm />);
    } else if (selectedSubject === "python") {
      setResult(<PythonForm />);
    } else if (selectedSubject === "Statistics-II") {
      setResult(<StatisticsTwo />);
    } else if (selectedSubject === "Statistics-I") {
      setResult(<StatisticsOne />);
    }
  }, [selectedSubject]);

  useEffect(() => {
    if (selectedSubject === "mlf") {
      setResult(<MachineLearningFoundations />);
    } else if (selectedSubject === "mlt") {
      setResult(<MachineLearningTechniques />);
    } else if (selectedSubject === "mlp") {
      setResult(<MachineLearningPractice />);
    } else if (selectedSubject === "bdm") {
      setResult(<BusinessDatamanagement />);
    } else if (selectedSubject === "ba") {
      setResult(<BusinessAnalytics />);
    } else if (selectedSubject === "tds") {
      setResult(<ToolsInDataScience />);
    } else if (selectedSubject === "pdsa") {
      setResult(<PythonPDSA />);
    } else if (selectedSubject === "dbms") {
      setResult(<DBMS />);
    } else if (selectedSubject === "ad") {
      setResult(<Applicationdevelopmentone />);
    } else if (selectedSubject === "puj") {
      setResult(<ProgrammingUsingJava />);
    } else if (selectedSubject === "sc") {
      setResult(<SystemCommands />);
    } else if (selectedSubject === "ad2") {
      setResult(<ApplicationDevelopmenttwo />);
    }
  }, [selectedSubject]);

  useEffect(() => {
    if (selectedSubject === "SoftwareTesting") {
      setResult(<SoftwareTesting />);
    } else if (selectedSubject === "SoftwareEngineering") {
      setResult(<SoftwareEngineering />);
    } else if (selectedSubject === "DeepLearning") {
      setResult(<DeepLearning />);
    } else if (selectedSubject === "SearchMethods") {
      setResult(<SearchMethods />);
    } else if (selectedSubject === "ProfessionalGrowth") {
      setResult(<ProfessionalGrowth />);
    } else if (selectedSubject === "DataVisualization") {
      setResult(<DataVisualization />);
    } else if (selectedSubject === "DTDD") {
      setResult(<DTDD />);
    } else if (selectedSubject === "MarketResearch") {
      setResult(<MarketResearch />);
    } else if (selectedSubject === "IntroductionBigData") {
      setResult(<IntroductionBigData />);
    } else if (selectedSubject === "PSOS") {
      setResult(<PSOS />);
    } else if (selectedSubject === "StatisticalComputing") {
      setResult(<StatisticalComputing />);
    } else if (selectedSubject === "ComputerSystemDesign") {
      setResult(<ComputerSystemDesign />);
    } else if (selectedSubject === "OperatingSystems") {
      setResult(<StatisticalComputing />);
    } else if (selectedSubject === "ProgrammingC") {
      setResult(<ProgrammingC />);
    } else if (selectedSubject === "DLFCV") {
      setResult(<DLFCV />);
    } else if (selectedSubject === "LargeLanguageModels") {
      setResult(<LargeLanguageModels />);
    } else if (selectedSubject === "ManagerialEconomics") {
      setResult(<DLFCV />);
    } else if (selectedSubject === "BBB") {
      setResult(<DLFCV />);
    }
  }, [selectedSubject]);

  useEffect(() => {
    if (selectedSubject === "English I") {
      setResult(<ESCommonForm />);
    } else if (selectedSubject === "Mathematics") {
      setResult(<ESCommonForm />);
    } else if (selectedSubject === "Electronic System") {
      setResult(<ESCommonForm />);
    } else if (selectedSubject === "IntroductionC") {
      setResult(<IntroductionC />);
    } else if (selectedSubject === "English II") {
      setResult(<ESCommonForm />);
    } else if (selectedSubject === "IntroductionLinux") {
      setResult(<IntroductionLinux />);
    } else if (selectedSubject === "DigitalSystems") {
      setResult(<ESCommonForm />);
    } else if (selectedSubject === "ElectronicCircuits") {
      setResult(<ESCommonForm />);
    } else if (selectedSubject === "ElectronicsLab") {
      setResult(<ElectronicsLab />);
    }
  }, [selectedSubject]);

  return (
    <div className=" h-screen w-full bg-[#27272B]">
      <div className="min-h-[10vh] md:flex justify-between md:flex-wrap border-b-[1px] border-[#393939] px-[5%] py-2">
        <div className="flex justify-center items-center gap-2 text-2xl font-semibold text-white">
          <MdCalculate />
          <span className="text-2xl font-bold ">Grade Calculator</span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <select
            className=" bg-[#393939] p-2 my-2 text-white outline-none rounded-md w-[240px]"
            value={selectedCourse}
            onChange={(e) => handleCourseChange(e.target.value)}
          >
            <option value="">Select Course</option>
            {courseOptions.map((course) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
          {/* Level dropdown (displayed when a course is selected) */}
          {selectedCourse === "datascience" && (
            <select
              className=" bg-[#393939] p-2 md:mx-2  text-white outline-none rounded-md w-[240px]"
              value={selectedLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
            >
              <option value="">Select Level</option>
              {levelOptions.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          )}
          {selectedCourse === "electronic" && (
            <select
              className=" bg-[#393939] p-2 md:mx-2  text-white outline-none rounded-md w-[240px]"
              value={selectedLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
            >
              <option value="">Select Level</option>
              {levelOptionsES.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          )}
          {/* Subject dropdown (displayed when both course and level are selected) */}
          {selectedCourse && selectedLevel && (
            <select
              className=" bg-[#393939] p-2 my-2 text-white outline-none rounded-md w-[240px]"
              value={selectedSubject}
              onChange={(e) => handleSubjectChange(e.target.value)}
            >
              <option value="">Select Subject</option>
              {subjectOptions[selectedCourse][selectedLevel].map((subject) => (
                <option key={subject.value} value={subject.value}>
                  {subject.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      {/* Result (displayed when a subject is selected) */}
      {selectedSubject && <div>{result}</div>}
      {!selectedCourse && (
        <div className="text-white p-2 text-center max-sm:text-sm min-h-[70vh] flex flex-col gap-4 justify-center items-center">
          <span>Note: Enter values out of 100</span>
          <span>Bonus: Out Of 5</span>
          <span>Extra Activity For Stats 1: Out of 5 (BS Degree)</span>
          <span>Extra Activity For Stats 2: Out of 10 (BS Degree)</span>
        </div>
      )}
    </div>
  );
}

export default Calculator;
