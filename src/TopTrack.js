import React, { useEffect, useState } from "react";

const TopTrack = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `/artist/${id}/top`;

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
      {data && data.data && data.data.length > 0 ? (
        <h4 class="top-track-heading">Top Tracks</h4>
      ) : (
        <h4 class="top-track-heading"> No Top Tracks Found</h4>
      )}

      {data &&
        data.data &&
        data.data.map((item, index) => (
          <div id={item.id} className="top-track">
            <p className="item-number">{(index = index + 1)}.</p>
            <p>{item.title}</p>
            <p className="duration">{(item.duration / 60).toFixed(2)}</p>
          </div>
        ))}
    </>
  );
};

export default TopTrack;
