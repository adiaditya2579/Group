import { React, useContext, useState } from "react";
import "./Navbar.css";
import {
  MdCalculate,
  MdCheckCircle,
  MdClose,
  MdDescription,
  MdEditNote,
  MdGroup,
  MdGroups,
  MdHome,
  MdMenu,
  MdNotifications,
  MdNotificationsNone,
  MdPerson,
  MdPlayArrow,
  MdSchool,
} from "react-icons/md";
import Button from "../Buttons/Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MdShoppingCart } from "react-icons/md";
import { LoginContext } from "../../Contexts/LoginContect";
import axios from "axios";
import { BsPersonFill } from "react-icons/bs";

function Navbar() {
  const {
    userData,
    setUserData,
    loginData,
    setLoginData,
    setShowProfile,
    handleSignIn,
  } = useContext(LoginContext);

  const [toggleNav, setToggleNav] = useState(false);

  const mobileNavLinks = [
    {
      icon: <MdHome />,
      title: "Home",
      path: "/",
    },
    // {
    //     icon: <MdPerson />,
    //     title: 'Profile',
    //     path: '/profile'
    // },
    {
      icon: <MdPlayArrow />,
      title: "Lectures",
      path: "/lectures",
    },
    {
      icon: <MdEditNote />,
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
    // {
    //   icon: <MdCalculate />,
    //   title: "Grade Predictor",
    //   path: "/grpred",
    // },
    {
      icon: <MdCheckCircle />,
      title: "Quiz Evaluator",
      path: "/quiz",
    },
    {
      icon: <BsPersonFill />,
      title: "About",
      path: "/About",
    },
    {
        icon: <MdGroups />,
        title: 'Groups',
        path: '/groups'
    }
    // {
    //     icon: <MdCheckCircle />,
    //     title: 'Shop',
    //     path: '/shop'
    // },
  ];

  return (
    <motion.div className="nav-outer-container">
      {/* mobile navbar */}
      <div
        className={`mobile-nav-main-container ${toggleNav ? "showNav" : ""}`}
      >
        <div
          className="close-btn-container"
          onClick={() => {
            setToggleNav(false);
          }}
        >
          <MdClose />
        </div>
        <div className="user-data-container">
          {/* <h1>Project B</h1> */}
          <h3>AceGrade</h3>
          {/* <p>sumitsharma@gmail.com</p> */}
        </div>

        <div className="mobile-nav-container">
          <ul>
            {mobileNavLinks.map((item, index) => {
              return (
                <li
                  to={item.path}
                  onClick={() => setToggleNav(false)}
                  key={index}
                >
                  <span>{item.icon}</span>
                  <NavLink to={item.path} className={"mb-nav-link"}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {userData ? (
            <button
              onClick={() => {
                setShowProfile(true);
              }}
              className="text-white border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-black"
            >
              Profile
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="text-white border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-black"
            >
              Sign in
            </button>
          )}
        </div>

        {/* <div className="signout-container">
                    <Button text="Sign Out" btnClass={"Shop"} />
                </div> */}
      </div>

      <div className="logo-container font-semibold">
        <NavLink to={"/"}>
          <h1>AceGrade</h1>
        </NavLink>
      </div>

      <div className="nav-container">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"lectures"}>Lectures</NavLink>
          </li>
          <li>
            <NavLink to={"notes"}>Notes</NavLink>
          </li>
          <li>
            <NavLink to={"pyq"}>PYQ</NavLink>
          </li>
          <li>
            <NavLink to={"calc"}>Calculator</NavLink>
          </li>
          {/* <li>
            <NavLink to={"grpred"}>Grade Predictor</NavLink>
          </li> */}
          <li>
            <NavLink to={"quiz"}>Quiz Evaluator</NavLink>
          </li>
          <li>
            <NavLink to={"About"}>About</NavLink>
          </li>

          <li><NavLink to={"groups"}>Groups</NavLink></li>
        </ul>

        {userData ? (
          <div
            onClick={() => {
              setShowProfile(true);
            }}
            className=" text-white border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-black"
          >
            Profile
          </div>
        ) : (
          <div
            onClick={handleSignIn}
            className=" text-white border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-black"
          >
            Sign in
          </div>
        )}
      </div>

      {/* <div className="nav-btn-container"> */}
      {/* <motion.div whileHover={{ scale: 1.3 }} className="notification-btn-container" onClick={() => { alert("No New Notifications...") }}>
                    <MdNotificationsNone />
                </motion.div> */}
      {/* </div> */}

      <div
        className="hamburger-container"
        onClick={() => {
          setToggleNav(true);
        }}
      >
        <MdMenu />
      </div>
    </motion.div>
  );
}

export default Navbar;
