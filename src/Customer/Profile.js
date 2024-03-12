import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../style/Profile.css";
import axios from "axios";
import "../style/Profile.css";
import Swal from "sweetalert2";
import Logout from "../Logout";
// let st = {
//   backgroundColor: "#f4f5f7",
//   height: "fit-content",
//   minHeight: "100vh",
//   textAlign: "center",
//   alignItem: "center",
//post

function myFunction() {
  var x = document.getElementById("newp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default function Profile() {
  const [userData, setUserData] = useState({});
  const [pass, setPass] = useState({
    newpassword: "",
    confirmpassword: "",
  });

  function handlePasswordInputs(e) {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  }

  const getinfo = () => {
    const id = localStorage.getItem("currentUser");
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((err) => {
        Logout();
        console.log("-->", err);
      });
  };

  useEffect(() => {
    getinfo();
  }, []);
  return (
    <>
      <section className="" style={{ backgroundColor: "#f4f5f7" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px" }}
                      fluid
                    />
                    <MDBTypography tag="h5">Hello</MDBTypography>
                    <MDBCardText>{userData.full_name}</MDBCardText>
                    {/* <MDBIcon far icon="edit mb-5" /> */}
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {userData.email}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            {userData.phone_number}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">More Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">CNIC</MDBTypography>
                          <MDBCardText className="text-muted">
                            {userData.cnic}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Points</MDBTypography>
                          <MDBCardText className="text-muted">
                            {userData.points}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      {/* <div className="d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div> */}
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <hr />
          <div className="changepass">
            <input
              type="password"
              id="newp"
              placeholder="New Password"
              value={pass.newpassword}
              name="newpassword"
              onChange={handlePasswordInputs}
            />
            <span>
              <input
                style={{ display: "inline" }}
                type="checkbox"
                onClick={myFunction}
              />
              Show Password
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={pass.confirmpassword}
              name="confirmpassword"
              onChange={handlePasswordInputs}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                const id = localStorage.getItem("currentUser");

                if (pass.newpassword != pass.confirmpassword) {
                  alert("Passwords do not match");
                } else {
                  if (pass.confirmpassword.length >= 8) {
                    Swal.fire({
                      title: "Are you sure?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Save",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        let obj = { newpassword: pass.newpassword, id: id };
                        console.log("obj is ", obj);
                        axios({
                          url: "http://localhost:3001/changePassword",
                          data: obj,
                          method: "put",
                        })
                          .then((response) => {
                            console.log(">>>", response.data);
                            // alert("Password Updated Successfully");
                            Swal.fire("Password Updated!", "", "success");

                            setPass({ newpassword: "", confirmpassword: "" });
                          })
                          .catch((err) => {
                            Logout();
                            console.log("err is ", err);
                          });
                      }
                    });
                  } else {
                    alert("Password must be  at least 8 characters long");
                  }
                }
              }}
            >
              Change Password
            </button>
          </div>
        </MDBContainer>
      </section>
    </>
  );
}
