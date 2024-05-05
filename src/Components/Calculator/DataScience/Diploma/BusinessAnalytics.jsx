import React, { useState } from "react";
import MyForm from "../../MyForm";
function BusinessAnalytics() {
  const [inputvalue, setInputvalue] = useState({
    "QUIZ 1": "",
    "QUIZ 2": "",
    "Assignment 1": "",
    "Assignment 2": "",
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
      "END TERM": END_TERM,
      "QUIZ 1": Qz1,
      "QUIZ 2": Qz2,
      "Assignment 1": A1,
      "Assignment 2": A2,
      "BONUS MARKS": bonusmark,
    } = updatedParameters;
    let T =
      0.2 * (0.7 * Math.max(Qz1, Qz2) + 0.3 * Math.min(Qz1, Qz2)) +
      0.2 * A1 +
      0.2 * A2 +
      0.4 * END_TERM;
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
      <h1 className=" p-5 text-yellow-700 flex justify-center items-center font-semibold text-xl">
        Out of Three assignments given, Best Two Assignent will be Assignent 1 &
        2{" "}
      </h1>
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

export default BusinessAnalytics;
