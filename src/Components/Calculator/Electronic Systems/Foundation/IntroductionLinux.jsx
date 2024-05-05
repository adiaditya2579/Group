import React, { useState } from "react";
import MyForm from "../../MyForm";
function IntroductionLinux() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: "",
    GAA1: "",
    GAA2: "",
    GAA3: "",
    OPPE1: "",
    OPPE2: "",
    VMT: "",
    LAB: "",
    "END TERM": "",
    "BONUS MARKS": "",
  });
  const [score, setScore] = useState("");
  let [grade, setgrade] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    let newValue = Math.max(
      0,
      Math.min(parseFloat(value), name === "BONUS MARKS" ? 5 : 100)
    );
    setInputvalue((inputvalue) => ({
      ...inputvalue,
      [name]: newValue,
    }));
  };

  const handlescore = () => {
    const updatedParameters = Object.fromEntries(
      Object.entries(inputvalue).map(([key, value]) => [
        key,
        isNaN(value) || value === "" ? 0 : value,
      ])
    );
    const {
      QUIZ1,
      "END TERM":End_Term,
      GAA1,
      GAA2,
      GAA3,
      VMT,
      LAB,
      OPPE1,
      OPPE2,
      "BONUS MARKS": bonusmark,
    } = updatedParameters;

    let PART_A =
      0.06 * GAA1 + 0.02 * GAA2 + 0.02 * GAA3 + 0.2 * QUIZ1 + 0.3 * End_Term;

    let PART_B = 0.1 * VMT + 0.55 * LAB + 0.25 * OPPE1 + 0.3 * OPPE2;

    T = PART_A + 0.4 * PART_B;
    if (T >= 40) {
      T += parseInt(bonusmark);
    }

    T = Math.min(T, 100);
    let score = parseInt(T);
    setScore(score);

    if (score >= 90) {
      setgrade("PASS : S");
    } else if (score >= 80) {
      setgrade("PASS : A");
    } else if (score >= 70) {
      setgrade("PASS : B");
    } else if (score >= 60) {
      setgrade("PASS : C");
    } else if (score >= 50) {
      setgrade("PASS : D");
    } else if (score >= 40) {
      setgrade("PASS : E");
    } else {
      setgrade("FAIL");
    }
  };
  return (
    <div>
      <MyForm
        inputvalue={inputvalue}
        score={score}
        grade={grade}
        handlescore={handlescore}
        handlechange={handlechange}
      />
    </div>
  );
}

export default IntroductionLinux;
