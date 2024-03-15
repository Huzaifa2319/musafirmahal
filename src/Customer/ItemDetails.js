import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/IDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// const pic = require("../images/bg.jpg");
import Logout from "../Logout";
const st = { width: "25px", height: "25px" };

const ItemDetails = () => {
  const navigate = useNavigate();
  const { id, status } = useParams();
  console.log("id is ", id, " status is ", status);
  const [trip, setTrip] = useState("");
  const [num, setNum] = useState(1);

  const [userData, setUserData] = useState({});

  const getinfo = () => {
    const uid = localStorage.getItem("currentUser");
    const token = localStorage.getItem("token");
    axios({
      url: `https://musafirmahalbackend.vercel.app/getUser/${uid}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((err) => {
        // alert(`Weak or no Network ...`);
        // Logout();
        // navigate("/login");
        console.log("-->", err);
      });
  };

  useEffect(() => {
    getinfo();
    // alert(id);
    const token = localStorage.getItem("token");
    console.log("token is : ", token);
    console.log("id is :", id);
    axios({
      url: `https://musafirmahalbackend.vercel.app/searchTrip/${id}`,
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

  // var btn = document.getElementById("buybtn");
  // btn.setAttribute("disabled", "");
  // btn.classList.remove("butt");
  // btn.classList.add("disabled");

  function buyHandle() {
    const t = localStorage.getItem("token");
    if (!t) {
      Swal.fire({
        title: "You are currently a guest user.",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Continue as Guest",
        denyButtonText: `Login`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isConfirmed) {
          // Swal.fire("Saved!", "", "success");

          function buyasguest() {
            Swal.fire({
              customClass: "swal-wide",
              text: "Something went wrong!",
              confirmButtonText: "Next",
              confirmButtonColor: "#9b958a",
              html: `    <div class="gf">
            <div class="containerg">
              <div class="title">Book Ticket as a Guest</div>
              <div class="form">
                <div class="user__details">
                  <div class="input__box">
                    <span class="details">Full Name</span>
                    <input id="n" type="text" placeholder="E.g: John Smith" required />
                  </div>
                  <div class="input__box">
                    <span class="details">CNIC</span>
                    <input id="c" type="number" placeholder="xxxxx-xxxxxxx-x" required />
                  </div>
                  <div class="input__box">
                    <span class="details">Email</span>
                    <input
                      type="email"
                      id="e"
                      placeholder="johnsmith@hotmail.com"
                      required
                    />
                  </div>
                  <div class="input__box">
                    <span class="details">Phone Number</span>
                    <input id="p" type="number" placeholder="03XX-XXXXXXX" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
      `,
            }).then((result) => {
              if (result.isConfirmed) {
                const name = document.getElementById("n").value;
                const cnic = document.getElementById("c").value;
                const email = document.getElementById("e").value;
                const phone = document.getElementById("p").value;

                if (name == "" || cnic == "" || email == "" || phone == "") {
                  Swal.fire({
                    icon: "warning",
                    title: "Oops...(Blank Fields)",
                    confirmButtonColor: "#9b958a",
                    text: "Please fill all the fields to continue!",
                  }).then((result) => {
                    buyasguest();
                  });
                } else {
                  const obj = {
                    name: name,
                    userId: "guestid",
                    cnic: cnic,
                    phone: phone,
                    email: email,
                    tripId: id,
                    no_tickets: num,
                    total: trip.price * num,
                    discount: 0,
                    grandTotal: trip.price * num,
                  };
                  Swal.fire({
                    title: "Details",
                    // text: "You won't be able to revert this!",
                    html: ` 
              <h6>Full Name:${" " + obj.name}</h6>
              <h6>CNIC:${" " + obj.cnic}</h6>
              <h6>Phone Number:${" " + obj.phone}</h6>
              <h6>Email:${" " + obj.email}</h6>
              <hr/>
              <h6>${trip.name + " [" + trip.date + "]"}</h6>
              <h6>Trip Id:${" " + obj.tripId}</h6>
              <h6>No of Tickets:${" " + num}</h6>
              <hr/>
              <h6>Total:${" " + obj.total}</h6>
              <h6>Discount${"(" + trip.discount + "%) :" + obj.discount}</h6>
              <h6>Grand Total: ${" " + obj.grandTotal}</h6>
              `,
                    // icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // const token = localStorage.getItem("token");
                      axios({
                        url: "https://musafirmahalbackend.vercel.app/bookTrip",
                        method: "POST",
                        data: obj,
                        // headers: {
                        //   Authorization: `Bearer ${token}`,
                        // },
                      })
                        .then((res) => {
                          console.log(res.data);
                          Swal.fire({
                            title: "Booked!",
                            text: "Your booking has been requested.",
                            footer:
                              "<b>Congratulations you have succesfully booked your tour with Musafir Mahal!!! Our team will get back to you soon 😉</b>",
                            icon: "success",
                          });
                        })
                        .catch((err) => {
                          Logout();
                          alert(`Something went wrong `);
                          navigate("/login");
                          console.log(err);
                        });
                    }
                  });
                }
              }
            });
          }
          buyasguest();
        } else if (result.isDenied) {
          navigate("/login");
        }
      });
    } else {
      function calculateDiscount() {
        let oneseat = trip.price;
        let dis = trip.discount;
        let minSeat = trip.minticketsfordiscount;
        let tot = oneseat * num;
        if (dis > 0 && minSeat > 0) {
          if (num >= minSeat) {
            let minus = (tot * dis) / 100;
            return minus;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      }

      const obj = {
        name: userData.full_name,
        userId: userData._id,
        cnic: userData.cnic,
        phone: userData.phone_number,
        email: userData.email,
        tripId: id,
        no_tickets: num,
        total: trip.price * num,
        discount: calculateDiscount(),
        grandTotal: trip.price * num - calculateDiscount(),
      };

      Swal.fire({
        title: "Details",
        // text: "You won't be able to revert this!",
        html: ` 
      <h6>Full Name:${" " + obj.name}</h6>
      <h6>CNIC:${" " + obj.cnic}</h6>
      <h6>Phone Number:${" " + obj.phone}</h6>
      <h6>Email:${" " + obj.email}</h6>
      <hr/>
      <h6>${trip.name + " [" + trip.date + "]"}</h6>
      <h6>Trip Id:${" " + obj.tripId}</h6>
      <h6>No of Tickets:${" " + num}</h6>
      <hr/>
      <h6>Total:${" " + obj.total}</h6>
      <h6>Discount${"(" + trip.discount + "%) :" + obj.discount}</h6>
      <h6>Grand Total: ${" " + obj.grandTotal}</h6>
      `,
        // icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm!",
      }).then((result) => {
        if (result.isConfirmed) {
          const token = localStorage.getItem("token");
          axios({
            url: "https://musafirmahalbackend.vercel.app/bookTrip",
            method: "POST",
            data: obj,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => {
              console.log(res.data);
              Swal.fire({
                title: "Booked!",
                text: "Your booking has been requested.",
                footer:
                  "<b>Congratulations you have succesfully booked your tour with Musafir Mahal!!! Our team will get back to you soon 😉</b>",
                icon: "success",
              });
            })
            .catch((err) => {
              Logout();
              alert(`Something went wrong`);
              navigate("/login");
              console.log(err);
            });
        }
      });
    }
  }

  return (
    <>
      <div className="detailpage">
        <div className="grid">
          <div>
            <img
              src={trip.img}
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
                <strong>Departure Date: </strong>
                {trip.date}
              </li>
              <li>
                <strong>Duration: </strong>
                {trip.duration}
              </li>
              <li>
                <strong>Departure Time (approximate): </strong>
                {trip.depTime}
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
                  if (num < 10) {
                    setNum(num + 1);
                  }
                }}
              >
                +
              </button>
            </div>
            <br />
            {trip.discount > 0 && trip.minticketsfordiscount > 0 ? (
              <span className="fon">
                {trip.discount}% 0ff on more than {trip.minticketsfordiscount}{" "}
                or more tickets
              </span>
            ) : (
              <></>
            )}
            {/* <hr /> */}
            {status == "true" ? (
              <button className="disabled" disabled>
                Buy
              </button>
            ) : (
              <button
                className="butt"
                id="buybtn"
                style={{ display: "block", width: "50%", margin: "10px 0 0 0" }}
                onClick={buyHandle}
              >
                Buy
              </button>
            )}
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

//-------------------------------------------------------------------------------------------
// function buyasguest() {
//   Swal.fire({
//     title: "You are currently a guest user.",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Continue as Guest",
//     denyButtonText: `Login`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */

//     if (result.isConfirmed) {
//       // Swal.fire("Saved!", "", "success");
//       Swal.fire({
//         customClass: "swal-wide",
//         text: "Something went wrong!",
//         confirmButtonText: "Next",
//         confirmButtonColor: "#9b958a",
//         html: `    <div class="gf">
//         <div class="containerg">
//           <div class="title">Book Ticket as a Guest</div>
//           <div class="form">
//             <div class="user__details">
//               <div class="input__box">
//                 <span class="details">Full Name</span>
//                 <input id="n" type="text" placeholder="E.g: John Smith" required />
//               </div>
//               <div class="input__box">
//                 <span class="details">CNIC</span>
//                 <input id="c" type="number" placeholder="xxxxx-xxxxxxx-x" required />
//               </div>
//               <div class="input__box">
//                 <span class="details">Email</span>
//                 <input
//                   type="email"
//                   id="e"
//                   placeholder="johnsmith@hotmail.com"
//                   required
//                 />
//               </div>
//               <div class="input__box">
//                 <span class="details">Phone Number</span>
//                 <input id="p" type="number" placeholder="03xx-xxxxxxx" required />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   `,
//       }).then((result) => {
//         if (result.isConfirmed) {
//           const name = document.getElementById("n").value;
//           const cnic = document.getElementById("c").value;
//           const email = document.getElementById("e").value;
//           const phone = document.getElementById("p").value;

//           if (name == "" || cnic == "" || email == "" || phone == "") {
//             Swal.fire({
//               icon: "warning",
//               title: "Oops...(Blank Fields)",
//               confirmButtonColor: "#9b958a",
//               text: "Please fill all the fields to continue!",
//             });
//             // buyasguest();
//           } else {
//             const obj = {
//               name: name,
//               userId: "guestid",
//               cnic: cnic,
//               phone: phone,
//               email: email,
//               tripId: id,
//               no_tickets: num,
//               total: trip.price * num,
//               discount: 0,
//               grandTotal: trip.price * num,
//             };
//             Swal.fire({
//               title: "Details",
//               // text: "You won't be able to revert this!",
//               html: `
//           <h6>Full Name:${" " + obj.name}</h6>
//           <h6>CNIC:${" " + obj.cnic}</h6>
//           <h6>Phone Number:${" " + obj.phone}</h6>
//           <h6>Email:${" " + obj.email}</h6>
//           <hr/>
//           <h6>${trip.name + " [" + trip.date + "]"}</h6>
//           <h6>Trip Id:${" " + obj.tripId}</h6>
//           <h6>No of Tickets:${" " + num}</h6>
//           <hr/>
//           <h6>Total:${" " + obj.total}</h6>
//           <h6>Discount${"(" + trip.discount + "%) :" + obj.discount}</h6>
//           <h6>Grand Total: ${" " + obj.grandTotal}</h6>
//           `,
//               // icon: "warning",
//               showCancelButton: true,
//               confirmButtonColor: "#3085d6",
//               cancelButtonColor: "#d33",
//               confirmButtonText: "Confirm!",
//             }).then((result) => {
//               if (result.isConfirmed) {
//                 // const token = localStorage.getItem("token");
//                 axios({
//                   url: "https://musafirmahalbackend.vercel.app/bookTrip",
//                   method: "POST",
//                   data: obj,
//                   // headers: {
//                   //   Authorization: `Bearer ${token}`,
//                   // },
//                 })
//                   .then((res) => {
//                     console.log(res.data);
//                     Swal.fire({
//                       title: "Booked!",
//                       text: "Your booking has been requested.",
//                       footer:
//                         "<b>Congratulations you have succesfully booked your tour with Musafir Mahal!!! Our team will get back to you soon 😉</b>",
//                       icon: "success",
//                     });
//                   })
//                   .catch((err) => {
//                     Logout();
//                     alert(`Something went wrong `);
//                     navigate("/login");
//                     console.log(err);
//                   });
//               }
//             });
//           }
//         }
//       });
//     } else if (result.isDenied) {
//       navigate("/login");
//     }
//   });
// }
