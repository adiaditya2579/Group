import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Data from "../../Data";
import predictedgrade from "../../predictedstore";
const PythonScore = ({
  subjectParameters,
  setTotalScoreF1,
  isSubmitted,
  TotalScoreF1,
  setReset,
}) => {
  const [Predictedgrade, setPredictedgrade] = useState(predictedgrade);
  useEffect(() => {
    setTotalScoreF1(
      (
        0.1 * parseFloat(subjectParameters["Quiz 1"]) +
        0.15 *
          Math.min(
            parseFloat(subjectParameters["OPPE 1"]),
            parseFloat(subjectParameters["OPPE 2"])
          ) +
        0.25 *
          Math.max(
            parseFloat(subjectParameters["OPPE 1"]),
            parseFloat(subjectParameters["OPPE 2"])
          ) +
        0.1 * parseFloat(subjectParameters["Graded Assignments"]) +
        0.05 * parseFloat(subjectParameters.WTA) +
        parseFloat(subjectParameters.Bonus)
      ).toFixed(2)
    );
    const calculateGrade = (score, base) => {
      if (score > base) return "Unviable";
      return parseInt(Math.ceil((score / base) * 100));
    };
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

    const Pass = () => {
      if (PassF1 == "Unviable") {
        return "Unviable";
      } else return PassGF1;
    };
    const DGrade = () => {
      if (DF1 == "Unviable") {
        return "Unviable";
      } else if (DF1 != "Unviable") {
        return DGF1;
      }
    };
    const CGrade = () => {
      if (CF1 == "Unviable") {
        return "Unviable";
      } else if (CF1 != "Unviable") {
        return CGF1;
      }
    };
    const BGrade = () => {
      if (BF1 == "Unviable") {
        return "Unviable";
      } else if (BF1 != "Unviable") {
        return BGF1;
      }
    };
    const AGrade = () => {
      if (AF1 == "Unviable") {
        return "Unviable";
      } else if (AF1 != "Unviable") {
        return AGF1;
      }
    };
    const SGrade = () => {
      if (SF1 == "Unviable") {
        return "Unviable";
      } else if (SF1 != "Unviable") {
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
  }, [setTotalScoreF1, subjectParameters, TotalScoreF1]);

  return (
    <Data
      isSubmitted={isSubmitted}
      Predictedgrade={Predictedgrade}
      subjectParameters={subjectParameters}
      setReset={setReset}
    />
  );
};

export default PythonScore;
