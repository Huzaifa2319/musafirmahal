import "../style/Aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Mission = () => {
  return (
    <>
      <section id="about">
        <div style={{ margin: "3%" }}>
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 col-md-12">
              <h2>Our Mission and Vision</h2>
              <p>
                Message by <span className="highlight">Musafir Mahal</span> Team
              </p>
            </div>
            <div className="msgbyteam">
              <p>
                Our key objective is to establish a platform that empowers
                national as well international travelers to seamlessly plan and
                book their travel experiences in Pakistan. We offer a versatile
                range of options to accommodate varying budgets and travel
                preferences. Unlike conventional tourism agencies, our online
                platform serves as a hub for all travel agencies, empowering
                customers to compare offerings and exercise their freedom of
                choice. Our ultimate goal is to promote a vibrant tourism
                culture in Pakistan by streamlining the travel process. In this
                way, we not only assist individuals in getting cost-effective,
                customizable packages but also play a vital role in driving
                Pakistan's economic growth through the tourism sector.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
