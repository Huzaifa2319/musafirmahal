import React from "react";
import "../style/Feedback.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Logout from "../Logout";
const Feedback = () => {
  let navigate = useNavigate();

  const [feed, setfeed] = useState({
    title: "",
    feedback: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setfeed({ ...feed, [name]: value });
  };

  const clickHandel = () => {
    if (feed.title === "" || feed.feedback === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...(Blank Fields)",
        confirmButtonColor: "#9b958a",
        text: "Please fill all the fields to continue!",
      });
    } else {
      feed.name = localStorage.getItem("UserEmail");
      const token = localStorage.getItem("token");
      const options = {
        url: "https://musafirmahalbackend.vercel.app/giveFeedback",
        method: "POST",
        data: feed,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("-----", feed);
      axios(options)
        .then((response) => {
          console.log(response);
          setfeed({
            title: "",
            feedback: "",
          });

          Swal.fire({
            icon: "success",
            title: "Feedback has been given",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Logout();
          navigate("/login");
          console.log(err);
        });
    }
  };

  return (
    <>
      <div>
        <div className="feedpage">
          <div className="login-box">
            <h2>Feedback</h2>
            <div className="input-box">
              <input
                type="text"
                placeholder="Title"
                id="em-input"
                name="title"
                value={feed.title}
                onChange={handle}
              />
              <textarea
                type="text"
                placeholder="Your Opinion"
                id="text-input"
                name="feedback"
                value={feed.feedback}
                onChange={handle}
              />
              <button className="butt" onClick={clickHandel}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
