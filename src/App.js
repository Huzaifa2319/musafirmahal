import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Customer/Home";
import Header from "./Customer/Header";
import Main from "./Customer/Main";
import Footer from "./Customer/Footer";
import Feedback from "./Customer/Feedback";
import Profile from "./Customer/Profile";
import Services from "./Customer/Services";
import Form from "./Customer/Login";
import Signup from "./Customer/Signup";
import ItemDetails from "./Customer/ItemDetails";
import Bookings from "./Customer/Bookings";
import { useState, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoutes";
import axios from "axios";
function App() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  const token = localStorage.getItem("token");

  if (token) {
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = tokenData.exp * 1000; // Expiration time in milliseconds
    if (Date.now() > expirationTime) {
      localStorage.removeItem("token");
      setLogin(false);
      navigate("/login");
    }
  } else {
    // SignOut({ login, setLogin });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(token ? true : false);
    getAllTrips();
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

  //-----------------------------------------------------------------------
  //fetching all trips
  const [trips, setTrips] = useState([]);

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
      <Header isLogin={login} setLogin={setLogin} />

      <Routes>
        {/* <Route exact path="/" element={<Main />} /> */}
        {/* <Route
          path="/trips"
          element={<Home trips={trips} setTrip={setTrips} />}
        /> */}
        {/* <Route path="/feedback" element={<Feedback />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/about" element={<Services />} /> */}
        {/* <Route path="/bookings" element={<Bookings />} /> */}
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
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={login}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute user={login}>
              <Services />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips"
          element={
            <ProtectedRoute user={login}>
              <Home trips={trips} setTrip={setTrips} />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute user={login}>
              <Main />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id/:status" element={<ItemDetails />} />
      </Routes>
      <Footer isLogin={login} />
    </>
  );
}

export default App;
