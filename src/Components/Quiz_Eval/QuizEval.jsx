import { React, useState, useEffect } from "react";
import "./QuizEval.css";
import Button from "../Buttons/Button";
import {
  MdUpload,
  MdUploadFile,
  SlCloudUpload ,
  MdCheckCircle,
} from "react-icons/md";
import ss1 from "../../assets/steps/ss1.jpg";
import ss2 from "../../assets/steps/ss2.jpg";
import ss3 from "../../assets/steps/ss3.jpg";
import ss4 from "../../assets/steps/ss4.jpg";
import ss5 from "../../assets/steps/ss5.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { analytics } from "../../../firebase-config.js";
import { logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import ErrorMessage from "./ErrorMessage.jsx";
import Tutorial from "./Tutorial.jsx";
function QuizEval() {
  // env
  const base_url = import.meta.env.VITE_BASE_URL;

  // page title
  document.title = "AceGrade | Quiz Evaluator";

  const [selectedFile, setSelectedFile] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showError, setShowError] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  result && console.log(result);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile == null) {
      alert("Please Select a file to be uploaded.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("response_sheet", selectedFile);

    if (result == null) {
      try {
        const response = await axios.post(`${base_url}/evaluate`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Handle the response here
        if (response.status == 200) {
          console.log("data fetched");
          setResult(response.data);

          // FIREBASE ANALYTICS
          logEvent(analytics, "qe_transcript_upload");
        } else if (response.status == 500) {
          alert("Error Code 500, Please try again later...");
          navigate("/");
        } else if (response.status === 404) {
          console.log(response);
          alert(
            "Result not found. Check if correct question paper and/or response sheet submitted."
          );
        }

        // Handle errors
      } catch (error) {
        setShowError(true);
        // alert("Question Paper not available")
        // alert(error.response.data.message)
        // console.log(error.response.data);
        console.error("Upload FAILED:", error);
      } finally {
        setIsLoading(false);
      }
    } else return;
  };

  return (
    <div className="evaluator-outer-container relative top-0">
      <div className="evaluator-header">
        <h1>
          <span>
            <MdCheckCircle />
          </span>
          Quiz Evaluator
        </h1>
      </div>
      <div className=" my-4 w-full  flex justify-center ">
        <button 
        onClick={() => setShowTutorial(true)} 
        className=" bg-[#6d28d9] rounded-full px-4 py-2 text-white">Click here For Tutorial</button>
      </div>
      {showTutorial && (
        <div className="w-full h-full flex justify-center items-center absolute top-0 bg-[#27272a]">
          <div className="w-[900px] max-lg:w-[760px] max-md:w-[630px] max-sm:w-[500px]  relative">
            <button
              onClick={() => setShowTutorial(false)}
              className="absolute right-0 z-20 -top-4 p-2 font-bold bg-none"
            >
              X
            </button>
            <Tutorial />
          </div>
        </div>
      )}
      <div className="upload-container gap-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          className="file-upload-input-container"
        >
          <input
            type="file"
            id="file"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
          />
          <label htmlFor="file">
            <span>
              <SlCloudUpload/>
            </span>
            Upload Answer Transcript
          </label>
        </motion.div>

        {selectedFile && (
          <p className="selected-file-tag">
            Selected File: {selectedFile.name}
          </p>
        )}

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          className="button-container"
        >
          <div className="submit-btn-container" onClick={handleSubmit}>
            <Button text={"Check Result"} btnClass={"primary"} />
          </div>

          {/* <div className="tutorial-btn-container" onClick={handleSubmit}>
                        <Button text={"Show Tutorial"} btnClass={"secondary"} />
                    </div> */}
        </motion.div>
        <div>
          <p className="text-sm max-sm:text-xs  text-center p-4 text-yellow-400">
            <em className="font-bold text-red-600">Disclaimer:</em> Evaluation will not be
            accurate for non-numeric SA questions in SC, Intro to Linux and some
            degree-level courses. It's recommended to manually check these
            questions. For other courses, if you find discrepancies, reach out
            to the discussion forum for clarification as it may be
            from IITM side.
          </p>
        </div>
      </div>

      {/* <div className="steps-main-container">
                <h1>Tutorial</h1>

                <div className="cards-container">
                    <img src={ss1} alt="" />
                    <img src={ss2} alt="" />
                    <img src={ss3} alt="" />
                    <img src={ss4} alt="" />
                    <img src={ss5} alt="" />
                </div>
            </div> */}

      {isLoading ? (
        <div className="loading-msg">
          <h1>Loading...</h1>
          <p>Please wait while we fetch your result</p>
        </div>
      ) : (
        result && (
          <motion.section
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.1,
            }}
            className="result-main-container"
          >
            <div className="result-header-common">
              <h2>Student Info</h2>
            </div>

            {/* Student deta / Meta Data */}
            <div className="result-metadata-container">
              <ul>
                {result &&
                  Object.entries(result.metadata).map(
                    ([title, data], index) => {
                      return (
                        <li key={index}>
                          <h4>{title}</h4>
                          <p>{data}</p>
                        </li>
                      );
                    }
                  )}
              </ul>
            </div>

            {/* Result Summary */}
            <div className="result-summary-container">
              <div className="result-header-common">
                <h2>Summary</h2>
              </div>
              <table>
                <tr>
                  <th>Section ID</th>
                  <th>Marks</th>
                  <th>max marks</th>
                  <th>Your Score (%)</th>
                </tr>

                {result &&
                  Object.entries(result.section_wise_marks).map(
                    ([id, marks], index) => {
                      if (marks[0] > 0) {
                        return (
                          <tr key={index}>
                            <td>{id}</td>
                            <td>{parseFloat(marks[0].toFixed(2))}</td>
                            <td>{marks[1]}</td>
                            <td>
                              {parseFloat((marks[0] / marks[1]) * 100).toFixed(
                                2
                              )}
                            </td>
                          </tr>
                        );
                      }
                    }
                  )}
              </table>
            </div>

            {/* Questions wise */}
            <div className="question-wise-container">
              <div className="result-header-common">
                <h2>Question Wise</h2>
              </div>

              <div className="question-wise-data-container">
                <div className="search-container">
                  <label htmlFor="search">Search</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter Subject ID or Question ID"
                  />
                </div>

                <table>
                  <tr>
                    <th>Section ID</th>
                    <th>Question ID</th>
                    <th>Question Type</th>
                    <th>Your Response</th>
                    <th>Correct response</th>
                    <th>marks awarded</th>
                  </tr>
                  {result &&
                    result.responses
                      .filter((item) => {
                        return search.toLocaleLowerCase() === ""
                          ? item
                          : item.question_id
                              .toLocaleLowerCase()
                              .includes(search) ||
                              item.section_id
                                .toLocaleLowerCase()
                                .includes(search);
                      })
                      .map((item, index) => {
                        if (item.student_response[0] != null) {
                          return (
                            <tr key={index}>
                              <td>{item.section_id}</td>
                              {/* <td>{item.question_id}</td> */}
                              <td
                                className={
                                  item.is_correct === "False" &&
                                  item.is_partially_correct === "False"
                                    ? "red"
                                    : item.is_correct === "True" &&
                                      item.is_partially_correct === "False"
                                    ? "green"
                                    : "yellow"
                                }
                              >
                                {item.question_id}
                              </td>
                              <td>{item.question_type}</td>
                              <td>
                                {item.student_response.map((answer, index) => (
                                  <p key={index}>{answer}, </p>
                                ))}
                              </td>
                              <td>
                                {item.correct_response.map((answer, index) => (
                                  <p key={index}>{answer}, </p>
                                ))}
                              </td>
                              <td>{item.marks}</td>
                            </tr>
                          );
                        }
                      })}
                </table>
              </div>
            </div>
          </motion.section>
        )
      )}
      {showError && <ErrorMessage onclose={() => setShowError(false)} />}
    </div>
  );
}

export default QuizEval;
