import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SubmitHandler = () => {
    console.log(user);
    const options = {
      url: "https://musafirmahalbackend.vercel.app/signup",
      method: "POST",
      data: user,
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        navigate("../login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div class="contanier">
        <div class="w-50 mx-auto py-5 shadow p-4">
          <div className="sb">
            <h2>Signup</h2>

            <div className="sindiv">
              <h6>Full Name</h6>
              <input
                type="text"
                name="full_name"
                value={user.full_name}
                required=""
                onChange={handle}
              />

              <h6>Password</h6>
              <input
                type="password"
                name="password"
                value={user.password}
                required=""
                onChange={handle}
              />
              <h6>CNIC</h6>
              <input
                type="number"
                name="cnic"
                value={user.cnic}
                required=""
                onChange={handle}
              />
              <h6>Phone No</h6>
              <input
                type="text"
                name="phone_number"
                value={user.phone_number}
                required=""
                onChange={handle}
              />
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                value={user.email}
                required=""
                onChange={handle}
              />
            </div>

            <button className="butt" onClick={SubmitHandler}>
              Signup
            </button>
            <div className="slink">
              Already have account?
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
