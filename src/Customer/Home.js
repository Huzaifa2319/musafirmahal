import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
const Home = ({ trips }) => {
  return (
    <>
      <div className="home">
        <section className="articles">
          {trips.filter((t) => t.isExpire === false).length === 0 ? (
            <h2 style={{ color: "red" }}>No Trips Available</h2>
          ) : (
            trips.filter((t) => t.isExpire === false).map(Show)
          )}
        </section>
        <hr style={{ margin: "70px auto 20px auto", width: "80%" }} />
        <h2> Past Trips</h2>
        <br />
        <section className="articles">
          {trips.filter((t) => t.isExpire === true).length === 0 ? (
            <h3 style={{ color: "red" }}>No Past Trips to show</h3>
          ) : (
            trips.filter((t) => t.isExpire === true).map(Show)
          )}
        </section>
      </div>
    </>
  );
};

function Show(obj) {
  return (
    <Card
      tripid={obj._id}
      name={obj.name}
      img={obj.img}
      price={obj.price}
      depLocation={obj.depLocation}
      date={obj.date}
      depTime={obj.depTime}
      duration={obj.duration}
      contact={obj.contact}
      description={obj.description}
      isExpire={obj.isExpire}
    />
  );
}

const Card = (props) => {
  return (
    <>
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={props.img} alt="" />
          </figure>
          <div className="article-body">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Link
              to={`/details/${props.tripid}/${props.isExpire}`}
              className="read-more"
            >
              Details{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
