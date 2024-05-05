import React, { useState } from "react";
import MyForm from "../../MyForm";
function ESCommonForm() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: "",
    QUIZ2: "",
    GAA: "",
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
      QUIZ2,
      "END TERM":End_Term,
      GAA,
      "BONUS MARKS": bonusmark,
    } = updatedParameters;
    let T =
      0.1 * GAA +
      Math.max(
        0.6 * End_Term + 0.2 * Math.max(QUIZ1, QUIZ2),
        0.4 * End_Term + 0.2 * QUIZ1 + 0.3 * QUIZ2
      );
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

export default ESCommonForm;
