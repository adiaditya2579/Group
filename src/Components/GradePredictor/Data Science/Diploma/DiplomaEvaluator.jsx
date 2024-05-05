import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Diploma } from "../../grpred";
import Form from "../../Form";
import MLFoundation from "./MLF";
import MLTechniques from "./MLT";
import MLPractice from "./MLP";
import BusinessDataManagment from "./BDM";
import BusinessAnalytics from "./BusinessAnalytics";
import DSAProgramming from "./PDSA";
import ToolsInDS from "./ToolsInDS";
import DBManagement from "./DBMS";
import AppDev1 from "./AppDev1";
import AppDev2 from "./AppDev2";
import Java from "./Java";
import SystemCommands from "./SystemCommands";

const DiplomaEvaluator = ({ SelectedSubject, setReset }) => {
  const [subjectParameters, setSubjectParameters] = useState("");
  const [TotalScoreF1, setTotalScoreF1] = useState(0);
  const [TotalScoreF2, setTotalScoreF2] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);
  useEffect(() => {
    setSubjectParameters(null);
    setSubmitted(false);
    setTotalScoreF1(0);
    setTotalScoreF2(0);
    const subjectObject = Diploma.find(
      (sub) => sub.Subject === SelectedSubject
    );
    if (subjectObject) {
      setSubjectParameters(subjectObject.Parameters);
    } else {
      console.log("Subject not found");
    }
  }, [SelectedSubject]);

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    let newValue = Math.max(
      0,
      Math.min(parseFloat(value), key === "Bonus" ? 5 : 100)
    );
    setSubjectParameters((prevParams) => ({
      ...prevParams,
      [key]: newValue,
    }));
  };
  return (
    <div className="flex flex-col justify-center w-full items-center p-2 mt-10 gap-4 text-white">
      <h1 className="text-xl font-semibold">{SelectedSubject}</h1>
      <Form
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        TotalScore={TotalScoreF1}
        subjectParameters={subjectParameters}
        setSubmitted={setSubmitted}
        SelectedSubject={SelectedSubject}
        setSubjectParameters={setSubjectParameters}
      />
      {subjectParameters &&
        ((SelectedSubject === "MLF" && (
          <MLFoundation
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            TotalScoreF1={TotalScoreF1}
            setTotalScoreF2={setTotalScoreF2}
            TotalScoreF2={TotalScoreF2}
            setReset={setReset}
          />
        )) ||
          (SelectedSubject === "MLT" && (
            <MLTechniques
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "MLP" && (
            <MLPractice
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "BDM" && (
            <BusinessDataManagment
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "Business Analytics" && (
            <BusinessAnalytics
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "Tools in DS" && (
            <ToolsInDS
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "PDSA" && (
            <DSAProgramming
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "DBMS" && (
            <DBManagement
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "App Dev 1" && (
            <AppDev1
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "App Dev 2" && (
            <AppDev2
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "Java" && (
            <Java
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )) ||
          (SelectedSubject === "System commands" && (
            <SystemCommands
              isSubmitted={isSubmitted}
              subjectParameters={subjectParameters}
              setTotalScoreF1={setTotalScoreF1}
              TotalScoreF1={TotalScoreF1}
              setTotalScoreF2={setTotalScoreF2}
              TotalScoreF2={TotalScoreF2}
              setReset={setReset}
            />
          )))}
    </div>
  );
};

export default DiplomaEvaluator;
