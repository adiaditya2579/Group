import PropTypes from "prop-types";
import { analytics } from "../../../firebase-config.js";
import { logEvent } from "firebase/analytics";
const Form = ({
  handleInputChange,
  isSubmitted,
  subjectParameters,
  setSubmitted,
  SelectedSubject,
  setSubjectParameters,
}) => {
  const handlesubmit = () => {
    const updatedParameters = Object.fromEntries(
      Object.entries(subjectParameters).map(([key, value]) => [
        key,
        isNaN(value) || value === "" ? 0 : value,
      ])
    );
    logEvent(analytics, "grade_predicted");
    setSubjectParameters(updatedParameters);
    setSubmitted(true);
  };

  // console.log(subjectParameters);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={
        SelectedSubject && !isSubmitted
          ? "flex flex-col gap-4 justify-center items-center w-[50%] max-lg:w-[90%] border-[1px] border-[#393939] rounded-md p-4"
          : "hidden"
      }
    >
      {subjectParameters &&
        Object.entries(subjectParameters).map(([key, value]) => (
          <div
            key={key}
            className="w-[100%] flex flex-col justify-center items-center "
          >
            <label className="text-[#848282] max-md:hidden" htmlFor={key}>
              {key}
            </label>
            <input
              name={key}
              value={value}
              onChange={(e) => handleInputChange(e, key)}
              onKeyPress={(e) => {
                const charCode = e.which ? e.which : e.keyCode;
                if (
                  charCode !== 46 &&
                  charCode > 31 &&
                  (charCode < 48 || charCode > 57)
                ) {
                  e.preventDefault();
                }
              }}
              className="bg-inherit rounded-md p-2 w-[60%] max-md:w-[100%] outline-none border-b-[1px] border-[#393939]"
              type="number"
              placeholder={`${key} Score`}
            />
          </div>
        ))}
      <button
        type="submit"
        onClick={handlesubmit}
        className="bg-purple-800 p-2 pr-4 pl-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
