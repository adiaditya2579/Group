import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Data from "../../Data";
import predictedgrade from "../../predictedstore";
const BusinessAnalytics = ({
  subjectParameters,
  setTotalScoreF1,
  isSubmitted,
  TotalScoreF1,
  setReset,
}) => {
  const [Score, setScore] = useState(null);

  const [Predictedgrade, setPredictedgrade] = useState(predictedgrade);
  useEffect(() => {
    const GA1 = parseFloat(subjectParameters["Assignment 1"]);
    const GA2 = parseFloat(subjectParameters["Assignment 2"]);
    const GA3 = parseFloat(subjectParameters["Assignment 3"]);
    const validValues = [GA1, GA2, GA3]
      .filter((value) => !isNaN(value))
      .sort((a, b) => b - a);
    // console.log(validValues);
    const sumBestTwo = validValues.reduce((acc, curr, index) => {
      if (index < 2) {
        return acc + curr;
      }
      return acc;
    }, 0);

    const bestTwo = 0.2 * sumBestTwo;
    setScore(
      (
        0.2 *
        (0.7 *
          Math.max(
            parseFloat(subjectParameters["Quiz 1"]),
            parseFloat(subjectParameters["Quiz 2"])
          ) +
          0.3 *
            Math.min(
              parseFloat(subjectParameters["Quiz 1"]),
              parseFloat(subjectParameters["Quiz 2"])
            ))
      ).toFixed(2)
    );

    setTotalScoreF1(
      parseFloat(Score) +
        parseFloat(bestTwo) +
        parseFloat(subjectParameters.Bonus)
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
  }, [setTotalScoreF1, subjectParameters, TotalScoreF1, Score]);
  return (
    <Data
      isSubmitted={isSubmitted}
      Predictedgrade={Predictedgrade}
      subjectParameters={subjectParameters}
      setReset={setReset}
    />
  );
};
export default BusinessAnalytics;
