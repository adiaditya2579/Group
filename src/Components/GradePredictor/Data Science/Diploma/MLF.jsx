import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Data from "../../Data";
import predictedgrade from "../../predictedstore";
const MLFoundation = ({
  subjectParameters,
  setTotalScoreF1,
  TotalScoreF1,
  setTotalScoreF2,
  TotalScoreF2,
  isSubmitted,
  setReset,
}) => {
  // console.log(subjectParameters);
  const [Score1, setScore1] = useState(null);
  const [Score2, setScore2] = useState(null);
  const [Predictedgrade, setPredictedgrade] = useState(predictedgrade);
  useEffect(() => {
    setScore1(
      0.2 * parseFloat(subjectParameters["Quiz 1"]) +
        0.3 * parseFloat(subjectParameters["Quiz 2"])
    );
    setScore2(
      0.2 *
        Math.max(
          parseFloat(subjectParameters["Quiz 1"]),
          parseFloat(subjectParameters["Quiz 2"])
        )
    );

    setTotalScoreF1(
      (
        0.1 * parseFloat(subjectParameters["Graded Assignments"]) +
        Score1 +
        parseFloat(subjectParameters.Bonus)
      ).toFixed(2)
    );
    setTotalScoreF2(
      (
        0.1 * parseFloat(subjectParameters["Graded Assignments"]) +
        Score2 +
        parseFloat(subjectParameters.Bonus)
      ).toFixed(2)
    );

    const calculateGrade = (score, base) => {
      if (score > base) return "Unviable";
      return parseInt(Math.ceil((score / base) * 100));
    };

    //1st Formula
    const PassF1 = calculateGrade(
      40 - (TotalScoreF1 - subjectParameters.Bonus),
      40
    );
    const PassGF1 =
      calculateGrade(40 - (TotalScoreF1 - subjectParameters.Bonus), 40) > 0
        ? calculateGrade(40 - (TotalScoreF1 - subjectParameters.Bonus), 40)
        : "Already";

    const DF1 = calculateGrade(50 - TotalScoreF1, 40);
    const DGF1 =
      calculateGrade(50 - TotalScoreF1, 40) > 0
        ? calculateGrade(50 - TotalScoreF1, 40)
        : "Already";

    const CF1 = calculateGrade(60 - TotalScoreF1, 40);
    const CGF1 =
      calculateGrade(60 - TotalScoreF1, 40) > 0
        ? calculateGrade(60 - TotalScoreF1, 40)
        : "Already";

    const BF1 = calculateGrade(70 - TotalScoreF1, 40);
    const BGF1 =
      calculateGrade(70 - TotalScoreF1, 40) > 0
        ? calculateGrade(70 - TotalScoreF1, 40)
        : "Already";

    const AF1 = calculateGrade(80 - TotalScoreF1, 40);
    const AGF1 =
      calculateGrade(80 - TotalScoreF1, 40) > 0
        ? calculateGrade(80 - TotalScoreF1, 40)
        : "Already";

    const SF1 = calculateGrade(90 - TotalScoreF1, 40);
    const SGF1 =
      calculateGrade(90 - TotalScoreF1, 40) > 0
        ? calculateGrade(90 - TotalScoreF1, 40)
        : "Already";
        
    //2nd Formula
    const PassF2 = calculateGrade(
      40 - (TotalScoreF2 - subjectParameters.Bonus),
      60
    );
    const PassGF2 =
      calculateGrade(40 - (TotalScoreF2 - subjectParameters.Bonus), 60) > 0
        ? calculateGrade(40 - (TotalScoreF2 - subjectParameters.Bonus), 60)
        : "Already";

    const DF2 = calculateGrade(50 - TotalScoreF2, 60);
    const DGF2 =
      calculateGrade(50 - TotalScoreF2, 60) > 0
        ? calculateGrade(50 - TotalScoreF2, 60)
        : "Already";

    const CF2 = calculateGrade(60 - TotalScoreF2, 60);
    const CGF2 =
      calculateGrade(60 - TotalScoreF2, 60) > 0
        ? calculateGrade(60 - TotalScoreF2, 60)
        : "Already";

    const BF2 = calculateGrade(70 - TotalScoreF2, 60);
    const BGF2 =
      calculateGrade(70 - TotalScoreF2, 60) > 0
        ? calculateGrade(70 - TotalScoreF2, 60)
        : "Already";

    const AF2 = calculateGrade(80 - TotalScoreF2, 60);
    const AGF2 =
      calculateGrade(80 - TotalScoreF2, 60) > 0
        ? calculateGrade(80 - TotalScoreF2, 60)
        : "Already";

    const SF2 = calculateGrade(90 - TotalScoreF2, 60);
    const SGF2 =
      calculateGrade(90 - TotalScoreF2, 60) > 0
        ? calculateGrade(90 - TotalScoreF2, 60)
        : "Already";
    const Pass = () => {
      if (PassF1 == "Unviable" && PassF2 != "Unviable") {
        return PassGF2;
      } else if (PassF1 != "Unviable" && PassF2 == "Unviable") {
        return PassGF1;
      } else if (PassF1 == "Unviable" && PassF2 == "Unviable") {
        return "Unviable";
      } else if (PassF1 >= PassF2) {
        return PassGF2;
      } else if (PassF1 < PassF2) {
        return PassGF1;
      }
    };
    const DGrade = () => {
      if (DF1 == "Unviable" && DF2 != "Unviable") {
        return DGF2;
      } else if (DF1 != "Unviable" && DF2 == "Unviable") {
        return DGF1;
      } else if (DF1 == "Unviable" && DF2 == "Unviable") {
        return "Unviable";
      } else if (DF1 >= DF2) {
        return DGF2;
      } else if (DF1 < DF2) {
        return DGF1;
      }
    };
    const CGrade = () => {
      if (CF1 == "Unviable" && CF2 != "Unviable") {
        return CGF2;
      } else if (CF1 != "Unviable" && CF2 == "Unviable") {
        return CGF1;
      } else if (CF1 == "Unviable" && CF2 == "Unviable") {
        return "Unviable";
      } else if (CF1 >= CF2) {
        return CGF2;
      } else if (CF1 < CF2) {
        return CGF1;
      }
    };
    const BGrade = () => {
      if (BF1 == "Unviable" && BF2 != "Unviable") {
        return BGF2;
      } else if (BF1 != "Unviable" && BF2 == "Unviable") {
        return BGF1;
      } else if (BF1 == "Unviable" && BF2 == "Unviable") {
        return "Unviable";
      } else if (BF1 >= BF2) {
        return BGF2;
      } else if (BF1 < BF2) {
        return BGF1;
      }
    };
    const AGrade = () => {
      if (AF1 == "Unviable" && AF2 != "Unviable") {
        return AGF2;
      } else if (AF1 != "Unviable" && AF2 == "Unviable") {
        return AGF1;
      } else if (AF1 == "Unviable" && AF2 == "Unviable") {
        return "Unviable";
      } else if (AF1 >= AF2) {
        return AGF2;
      } else if (AF1 < AF2) {
        return AGF1;
      }
    };
    const SGrade = () => {
      if (SF1 == "Unviable" && SF2 != "Unviable") {
        return SGF2;
      } else if (SF1 != "Unviable" && SF2 == "Unviable") {
        return SGF1;
      } else if (SF1 == "Unviable" && SF2 == "Unviable") {
        return "Unviable";
      } else if (SF1 >= SF2) {
        return SGF2;
      } else if (SF1 < SF2) {
        return SGF1;
      }
    };

    setPredictedgrade({
      Pass: Pass(),
      "D Grade": DGrade(),
      "C Grade": CGrade(),
      "B Grade": BGrade(),
      "A Grade": AGrade(),
      "S Grade": SGrade(),
    });
  }, [
    setTotalScoreF1,
    setTotalScoreF2,
    TotalScoreF2,
    subjectParameters,
    TotalScoreF1,
    Score1,
    Score2,
  ]);
  return (
    <Data
      isSubmitted={isSubmitted}
      Predictedgrade={Predictedgrade}
      subjectParameters={subjectParameters}
      setReset={setReset}
    />
  );
};
export default MLFoundation;
