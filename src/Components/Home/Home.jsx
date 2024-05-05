import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  MdArrowRightAlt,
  MdCalculate,
  MdCheck,
  MdCheckCircle,
  MdDescription,
  MdGroup,
  MdGroups,
  MdLaptop,
  MdMode,
  MdOpenInNew,
  MdGrade,
  MdOutlineArrowRightAlt,
  MdShoppingCart,
} from "react-icons/md";
import hero_img from "../../assets/hero-img-2.svg";
import "./Home.css";
import Notification from "../Notification/Notification";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import { Tilt } from "react-tilt";
import Button from "../Buttons/Button";

function Home() {
  // page title
  document.title = "AceGrade | Home";

  const docs = [
    {
      title: "DS  Handbook",
      url: "https://drive.google.com/file/d/1reCLaan2aUfjcAvgXEFne7j3p1j93ZcQ/view?usp=drivesdk",
    },
    {
      title: "DS Grading Doc",
      url: "https://bit.ly/gradingjan2024",
    },
    {
      title: "ES Handbook",
      url: "https://docs.google.com/document/d/e/2PACX-1vSD1ldcEz7GatzyEJyMkQMZmSyf4INBZ8AlD3b8SV8jksl7HgYyKqOsR5QjuVYz8A/pub",
    },
    {
      title: "ES Grading Doc.",
      url: "https://docs.google.com/document/u/2/d/e/2PACX-1vTOqibRPACNEEdOfaCaLi2R6v-Ta9f91t-FU5wnpJOyJNlM_g7hfS8QeFUw4MNHuw3GtQILN0aKJ-Un/pub#h.2p2csry",
    },
    {
      title: "Financial Report",
      url: "http://bit.ly/AceGrade-fin-report",
    },
    {
      title: "Privacy Policy",
      url: "https://acegrade.in/api/docs/privacy",
    },
  ];

  const tools = [
    {
      icon: <MdLaptop />,
      title: "Lectures",
      path: "/lectures",
    },
    {
      icon: <MdMode />,
      title: "Notes",
      path: "/notes",
    },
    {
      icon: <MdDescription />,
      title: "PYQ",
      path: "/pyq",
    },
    {
      icon: <MdCalculate />,
      title: "Calculator",
      path: "/calc",
    },
    {
      icon: <MdCheckCircle />,
      title: "Quiz Evaluator",
      path: "/quiz",
    },
    // {
    //   icon: <MdCalculate />,
    //   title: "Grade Predictor",
    //   path: "/grpred",
    // },
    // {
    //   icon: <MdShoppingCart />,
    //   title: 'Shop',
    //   path: '/shop'
    // },

    // {
    //   icon: <MdGroups />,
    //   title: 'Groups',
    //   path: '/groups'
    // }
  ];

  // react tilt properties
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.0, // 2 = 200%, 1.5 = 150%, etc..
    speed: 100, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div>
      {/* hero section */}
      <div className="hero-outer-container">
        {/* <Modal/> */}

        <Notification />

        <motion.div className="hero-info-container">
          <motion.div
            className="hero-header"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
          >
            <h1>
              Ace<span>Grade</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.1,
            }}
            className="hero-para"
          >
            <ul>
              <li>Elevate your Academic journey with our website! </li>
              <li>
                Find notes, past question papers, and essential tools to excel
                academically.{" "}
              </li>
              <li>
                Join thousands of students who trust us as their go-to resource
                hub. Take the next step towards success today!
              </li>
            </ul>

            {/* <div className="learn-more-container">
              <span>Learn More <MdOutlineArrowRightAlt /> </span>
            </div> */}
          </motion.div>

          <div className="hero-icons-main-container">
            {tools.map((tool, index) => {
              return (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <NavLink
                    to={tool.path}
                    className="tool-container"
                    key={index}
                  >
                    <div className="tool-content-container">
                      <div className="icon-container">{tool.icon}</div>
                      <h4>{tool.title}</h4>
                    </div>
                  </NavLink>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.1,
          }}
          className="hero-img-container"
        >
          <Tilt options={defaultOptions}>
            <img src={hero_img} alt="hero image" />
          </Tilt>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.2,
        }}
        className="docs-main-container"
      >
        <h4>
          Important Documents
          <span>
            <MdArrowRightAlt />
          </span>
        </h4>

        <div className="docs-container">
          {docs.map((item, index) => {
            return (
              <motion.a
                whileHover={{
                  scale: 1.1,
                }}
                href={item.url}
                target="_blank"
              >
                {item.title}
                <span>
                  <MdOpenInNew />
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
