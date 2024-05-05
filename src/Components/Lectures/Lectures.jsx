import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import "./Lectures.css";
import { MdArrowDropDown, MdLaptop } from "react-icons/md";
import ReactPlayer from "react-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContect";
import Modal from "../Modal/SigninModal";

function Lectures({ data }) {
  const Degrees = [
    { id: 1, Degree: "Data Science" },
    // { id: 2, Degree: "Electronic System" },
  ];
  const navigate = useNavigate();
  const [signinModal, setsigninModal] = useState(false);
  const { loginData, userData } = useContext(LoginContext);
  const [lectureTitle, setLectureTitle] = useState("");
  const [accordianOpenClose, setAccordianOpenClose] = useState(false);
  const base_url = import.meta.env.VITE_BASE_URL;
  document.title = "AceGrade | Lectures";
  const [expandAccordian, setExpandAccordian] = useState(0);
  const [SelectionSection, setSelectionSection] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedDegree, setSelectdeDegree] = useState("Data Science");
  const [selectedLevel, setSelectedLevel] = useState("Foundation");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState("");
  const [metaData, setmetaData] = useState("");
  const [videoProgress, setVideoProgress] = useState(0);
  const [progress, setProgress] = useState([]);
  const [videoEnded, setVideoEnded] = useState(false);
  const [lecturesData, setLecturesData] = useState("");
  useEffect(() => {
    if (!userData || !loginData) {
      setsigninModal(true);
    }
  }, [userData, loginData]);
  useEffect(() => {
    async function fetchData() {
      try {
        setmetaData(data.course_metadata[selectedLevel]);
        setSelectedVideo(
          Object.keys(data.course_metadata[selectedLevel])[
            selectedSubjectIndex - 1
          ]
        );
        data &&
          getLectures(
            Object.keys(data.course_metadata[selectedLevel])[
              selectedSubjectIndex - 1
            ]
          );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    async function getLectures(id) {
      try {
        const response = await axios.get(
          `${base_url}/api/course/ns_23t3_${id}`,
          {
            headers: {
              Authorization: `Bearer ${loginData}`,
            },
          }
        );
        setLecturesData(response.data);
        setSelectedVideo(response.data.week_wise[0].videos[0].yt_vid);
        setLectureTitle(response.data.week_wise[0].videos[0].title);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchData();
    if (data == null) {
      navigate("/");
    }
  }, [
    selectedLevel,
    selectedSubjectIndex,
    data,
    base_url,
    loginData,
    data,
    navigate,
  ]);

  // useEffect(() => {}, [data, navigate]);

  useEffect(() => {
    const updatedProgress = [...progress];
    // Find the index of the selected degree
    const degreeIndex = updatedProgress.findIndex(
      (item) => item.Degree === selectedDegree
    );

    // If the degree exists
    if (degreeIndex !== -1) {
      // Find the index of the selected level within the Levels array of the selected degree
      const levelIndex = updatedProgress[degreeIndex].Levels.findIndex(
        (item) => item.Level === selectedLevel
      );

      // If the level exists
      if (levelIndex !== -1) {
        // Update the selected level
        updatedProgress[degreeIndex].Levels[levelIndex].Level = selectedLevel;

        // Find the index of the selected subject within the Subjects array of the selected level
        const subjectIndex = updatedProgress[degreeIndex].Levels[
          levelIndex
        ].Subjects.findIndex((subject) => subject.name === selectedSubject);

        // If the subject exists
        if (subjectIndex !== -1) {
          // Check if the lecture belongs to the currently selected subject
          if (
            updatedProgress[degreeIndex].Levels[levelIndex].Subjects[
              subjectIndex
            ].name === selectedSubject
          ) {
            // Find the index of the lecture within the Lectures array of the selected subject
            const lectureIndex = updatedProgress[degreeIndex].Levels[
              levelIndex
            ].Subjects[subjectIndex].Lectures.findIndex(
              (lecture) => lecture.title === lectureTitle
            );

            // If the lecture exists, update its progress
            if (lectureIndex !== -1) {
              updatedProgress[degreeIndex].Levels[levelIndex].Subjects[
                subjectIndex
              ].Lectures[lectureIndex].progress = videoProgress;
            } else {
              // Otherwise, add a new entry for the lecture progress
              if (lectureTitle != "") {
                updatedProgress[degreeIndex].Levels[levelIndex].Subjects[
                  subjectIndex
                ].Lectures.push({
                  title: lectureTitle,
                  progress: videoProgress,
                });
              }
            }
          }
        } else {
          // If the subject doesn't exist, add it along with lecture progress
          if (selectedSubject !== "") {
            if (lectureTitle != "") {
              updatedProgress[degreeIndex].Levels[levelIndex].Subjects.push({
                name: selectedSubject,
                Lectures: [{ title: lectureTitle, progress: videoProgress }],
              });
            }
          }
        }
      } else {
        // If the level doesn't exist, add it along with subject and lecture progress
        if (selectedLevel != "") {
          updatedProgress[degreeIndex].Levels.push({
            Level: selectedLevel,
            Subjects: [],
          });
        }
      }
    } else {
      // If the degree doesn't exist, add it along with level, subject, and lecture progress
      if (selectedDegree != "") {
        updatedProgress.push({
          Degree: selectedDegree,
          Levels: [],
        });
      }
    }

    setProgress(updatedProgress);
  }, [
    selectedDegree,
    selectedLevel,
    selectedSubject,
    lectureTitle,
    videoProgress,
  ]);

  // console.log(progress);
  // console.log(lectureTitle);
  if (!metaData) {
    return <div>Loading...</div>;
  }
  // console.log(selectedSubject);
  let video;
  if (selectedVideo) {
    video = (
      <div className="flex flex-col gap-4 h-full">
        <ReactPlayer
          controls={true}
          url={`https://www.youtube.com/watch?v=${selectedVideo}`}
          className="player"
          height={"100%"}
          width={"100%"}
          onProgress={(progress) => {
            setVideoProgress(progress.played.toFixed(2));
            if (progress.played === 1) {
              setVideoEnded(true);
            }
          }}
          onEnded={() => {
            setVideoEnded(true);
          }}
        />
        <h1 className="text-lg font-semibold text-gray-800 mb-4 bg-[#6D28D9] p-2">
          {lectureTitle}
        </h1>
        {/* <div className="progress-bar-container w-full h-4 bg-gray-200 rounded-full">
          <div
            className="progress-bar bg-blue-500 h-4 rounded-full"
            style={{ width: `${videoProgress * 100}%` }}
          ></div>
        </div> */}
      </div>
    );
  } else if (data && selectedSubject == "") {
    video = <h1 className="text">Choose a Subject</h1>;
  } else {
    video = (
      <h1 className="text">Login with student email to view this lecture</h1>
    );
  }

  return (
    <div className="lecture-outer-container relative">
      <button
        className="min-[700px]:hidden absolute right-2 top-4 mb-10 bg-[#6D28D9] p-1 rounded-md"
        onClick={() => setSelectionSection((val) => !val)}
      >
        {SelectionSection && (
          <p className="text-white font-semibold text-xs">Hide</p>
        )}
        {!SelectionSection && (
          <p className="text-white font-semibold text-xs">Menu</p>
        )}
      </button>

      {SelectionSection && (
        <div className="notes-top-header-container">
          <h1>
            <span>
              <MdLaptop />
            </span>
            Lectures
          </h1>
          <div className="course-select-dropdown">
            <select
              name="degree"
              id="degree"
              onChange={(e) => {
                setSelectdeDegree(e.target.value);
              }}
              value={selectedDegree}
            >
              {Degrees.map((deg) => (
                <option key={deg.id} value={deg.Degree}>
                  {deg.Degree}
                </option>
              ))}
            </select>
            {selectedDegree == "Data Science" && (
              <>
                <select
                  name="level"
                  id="level"
                  onChange={(e) => {
                    setSelectedLevel(e.target.value),
                      setSelectedSubjectIndex("");
                  }}
                  value={selectedLevel}
                >
                  {Object.keys(data.course_metadata).map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <select
                  onChange={(e) => {
                    setSelectedSubjectIndex(e.target.selectedIndex),
                      setSelectedSubject(e.target.value),
                      setLectureTitle(""),
                      setVideoProgress("");
                  }}
                  value={selectedSubject}
                >
                  <option value="">Select Subject</option>
                  {metaData &&
                    Object.entries(metaData).map(([name, title], index) => {
                      return (
                        <option
                          value={title}
                          key={index}
                          onClick={() => {
                            setSelectedVideo(name);
                          }}
                        >
                          {title}
                        </option>
                      );
                    })}
                </select>
              </>
            )}
          </div>
        </div>
      )}
      <section className="lecture-main-container">
        <div className="main-lecture-body-container">
          <div className="lecture-sidebar-week-container">
            {lecturesData &&
              lecturesData.week_wise.map((item, index) => (
                <div
                  className={`accordian ${
                    expandAccordian == index ? "expand" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="accordian-header"
                    onClick={() => {
                      setExpandAccordian(index),
                        setAccordianOpenClose((val) => !val);
                    }}
                    key={index}
                  >
                    <h1>{item.title}</h1>
                    <div className="down-arrow-container">
                      <MdArrowDropDown />
                    </div>
                  </div>

                  {accordianOpenClose && (
                    <div className="accordian-lists">
                      <ul>
                        {item.videos.map((lecture, lecIndex) => {
                          return (
                            <li
                              onClick={() => {
                                setSelectedVideo(lecture.yt_vid),
                                  setLectureTitle(lecture.title);
                              }}
                              key={lecIndex}
                            >
                              {lecture.yt_vid == ""
                                ? "[" +
                                  lecture.availability +
                                  "] " +
                                  lecture.title
                                : lecture.title}{" "}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="video-main-container">{video}</div>
        </div>
      </section>
      <div>
        {signinModal && <Modal onclose={() => setsigninModal(false)} />}
      </div>
    </div>
  );
}
Lectures.propTypes = {
  data: PropTypes.any.isRequired,
};
export default Lectures;
