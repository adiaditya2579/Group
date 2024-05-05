import React, { useState } from "react";
import MyForm from "../../MyForm";
function ToolsInDataScience() {
  const [inputvalue, setInputvalue] = useState({
    "P1 MARKS": "",
    "P2 MARKS": "",
    GAA: "",
    ROE1: "",
    "BONUS MARKS": "",
    "END TERM": "",
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
      "P1 MARKS": P_MARK1,
      "P2 MARKS": P_MARK2,
      "END TERM":END_TERM,
      GAA,
      ROE1,
      "BONUS MARKS": bonusmark,
    } = updatedParameters;
    let T =
      0.1 * GAA + 0.2 * ROE1 + 0.2 * P_MARK1 + 0.2 * P_MARK2 + 0.3 * END_TERM;
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
    <>
      <MyForm
        inputvalue={inputvalue}
        score={score}
        grade={grade}
        handlescore={handlescore}
        handlechange={handlechange}
      />
    </>
  );
}

export default ToolsInDataScience;
