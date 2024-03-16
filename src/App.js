import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Customer/Home";
import Main from "./Customer/Main";
import Footer from "./Customer/Footer";
import Feedback from "./Customer/Feedback";
import Profile from "./Customer/Profile";
import Mission from "./Customer/Mission";
import Form from "./Customer/Login";
import Signup from "./Customer/Signup";
import ItemDetails from "./Customer/ItemDetails";
import Bookings from "./Customer/Bookings";
import { useState, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoutes";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Customer/Navbar";
function App() {
  //------------react hooks-----------------
  const location = useLocation();
  const navigate = useNavigate();

  //-----------states-------------------
  const [trips, setTrips] = useState([]);
  const [userData, setUserData] = useState({});

  const [login, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  //------------Session Management------------------
  const token = localStorage.getItem("token");

  if (token) {
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = tokenData.exp * 1000; // Expiration time in milliseconds
    if (Date.now() > expirationTime) {
      localStorage.removeItem("token");
      setLogin(false);
      navigate("/login");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(token ? true : false);
    getAllTrips();
    getinfo();
    if (token) {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = tokenData.exp * 1000; // Expiration time in milliseconds
      if (Date.now() > expirationTime) {
        localStorage.removeItem("token");
        setLogin(false);
        navigate("/login");
      }
    }
  }, [login]);

  //-----------------------Get user Data API call-------------------------------------

  const getinfo = () => {
    const id = localStorage.getItem("currentUser");
    const token = localStorage.getItem("token");
    axios({
      url: `https://musafirmahalbackend.vercel.app/getUser/${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((err) => {
        // Logout();
        console.log("-->", err);
      });
  };

  //-----------------------Get Trips API call-------------------------------------

  const getAllTrips = () => {
    axios({
      url: "https://musafirmahalbackend.vercel.app/gettrips",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setTrips(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //--------------------------------------------------------------------
  return (
    <>
      {location.pathname !== "/login" && (
        <Navbar isLogin={login} setLogin={setLogin} />
      )}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/trips" element={<Home trips={trips} />} />
        <Route path="/about" element={<Mission />} />
        <Route
          path="/login"
          isLogin={login}
          setLogin={setLogin}
          element={<Form isLogin={login} setLogin={setLogin} />}
        />
        {/* -------------------------------------------------------------------------- */}
        <Route
          path="/feedback"
          element={
            <ProtectedRoute user={login}>
              <Feedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute user={login}>
              <Bookings trips={trips} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={login}>
              <Profile userData={userData} />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id/:status" element={<ItemDetails />} />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </>
  );
}

export default App;
