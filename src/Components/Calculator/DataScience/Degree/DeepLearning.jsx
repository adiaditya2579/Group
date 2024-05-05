import React, { useState } from 'react';
import MyForm from '../../MyForm';
MyForm
function DeepLearning() {
    const [inputvalue, setInputvalue] = useState({
        'QUIZ 1': '',
        'QUIZ 2': '',
        GAA: '',
        Bonus: '',
       'END TERM': '',
      });
      const [score, setScore] = useState("");
      let [grade, setgrade] = useState("");
    
      const handlechange = (e) => {
        const { name, value } = e.target;
        let newValue = Math.max(0, Math.min(parseFloat(value), 100));
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
        const {'QUIZ 1':QUIZ1,'QUIZ 2':QUIZ2,'END TERM':END_TERM,GAA,Bonus} = updatedParameters;
        let T = 0.1 * GAA +  Math.max((0.4 * END_TERM + 0.25 * QUIZ1 + 0.25  * QUIZ2), 0.5 * END_TERM +  0.3 * Math.max(QUIZ1,QUIZ2))+ Bonus 
    
        T = Math.min(T, 100);
        let score = parseInt(T)
        setScore(score);
    
        if (score >= 90) {
          setgrade('PASS : S');
        } else if (score >= 80) {
          setgrade('PASS : A');
        } else if ( score >= 70) {
          setgrade('PASS : B');
        } else if ( score >= 60) {
          setgrade('PASS : C');
        } else if (score >= 50) {
          setgrade('PASS : D');
        } else if (score >= 40) {
          setgrade('PASS : E');
        }else{
          setgrade('FAIL')
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
  )
}

export default DeepLearning