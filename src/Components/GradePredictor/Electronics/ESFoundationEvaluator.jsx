import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ESFoundation } from "../grpred";
import SimilarSubES from "./ESFoundation/SimilarSubES";
import ProgrammingInC from "./ESFoundation/ProgrammingInC";
import ESTCircuits from "./ESFoundation/ESTC";
import Linux from "./ESFoundation/Linux";
import ELab from "./ESFoundation/ELab";
import Form from "../Form";

const ESFoundationEvaluator = ({ SelectedSubject, setReset }) => {
  const [subjectParameters, setSubjectParameters] = useState("");
  const [TotalScoreF1, setTotalScoreF1] = useState(0);
  const [TotalScoreF2, setTotalScoreF2] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
    setTotalScoreF1(0);
    setTotalScoreF2(0);
    const subjectObject = ESFoundation.find(
      (sub) => sub.Subject === SelectedSubject
    );
    // console.log("subjectObject:", subjectObject);
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
    <div className="flex flex-col justify-center w-full items-center p-4 mt-10 gap-4 text-white">
      <h1 className="text-xl font-semibold">{SelectedSubject}</h1>
      <Form
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        subjectParameters={subjectParameters}
        setSubmitted={setSubmitted}
        SelectedSubject={SelectedSubject}
        setSubjectParameters={setSubjectParameters}
      />
      {(subjectParameters &&
        (SelectedSubject === "English 1" ||
          SelectedSubject === "Math 1" ||
          SelectedSubject === "English 2" ||
          SelectedSubject === "Digital Systems" ||
          SelectedSubject === "Electrical & Electronic Circuit") && (
          <SimilarSubES
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            setTotalScoreF2={setTotalScoreF2}
            TotalScoreF1={TotalScoreF1}
            TotalScoreF2={TotalScoreF2}
            setReset={setReset}
          />
        )) ||
        (SelectedSubject === "C Programming" && (
          <ProgrammingInC
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            setTotalScoreF2={setTotalScoreF2}
            TotalScoreF1={TotalScoreF1}
            TotalScoreF2={TotalScoreF2}
            setReset={setReset}
          />
        )) ||
        (SelectedSubject === "ES Thinking & Circuits" && (
          <ESTCircuits
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            setTotalScoreF2={setTotalScoreF2}
            TotalScoreF1={TotalScoreF1}
            TotalScoreF2={TotalScoreF2}
            setReset={setReset}
          />
        )) ||
        (SelectedSubject === "Linux" && (
          <Linux
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            TotalScoreF1={TotalScoreF1}
            setReset={setReset}
          />
        )) ||
        (SelectedSubject === "Electronic Lab" && (
          <ELab
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            TotalScoreF1={TotalScoreF1}
            setReset={setReset}
          />
        ))}
    </div>
  );
};
export default ESFoundationEvaluator;
