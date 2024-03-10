import { Routes, Route } from "react-router-dom";
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
import { useState, useEffect } from "react";
function App() {
  const [login, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(token ? true : false);
  }, [login]);

  return (
    <>
      <Header isLogin={login} setLogin={setLogin} />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/trips" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<Services />} />
        <Route
          path="/login"
          isLogin={login}
          setLogin={setLogin}
          element={<Form isLogin={login} setLogin={setLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
      <Footer isLogin={login} />
    </>
  );
}

export default App;
