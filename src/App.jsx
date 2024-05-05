import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useLocation, json, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Notes from "./Components/Notes/Notes";
import Groups from "./Components/Groups/Groups";
import Lectures from "./Components/Lectures/Lectures";
import QuizEval from "./Components/Quiz_Eval/QuizEval";
import axios from "axios";
import GradePredictor from "./Components/GradePredictor/GradePredictor";
import { analytics } from "../firebase-config";
import { logEvent } from "firebase/analytics";
import Shop from "./Components/Shop/Shop";
import Pyq from "./Components/pyq/Pyq";
import Modal from "./Components/Modal/Modal";
import Calculator from "./Components/Calculator/Calculator";
import Profile from "./Components/Profile/Profile";
import { LoginContext } from "./Contexts/LoginContect";
import { getAuth, signOut, signInWithPopup, ProviderId } from "firebase/auth";
import { auth, googleProvider } from "../firebase-config";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cards from "./Components/CreditPage/Cards";

function App() {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const location = useLocation();

  const [showNotification, setShowNotification] = useState(true);
  const [data, setdata] = useState();
  const [showModal, setShowModal] = useState(false);
  const [tokenExpiration, settokenExpiration] = useState(false);

  // showing profile modal
  const [showProfile, setShowProfile] = useState(false);

  // login using gmail
  const [loginData, setLoginData] = useState();
  const [userData, setUserData] = useState();
  // console.log("login data");
  // console.log(loginData);
  // console.log("User data");
  // console.log(userData);

  // Google analytics - store page view count
  useEffect(() => {
    if (location.pathname == "/") {
      logEvent(analytics, "/home");
    } else if (location.path == "/notes") {
      logEvent(analytics, "/notes");
    } else if (location.path == "/quiz") {
      logEvent(analytics, "/quiz");
    } else if (location.path == "/pyq") {
      logEvent(analytics, "/pyq");
    } else if (location.path == "/calc") {
      logEvent(analytics, "/calc");
    } else if (location.path == "/lectures") {
      logEvent(analytics, "/lectures");
    }
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${base_url}/api/term/23t3`);
        setdata(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    if (data == null) {
      fetchData();
      console.log("Data fetched");
    } else {
      console.log("Data already in cache");
    }
  }, [data, base_url]);

  // google authentication
  function handleSignIn() {
    signInWithPopup(auth, googleProvider).then((data) => {
      setLoginData(data.user.accessToken);
      localStorage.setItem(
        "expirationTime",
        data.user.stsTokenManager.expirationTime
      );

      userData && setShowProfile(true);
      const apiUrl = `${base_url}/authorize`;
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${data.user.accessToken}`,
          },
        })
        .then((response) => {
          // Handle the response
          setUserData(response.data);

          // adding the token to the local storage
          localStorage.setItem("auth_token", data.user.accessToken);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    });
  }
  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      const temp = localStorage.getItem("auth_token");
      setLoginData(temp);
      const apiUrl = `${base_url}/authorize`;
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${temp}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [base_url]);

  // signout
  async function handleSignOut() {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("Successfully signed out");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("expirationTime");
      navigate("/");
      setUserData();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
  const refreshAccessToken = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const idToken = await user.getIdToken(true);
        localStorage.setItem("auth_token", idToken);
        localStorage.setItem(
          "expirationTime",
          user.stsTokenManager.expirationTime
        );
        settokenExpiration(false);
      } else {
        console.error("User not logged in.");
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw error;
    }
  };
  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime =
      Math.floor(localStorage.getItem("expirationTime")) / 1000;
    if (expirationTime) {
      settokenExpiration(expirationTime <= currentTime);
      if (tokenExpiration) {
        refreshAccessToken();
      }
    }
  }, [tokenExpiration]);

  // console.log(tokenExpiration);
  // // const currentTime = new Date(Math.floor(Date.now() / 1000)*1000);
  // const expirationTime = new Date(
  //   (Math.floor(localStorage.getItem("expirationTime")) / 1000) * 1000
  // );
  // console.log(expirationTime);
  // // console.log(currentTime);
  return (
    <div>
      <LoginContext.Provider
        value={{
          showProfile,
          setShowProfile,
          loginData,
          setLoginData,
          userData,
          setUserData,
          handleSignIn,
          handleSignOut,
        }}
      >
        {showProfile && userData && <Profile />}
        {/* modal */}
        {showModal ? <Modal setShowModal={setShowModal} /> : ""}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          data && <Route path="/notes" element={<Notes data={data} />} />
          data && <Route path="/calc" element={<Calculator />} />
          {/* <Route path="/grpred" element={<GradePredictor />} /> */}
          {/* <Route path='/groups' element={<Groups />} /> */}
          {data && (
            <Route path="/lectures" element={<Lectures data={data} />} />
          )}
          <Route path="/quiz" element={<QuizEval />} />
          <Route path="/pyq" element={<Pyq data={data} />} />
          <Route path="/About" element={<Cards />} />
          {/* <Route path='/shop' element={<Shop />} /> */}
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
