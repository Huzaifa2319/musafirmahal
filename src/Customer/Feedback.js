import React from "react";
// import { Link } from "react-router-dom";
import "../style/Feedback.css";
import { useState } from "react";
import axios from "axios";

const Feedback = () => {
  // let navigate = useNavigate();

  const [feed, setfeed] = useState({
    user_email: "",
    feedback: "",
  });

  const handle = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setfeed({ ...feed, [name]: value });
  };

  const clickHandel = () => {
    const options = {
      url: "http://localhost:3001/api/givefeedbacks",
      method: "POST",
      data: feed,
    };
    console.log("-----", feed);
    axios(options)
      .then((response) => {
        console.log(response);
        // navigate("../Signup");
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
              placeholder="Email"
              id="em-input"
              name="user_email"
              value={feed.user_email}
              onChange={handle}
              data-testid="em_tid"
            />
            <textarea
              type="text"
              placeholder="Your Opinion"
              id="text-input"
              name="feedback"
              value={feed.feedback}
              onChange={handle}
              data-testid="feed_tid"
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
