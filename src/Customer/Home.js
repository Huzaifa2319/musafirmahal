import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:3001/getTrips",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setTrips(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div class="wrapper">
          <div class="search-input">
            <input type="text" placeholder="Type to search.." />
            <div class="icon">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
        <section className="articles">
          {/* <Card /> */}
          {/* {console.log(trips.length)} */}
          {trips.map(Show)}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
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
      estTime={obj.estTime}
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
            <h6 style={{ color: "green" }}>Sold: 5</h6>
            <Link to={`/details/${props.tripid}`} className="read-more">
              Read more{" "}
              {/* <span className="sr-only">about this is some title</span> */}
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

// const Card = (props) => {
//   return (
//     <>
//       <article>
//         <div className="article-wrapper">
//           <figure>
//             <img src="https://picsum.photos/id/103/800/450" alt="" />
//           </figure>
//           <div className="article-body">
//             <h2>This is some title</h2>
//             <p>
//               Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
//               euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
//               lobortis porta. Vestibulum ultrices iaculis enim imperdiet
//               egestas.
//             </p>
//             <Link to={"/details"} className="read-more">
//               Read more{" "}
//               <span className="sr-only">about this is some title</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </article>
//     </>
//   );
// };
