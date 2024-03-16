import React from "react";
import "../style/login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../style/login.css";

const Form = ({ isLogin, setLogin }) => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLogin(false);
    }
    if (isLogin) {
      console.log("login ha user");
      navigate("/");
    }
  });

  let navigate = useNavigate();

  const [user, setUser] = useState({
    phone_number: "",
    password: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    const options = {
      url: "https://musafirmahalbackend.vercel.app/login",
      method: "POST",
      data: user,
    };
    console.log("option is ", options);
    console.log("user is ", user);
    axios(options)
      .then((response) => {
        console.log(response.data);
        let token = response.data.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("currentUser", response.data.data.id);
        localStorage.setItem("UserEmail", response.data.data.email);
        setLogin(true);
      })
      .catch((err) => {
        alert("incorrect email  or password");
        console.log(err);
      });
  };
  return (
    <>
      <div class="contanier">
        <div class="w-50 mx-auto py-5 shadow p-4">
          <div className="lb">
            <h2>Login</h2>

            <div className="indiv">
              <h5>Email</h5>
              <input
                type="text"
                name="email"
                value={user.email}
                required=""
                onChange={handle}
              />

              <h5>Password</h5>
              <input
                type="password"
                name="password"
                value={user.password}
                required=""
                onChange={handle}
              />
            </div>

            <button className="butt" onClick={handleSubmit}>
              Login
            </button>
            <div className="slink">
              Not Registered?
              <Link to="/Signup">Sign up</Link>
            </div>
            <div className="slink">
              Login as a <Link to="/">Guest</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
