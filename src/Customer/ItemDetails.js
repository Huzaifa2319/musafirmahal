import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/IDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
// const pic = require("../images/bg.jpg");

const st = { width: "25px", height: "25px" };

const ItemDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState("");
  const [num, setNum] = useState(1);
  useEffect(() => {
    // alert(id);
    axios
      .get(`http://localhost:3001/searchTrip/${id}`)
      .then((response) => {
        console.log("-->", response.data);
        setTrip(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="detailpage">
        <div className="grid">
          <div>
            <img
              src={trip.img}
              // src="https://i.ibb.co/3msVHYZ/sneaker-image.png"
              className="wrapper-image"
              loading="lazy"
              alt="loading"
            />
          </div>
          <div className="details">
            <h3>{trip.name}</h3>
            <hr />
            <h5>Price: {trip.price}rs</h5>
            <hr />
            <h5>Info : </h5>
            <ul>
              <li>
                <strong>Departure Location: </strong>
                {trip.depLocation}
              </li>
              <li>
                <strong>Departure Time: </strong>
                {trip.depTime}
              </li>
              <li>
                <strong>Estimated Journey Time: </strong>
                {trip.estTime}
              </li>
              <li>
                <strong>Date: </strong>
                {trip.date}
              </li>
              <li>
                <strong>Duration: </strong>
                {trip.duration} days
              </li>
              <li>
                <strong>Contact: </strong>
                {trip.contact}
              </li>
            </ul>
            <hr />
            <h5>Description:</h5>
            <p>{trip.description}</p>

            <hr />

            <div>
              <button
                style={st}
                onClick={() => {
                  if (num > 1) {
                    setNum(num - 1);
                  }
                }}
              >
                -
              </button>
              <input
                type="text"
                disabled
                style={{ width: "60px", height: "25px", textAlign: "center" }}
                value={num}
              />
              <button
                style={st}
                onClick={() => {
                  if (num < 5) {
                    setNum(num + 1);
                  }
                }}
              >
                +
              </button>
            </div>
            <span className="fon">10% 0ff on more than 3 tickets</span>

            {/* <hr /> */}
            <button
              className="butt"
              style={{ display: "inline", width: "50%" }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;

// const ItemDetails = () => {
//   return (
//     <>
//       <div className="detailpage">
//         <div classNameName="grid">
//           <div>
//             <img
//               src={pic}
//               // src="https://i.ibb.co/3msVHYZ/sneaker-image.png"
//               className="wrapper-image"
//               loading="lazy"
//               alt="Sneaker"
//             />
//           </div>
//           <div className="details">
//             <h3>Kashmir</h3>
//             <hr />
//             <h5>Price: 8000rs</h5>
//             <hr />
//             <h5>Info : </h5>
//             <ul>
//               <li>
//                 <strong>Departure Location:</strong>
//                 F9 Park Gate north
//               </li>
//               <li>
//                 <strong>Departure Time: </strong>
//                 10:00 am
//               </li>
//               <li>
//                 <strong>Estimated Journey Time: </strong>
//                 15 hours
//               </li>
//               <li>
//                 <strong>Date: </strong>
//                 05-01-2024
//               </li>
//               <li>
//                 <strong>Duration: </strong>7 Days
//               </li>
//               <li>
//                 <strong>Contact: </strong>
//                 03123456789
//               </li>
//             </ul>
//             <hr />
//             <h5>Description:</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Consequatur pariatur sit, consequuntur beatae nobis quas provident
//               doloremque non odit qui quos, blanditiis delectus. Possimus,
//               pariatur assumenda? Ipsum aperiam explicabo facilis iste! Possimus
//               mollitia sequi est veritatis nam! Commodi nam pariatur itaque
//               nesciunt quod quisquam.
//             </p>
//             <button
//               className="butt"
//               style={{ display: "inline", width: "50%" }}
//             >
//               Buy
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
