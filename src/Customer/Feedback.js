import React from "react";
// import { Link } from "react-router-dom";
import "../style/Feedback.css";
import { useState } from "react";
import axios from "axios";

const Feedback = () => {
  // let navigate = useNavigate();

  const [feed, setfeed] = useState({
    title: "",
    feedback: "",
  });

  const handle = (e) => {
    // console.log(">>>>", e.target.value);
    const { name, value } = e.target;
    setfeed({ ...feed, [name]: value });
  };

  const clickHandel = () => {
    const options = {
      url: "https://musafirmahalbackend.vercel.app/giveFeedback",
      method: "POST",
      data: feed,
    };
    console.log("-----", feed);
    axios(options)
      .then((response) => {
        console.log(response);
        setfeed({
          title: "",
          feedback: "",
        });
        alert("Feedback Given");
        // console.log(response.data.found, response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {console.log(feed)}
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
    </>
  );
};

export default Feedback;
