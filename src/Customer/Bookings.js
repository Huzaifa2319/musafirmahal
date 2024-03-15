import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../style/Booking.css";
import Logout from "../Logout";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  function fetchT() {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("currentUser");
    const options = {
      url: `https://musafirmahalbackend.vercel.app/mybookings/${userId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(options)
      .then((response) => {
        // console.log("response is ", response.data);
        setBook(response.data);
      })
      .catch((err) => {
        console.log(err);
        Logout();
        navigate("/login");
        // localStorage.removeItem("adtoken");
        // navigate("/login");
      });
  }

  useEffect(() => {
    fetchT();
  }, []);

  function Show(obj) {
    return (
      <Row
        data={obj}
        // fetchT={fetchT}
      />
    );
  }

  return (
    <>
      <div className="bookingPage" style={{ minHeight: "100vh" }}>
        <div className="mtrip">
          <h1>My Bookings</h1>
          <div className="box">
            <div class="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <th>Trip</th>
                  <th>Image</th>
                  <th>Date</th>
                  <th>No of Tickets</th>
                  <th>Ammount to be paid(Rs)</th>
                  <th>Status</th>
                  <th>Details</th>
                </thead>

                <tbody>{book.map(Show)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Row = (props) => {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios({
      url: `https://musafirmahalbackend.vercel.app/searchTrip/${props.data.tripId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("-->", response.data);
        setTrip(response.data);
      })
      .catch((err) => {
        // Logout();
        // navigate("/login");
        console.log(err);
      });
  }, []);

  var color;
  if (props.data.status === "pending") {
    color = "yellow";
  } else if (props.data.status === "cancelled") {
    color = "red";
  } else if (props.data.status === "confirmed") {
    color = " greenyellow";
  }
  const st = {
    background: color,
  };

  const details = () => {
    Swal.fire({
      title: "Details",
      // text: "You won't be able to revert this!",
      html: `
      <h6>Full Name:${" " + props.data.name}</h6>
      <h6>CNIC:${" " + props.data.cnic}</h6>
      <h6>Phone Number:${" " + props.data.phone}</h6>
      <h6>Email:${" " + props.data.email}</h6>
      <hr/>
      <h6>${trip.name + " [" + trip.date + "]"}</h6>
      <h6>Trip Id:${" " + props.data.tripId}</h6>
      <h6>Departure Location:${" " + trip.depLocation}</h6>
      <h6>Time of Departure:${" " + trip.depTime}</h6>
      <h6>No of Tickets:${" " + props.data.no_tickets}</h6>
      <h6 style="background-color:${color}">Status :${
        " " + props.data.status
      }</h6>
      <hr/>
      <h6>Total:${" " + props.data.total}</h6>
      <h6>Discount${"(" + trip.discount + "%) :" + props.data.discount}</h6>
      <h6>Grand Total: ${" " + props.data.grandTotal}</h6>
      `,
      footer:
        "Just tell your CNIC or registered phone number to the agent and you will get the ticket.  For Cancelling your booking Call on the contact numbers mentioned. Thank you",
    });
  };

  return (
    <>
      <tr className="trows" style={{}}>
        <td>{trip.name}</td>
        <td>
          <img src={trip.img} alt="loading" />
        </td>
        <td>{trip.date}</td>
        <td>{props.data.no_tickets}</td>
        <td>{props.data.grandTotal}</td>
        <td>{props.data.status}</td>

        <td>
          <div style={{}}>
            <button className="btn btn-primary" onClick={details}>
              Details
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Bookings;
