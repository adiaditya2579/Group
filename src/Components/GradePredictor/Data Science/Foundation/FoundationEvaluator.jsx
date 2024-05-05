import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { DSFoundation } from "../../grpred";
import PythonScore from "./PythonScore";
import SimilarSubScore from "./SimilarSubScore";
import Form from "../../Form";
const DSFoundationEvaluator = ({ SelectedSubject, setReset }) => {
  const [subjectParameters, setSubjectParameters] = useState("");
  const [IsStatistics2, setStatistics2] = useState(false);
  const [IsStatistics1, setStatistics1] = useState(false);
  const [TotalScoreF1, setTotalScoreF1] = useState(0);
  const [TotalScoreF2, setTotalScoreF2] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
    setTotalScoreF1(0);
    setTotalScoreF2(0);
    const subjectObject = DSFoundation.find(
      (sub) => sub.Subject == SelectedSubject
    );
    if (SelectedSubject == "Statistics 2") {
      setStatistics2(true);
      setStatistics1(false);
    } else if (SelectedSubject == "Statistics 1") {
      setStatistics1(true);
      setStatistics2(false);
    } else {
      setStatistics1(false);
      setStatistics2(false);
    }
    // console.log("subjectObject:", subjectObject);
    if (subjectObject) {
      setSubjectParameters(subjectObject.Parameters);
    } else {
      console.log("Subject not found");
    }
  }, [SelectedSubject]);
  // console.log(subjectParameters);
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    let newValue = Math.max(
      0,
      Math.min(
        parseFloat(value),
        SelectedSubject === "Statistics 1" && key === "Extra Activity"
          ? 5
          : 100,
        SelectedSubject === "Statistics 2" && key === "Extra Activity"
          ? 10
          : 100,
        key === "Bonus" ? 5 : 100
      )
    );
    setSubjectParameters((prevParams) => ({
      ...prevParams,
      [key]: newValue,
    }));
  };
  // console.log(subjectParameters);
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
          SelectedSubject === "Mathematics 1" ||
          SelectedSubject === "Statistics 1" ||
          SelectedSubject === "Computational Thinking" ||
          SelectedSubject === "Mathematics 2" ||
          SelectedSubject === "Statistics 2" ||
          SelectedSubject === "English 2") && (
          <SimilarSubScore
            IsStatistics1={IsStatistics1}
            IsStatistics2={IsStatistics2}
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            setTotalScoreF2={setTotalScoreF2}
            TotalScoreF1={TotalScoreF1}
            TotalScoreF2={TotalScoreF2}
            setReset={setReset}
          />
        )) ||
        (SelectedSubject === "Python" && (
          <PythonScore
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
export default DSFoundationEvaluator;
