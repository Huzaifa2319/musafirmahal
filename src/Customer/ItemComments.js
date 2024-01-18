import React, { useEffect } from "react";
import "../ItemComments.css";
import { useState } from "react";
import axios from "axios";
// import { set } from "mongoose";

const ItemComments = ({ tripid }) => {
  // const state = useState();
  // const [arr, add] = useState([" "]);
  // const press = () => {};
  let customerid = localStorage.getItem("currentuser");
  const [allcomments, setall] = useState([]);

  const [comment, setcomment] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/DishComments/${tripid}`,
    })
      .then((response) => {
        setall(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  function handleclick() {
    console.log(comment, tripid);
    axios({
      method: "post",
      url: "http://localhost:3001/giveComment",
      data: {
        comment: comment,
        tripid: tripid,
        customerid: customerid,
      },
    })
      .then((response) => {
        console.log(response.data);
        setall((prevState) => [...prevState, response.data]);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  }
  return (
    <>
      <div className="commentbox">
        <h1>Comments</h1>
        <div className="comArea">
          {allcomments &&
            allcomments.map((a) => {
              return (
                <>
                  <Single customername={a.customername} comment={a.comment} />
                </>
              );
            })}
          {/* <Single /> */}
        </div>
        <div className="tanb">
          <textarea
            // name="Comment here"
            placeholder="Comment here"
            id="enter"
            name="comment"
            value={comment}
            onChange={(event) => setcomment(event.target.value)}
          ></textarea>
          <button className="btn btn-primary" onClick={handleclick}>
            Comment
          </button>
        </div>
      </div>
    </>
  );
};

const Single = ({ customername, comment }) => {
  return (
    <>
      <div className="single_con">
        <h4>{customername}</h4>
        <p>
          {comment}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          minima ratione ducimus aut sit tempora. */}
        </p>
      </div>
    </>
  );
};

export default ItemComments;
