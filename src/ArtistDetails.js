import React, { useEffect, useState } from "react";
import TopTrack from "./TopTrack";
import Album from "./Album";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const ArtistDetails = () => {
  const { id , name , fans } = useParams();  
  const [data, setData] = useState(null);
  const history = useHistory();
  
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
      <div className="artist-details-header">
        <div className="artist-details-wrapper" >
        <img src={`https://api.deezer.com/artist/${id}/image`} alt="Avatar" />
        <p className="artist-details-name">{name}</p>
        <p className="artist-details-name-fan">{fans}<span>{" "}fans</span></p>
        </div>
        <div className="top-tracks">
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
