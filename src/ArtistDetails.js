import React from "react";
import TopTrack from "./TopTrack";
import Album from "./Album";
import {useHistory} from 'react-router-dom';

const ArtistDetails = () => {
    const history = useHistory();
    const goToHome = (e)=>{
        e.preventDefault();
        history.push('/');
    }
  return (
    <div className="artist-details-info">
        <button className="btn" onClick={goToHome}>Go Back</button>
      <div className="artist-details-header">
        <img src="" alt="Avatar" />
        <div className="top-tracks">
        <h4>Top Tracks</h4>
            <TopTrack/>
            <TopTrack/>
            <TopTrack/>
            <TopTrack/>
        </div>
        
      </div>
      <div className="album-container">
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      </div>
    </div>
  );
};

export default ArtistDetails;
