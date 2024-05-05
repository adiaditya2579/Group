import React, { useState } from "react";
import MyForm from "../../MyForm";
function BusinessDatamanagement() {
  const [inputvalue, setInputvalue] = useState({
    GAA: "",
    "BONUS MARKS": "",
    "END TERM": "",
  });
  const [score, setScore] = useState("");
  let [grade, setgrade] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    let newValue = Math.max(
      0,
      Math.min(parseFloat(value), name === "BONUS MARKS" ? 10 : 100)
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
      GAA,
      "BONUS MARKS": bonusmark,
    } = updatedParameters;
    let T = 0.7 * GAA + 0.3 * END_TERM;
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
      <h1 className=" p-5 text-yellow-700 flex justify-center items-center font-semibold text-xl">
        Out of 11 assignments given, Average of best 7 will be GAA{" "}
      </h1>
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

export default BusinessDatamanagement;
