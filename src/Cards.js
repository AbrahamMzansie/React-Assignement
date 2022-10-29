import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const searchHandler = async (e) => {
    e.preventDefault();

    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem`;
    e.preventDefault();
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("something went wrong , try again later", res);
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Cards">
      <div className="search">
        <h1>O</h1>
        <div className="search-details">
          <button onClick={searchHandler}>search</button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <div className="card">
      <Link to={`/artist/1`}>
               <h1>Go to There</h1>
              </Link>
        {data &&
          data.data &&
          data.data.map((blog) => (
            <div className="item">
              <Link to={`/artist/${blog.id}`}>
                <img src={blog.artist.picture} alt="Avatar" />
                <div className="container">
                  <h4>
                    <b>{blog.artist.name}</b>
                  </h4>
                  <p>{blog.rank} fans</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
