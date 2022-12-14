import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const searchHandler = async (e) => {
    e.preventDefault();

    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${search}`;
    e.preventDefault();
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
        credentials: "include",
      },
    })
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

  useEffect(() => {
    const url = `/search/artist?q=${search}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
        credentials: "include",
      },
    })
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
  }, [search]);
  return (
    <div className="Cards">
      <div className="search">
        <h1><span className="dot"></span></h1>
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
        {data &&
          data.data &&
          data.data.map((artist , index) => (
            <div id = {index} className="item">
              <Link to={`/artist/${artist.id}/${artist.name}/${artist.nb_fan}`}>
                <img src={artist.picture} alt="Avatar" />
                <div className="container">                  
                  <p>{artist.nb_fan} fans</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
