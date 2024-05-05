import { useState, useEffect } from "react";
import "./Pyq.css";
import {
  MdArrowForwardIos,
  MdCloudDownload,
  MdDescription,
  MdLink,
  MdPerson,
} from "react-icons/md";
import axios from "axios";
import { motion } from "framer-motion";

function Pyq({ data }) {
  // env
  const base_url = import.meta.env.VITE_BASE_URL;

  const [selectedLevel, setSelectedLevel] = useState();
  const [courseList, setCourseList] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [exam, setExam] = useState();
  const [selectedExam, setSelectedExam] = useState();
  const [pyqList, setPyqList] = useState();

  // setting the default level as foundation
  useEffect(() => {
    data && setSelectedLevel(Object.keys(data.course_metadata)[2]);
  }, [data]);

  // setting the list of course on the left sidebar, available in the selected level
  useEffect(() => {
    if (selectedLevel) {
      setCourseList(data.course_metadata[selectedLevel]);
      setSelectedSubject(Object.keys(data.course_metadata[selectedLevel])[0]);
    }
  }, [selectedLevel]);

  // fetcing the data of selected subject
  useEffect(() => {
    selectedSubject && getPyq();
  }, [selectedSubject]);

  async function getPyq() {
    try {
      const response = await axios.get(
        `${base_url}/api/pyq/${selectedSubject}`
      );
      setExam(response.data);
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  }

  // setting the options in the exam dropdown
  useEffect(() => {
    exam && !selectedExam && setSelectedExam(Object.keys(exam)[0]);
  }, [exam]);

  useEffect(() => {
    selectedExam && setPyqList(exam[selectedExam]);
  }, [selectedExam, selectedSubject, selectedLevel, exam]);

  return (
    <div className="pyq-outer-container">
      <div className="pyq-header-container ">
        <h1>
          <span>
            <MdDescription />
          </span>
          Previous year questions
        </h1>
        <div className="pyq-dropdown-container ">
          {/* selecting the level - foundation, diploma, degree etc */}
          <select
            name="level"
            id="level"
            onChange={(e) => {
              setSelectedLevel(e.target.value);
            }}
            value={selectedLevel}
          >
            <option value="null" disabled selected hidden>
              Select Level
            </option>
            {data &&
              Object.keys(data.course_metadata).map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
          </select>

          {/* selecting the exam - midterm, quiz1, quiz2 */}
          <select
            name="exam"
            id="exam"
            onChange={(e) => {
              setSelectedExam(e.target.value);
            }}
            value={selectedExam}
          >
            <option value="null" disabled selected hidden>
              select
            </option>
            {exam &&
              Object.keys(exam).map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="pyq-body-main-container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.1,
          }}
          className="sidebar-main-container"
        >
          <ul>
            {courseList &&
              Object.entries(courseList).map(([sub_id, sub_name], index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedSubject(sub_id);
                    }}
                    className={selectedSubject == sub_id ? "active" : ""}
                  >
                    <p>{sub_name}</p>
                    <div className="arrow-container">
                      <MdArrowForwardIos />
                    </div>
                  </li>
                );
              })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.1,
          }}
          className="pyq-container"
        >
          <div className="pyq-right-header-container">
            <h4>Title</h4>
            <h4>URL</h4>
          </div>

          {pyqList == null ? (
            <p className="error-msg">
              PYQ not available for the selected subject.
            </p>
          ) : (
            pyqList &&
            pyqList.map((item, index) => {
              return (
                <a href={item.url} target="_blank" key={index}>
                  <div className="pyq">
                    <div className="pyq-tile-container pyq-common">
                      <div className="pyq-icon-container">
                        <MdCloudDownload />
                      </div>
                      <p>{item.term}</p>
                    </div>

                    <div className="pyq-author-container pyq-common">
                      <div className="pyq-icon-container">
                        <MdLink />
                      </div>
                      <p>{item.url}</p>
                    </div>
                  </div>
                </a>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Pyq;
