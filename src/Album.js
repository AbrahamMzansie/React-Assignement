import React, { useEffect, useState } from "react";

const Album = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`;
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
  }, []);
  return (
    <>
      {data &&
        data.data &&
        data.data.map((item, index) => (
          <div  id = {item.id} className="album">
            <img src={item.cover} alt="Avatar" />
            <p className="album-title">{item.title}</p>
            <p>{item.release_date.substring(0, 4)}</p>
          </div>
        ))}
    </>
  );
};

export default Album;
