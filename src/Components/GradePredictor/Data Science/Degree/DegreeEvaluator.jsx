import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { DSDegreeEvaluation } from "../../grpred";
import DegreePredictor from "./DegreePredictor";
import Form from "../../Form";
import AIDLPredictor from "./AIDLPredictor";
const DSDegreeEvaluator = ({ SelectedSubject, setReset }) => {
  const [subjectParameters, setSubjectParameters] = useState("");
  const [TotalScoreF1, setTotalScoreF1] = useState(0);
  const [TotalScoreF2, setTotalScoreF2] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);
  // console.log(SelectedSubject);
  useEffect(() => {
    setSubjectParameters(null);
    setSubmitted(false);
    setTotalScoreF1(0);
    setTotalScoreF2(0);
    const subjectObject = DSDegreeEvaluation.find(
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
    <div className="flex flex-col justify-center w-full items-center p-4 mt-10 gap-4 text-white">
      <h1 className="text-xl font-semibold">{SelectedSubject}</h1>
      <Form
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        // TotalScore={TotalScore}
        subjectParameters={subjectParameters}
        setSubmitted={setSubmitted}
        SelectedSubject={SelectedSubject}
        setSubjectParameters={setSubjectParameters}
      />
      {subjectParameters &&
        (SelectedSubject === "Software Testing" ||
          SelectedSubject === "Software Engineering" ||
          SelectedSubject === "SPG") && (
          <DegreePredictor
            SelectedSubject={SelectedSubject}
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            TotalScoreF1={TotalScoreF1}
            setReset={setReset}
          />
        )}
      {subjectParameters &&
        (SelectedSubject === "AI" || SelectedSubject === "Deep Learning") && (
          <AIDLPredictor
            SelectedSubject={SelectedSubject}
            isSubmitted={isSubmitted}
            subjectParameters={subjectParameters}
            setTotalScoreF1={setTotalScoreF1}
            setTotalScoreF2={setTotalScoreF2}
            TotalScoreF1={TotalScoreF1}
            TotalScoreF2={TotalScoreF2}
            setReset={setReset}
          />
        )}
    </div>
  );
};

DSDegreeEvaluator.propTypes = {
  SelectedSubject: PropTypes.any.isRequired,
};
export default DSDegreeEvaluator;
