import React, { useEffect, useState } from "react";
import TopTrack from "./TopTrack";
import Album from "./Album";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const ArtistDetails = () => {
  const { id , image_url } = useParams();  
  const [data, setData] = useState(null);
  const history = useHistory();
  const goToHome = (e) => {
    e.preventDefault();
    history.push("/");
  };
  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;

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
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="artist-details-info">
      <button className="btn" onClick={goToHome}>
        Go Back
      </button>
      <div className="artist-details-header">
        <img src={`https://api.deezer.com/artist/${id}/image`} alt="Avatar" />
        <div className="top-tracks">
          <h4>Top Tracks</h4>
          <TopTrack id = {id}/>          
        </div>
      </div>
      <div className="album-container">
        <Album id = {id} />       
      </div>
    </div>
  );
};

export default ArtistDetails;
