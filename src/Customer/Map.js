import React from "react";

const Map = () => {
  return (
    <div>
      <hr />
      <div style={{ margin: "0 3% 0 3%" }}>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-md-12">
            <h2>Our Office Location</h2>
            <p>
              Feel free to contact{" "}
              <span className="highlight">Musafir Mahal</span> any time.
            </p>
          </div>
        </div>
      </div>
      <div style={{ margin: "auto", padding: "30px", textAlign: "center" }}>
        <iframe
          title="officeLocation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.699015409867!2d72.98168791125535!3d33.63904533932418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97bcb01f7ee1%3A0x3f628acc2f8d402f!2sLandmark%20III!5e0!3m2!1sen!2s!4v1710063177927!5m2!1sen!2s"
          width="70%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
