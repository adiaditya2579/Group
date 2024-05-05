import React,{useState} from 'react'
import MyForm from '../../MyForm';
function IntroductionBigData() {
    const [inputvalue, setInputvalue] = useState({
        OPPE: '',
        GAA: '',
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
        const {OPPE,'END TERM':F,GAA} = updatedParameters;
        let T =  0.25* GAA + 0.25* F + 0.5 * OPPE
    
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
      );
}

export default IntroductionBigData