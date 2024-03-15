import React from "react";
import "../style/guest.css";
const GuestForm = () => {
  return (
    <div class="gf">
      <div class="containerg">
        <div class="title">Book Ticket as a Guest</div>
        <div class="form">
          <div class="user__details">
            <div class="input__box">
              <span class="details">Full Name</span>
              <input type="text" placeholder="E.g: John Smith" required />
            </div>
            <div class="input__box">
              <span class="details">CNIC</span>
              <input type="number" placeholder="xxxxx-xxxxxxx-x" required />
            </div>
            <div class="input__box">
              <span class="details">Email</span>
              <input
                type="email"
                placeholder="johnsmith@hotmail.com"
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Phone Number</span>
              <input type="number" placeholder="03xx-xxxxxxx" required />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestForm;
